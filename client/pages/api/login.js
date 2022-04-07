const fs = require('fs');
const config = require('../../config')

let users = require('../../users.json')

const handler = (req, res) => {
    if(req.method !== 'POST') {
        res.status(405).json({ error: 'Must be POST request' })
    }

    try {
        console.log(req.body.publicKey)

        const user = {
            "id": `${users.length ? Math.max(...users.map(x => x.id)) + 1 : 1}`,
            "publicKey": `${req.body.publicKey}`,
            "hash": `${req.body.hash}`
        }

        // add and save user
        users.push(user);

        console.log(users)
        fs.writeFile("../../users.json", JSON.stringify(users), 'utf8', function (err) {
            if (err) {
                return console.log(err)
            }

            console.log("JSON file has been saved")
        })

        res.status(200).json({ login: `${config.server}/login?ref=${req.body.hash}` });
    } catch (error) {
        console.log(error)
    }
}

export default handler