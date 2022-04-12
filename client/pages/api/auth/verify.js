import { verify } from 'jsonwebtoken'
const secret = process.env.SECRET

export default async function (req, res) {
    const { cookies } = req;

    const token = cookies.JWT;

    verify(token, secret, (err, verifiedJwt) => {
        if(err) {
            res.send(err.message)
        } else {
            res.send(verifiedJwt)
        }
    })
}