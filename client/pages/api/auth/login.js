import { sign } from "jsonwebtoken"
import { serialize } from "cookie"

const secret = process.env.SECRET

const users = require('../../../data/users.json')

export default async function (req, res) {
    const { publicKey, hash } = req.body

    console.log(hash)
    console.log(users.find(item => item.hash = hash).publicKey)
    console.log(publicKey)

    if(users.find(item => item.hash = hash).publicKey == publicKey) {
        const token = sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            _id: users.find(item => item.hash === hash).id,
            publicKey: users.find(item => item.hash === hash).publicKey
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