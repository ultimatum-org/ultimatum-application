import { sign } from "jsonwebtoken"
import { serialize } from "cookie"

const secret = process.env.SECRET

const users = require('../../../data/users.json')

function getPublicKey(hashValue) {
    try {
        if(typeof users.find(item => item.hash === hashValue) !== 'undefined') {
            return(users.find(item => item.hash === hashValue).publicKey)
        } else {
            setTimeout(getPublicKey, 250)
        }
    } catch {
        console.log("Invalid URL")
        return("")
    }
}

function getID(hashValue) {
    try {
        if(typeof users.find(item => item.hash === hashValue) !== 'undefined') {
            return(users.find(item => item.hash === hashValue).id)
        } else {
            setTimeout(getID, 250)
        }
    } catch {
        console.log("Invalid URL")
        return("")
    }
}

export default async function (req, res) {
    const { publicKey, hash } = req.body

    if(getPublicKey(hash) == publicKey) {
        const token = sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            _id: getID(hash),
            publicKey: getPublicKey(hash)
        }, secret)

        const serialised = serialize("JWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: '/'
        })

        res.setHeader('Set-Cookie', serialised)
        res.status(200).json({ message: "Success" })
    } else {
        return res.json({ message: "Failed" })
    }
}