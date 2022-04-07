const express = require('express');
const axios = require('axios');
const { createVerify } = require('crypto')
const cors = require('cors');
const bodyParser = require('body-parser')
const Blockchain = require('../blockchain')
const P2pServer = require('./p2p-server')
const Wallet = require('../wallet')
const TransactionPool = require('../wallet/transaction-pool')
const Miner = require('./miner')
const ChainUtil = require('../chain-util')

const HTTP_PORT = process.env.HTTP_PORT || 3001

const app = express()
const blockchain = new Blockchain()
const wallet = new Wallet()
const tp = new TransactionPool()
const p2pServer = new P2pServer(blockchain, tp)
const miner = new Miner(blockchain, tp, wallet, p2pServer)

app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/blocks', (req, res) => {
    res.json(blockchain.chain)
})

app.post('/sign', (req, res) => {
    const message = ChainUtil.hash("aaa")
    const signature = wallet.sign(message)

    res.send(ChainUtil.verifySignature(req.body.publicKey, signature, message))
})

app.post('/login', (req, res) => {
    const publicKey = req.body.publicKey
    
    const message = ChainUtil.hash("aaa")
    const signature = wallet.sign(message)

    const hash = ChainUtil.hash(publicKey + Date.now())

    if(ChainUtil.verifySignature(req.body.publicKey, signature, message)) {
        axios.post('http://localhost:3000/api/login', {
            publicKey: publicKey,
            hash: hash
        }).then(response => {
            res.send({ 
                "login": response.data.login
            })
        })
    } else {
        res.send('You do not own this wallet address!')
    }
})

app.post('/mine', (req, res) => {
    const block = blockchain.addBlock(req.body.data)
    console.log(`New block added: ${block.hash}`)
    block.toString()

    p2pServer.syncChains()

    res.redirect('/blocks')
})

app.get('/transactions', (req, res) => {
    //res.header("Access-Control-Allow-Origin", "*")
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,")
    res.json(tp.transactions)
})

app.post('/transact', (req, res) => {
    const { recipient, amount } = req.body
    const transaction = wallet.createTransaction(recipient, amount, blockchain, tp)
    
    p2pServer.broadcastTransaction(transaction)
    
    res.redirect('transactions')
})

app.get('/mine-transactions', (req, res) => {
    const block = miner.mine()
    console.log(`New block added: ${block.toString()}`)
    res.redirect('/blocks')
})

app.get('/public-key', (req, res) => {
    //res.header("Access-Control-Allow-Origin", "*")
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,")
    res.json({ publicKey: wallet.publicKey })
})

app.get('/balance', (req, res) => {
    //res.header("Access-Control-Allow-Origin", "*")
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,")
    res.json({ publicKey: wallet.publicKey, balance: wallet.calculateBalance(blockchain) })
})

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`))
p2pServer.listen()