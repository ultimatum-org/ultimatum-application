import { serialize } from "cookie"

export default async function (req, res) {
    const { cookies } = req;

    const jwt = cookies.JWT;

    if(!jwt) {
        return res.json({ message: "Already signed out" })
    } else {
        const serialised = serialize("JWT", null, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: -1,
            path: '/'
        })

        res.setHeader('Set-Cookie', serialised);
        res.status(200).json({ message: "Successfully signed out" })
    }
}