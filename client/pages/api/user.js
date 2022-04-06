import { useCookies } from "react-cookie"

export default function handler(req, res) {
    const [cookie, setCookie] = useCookies(["user"])

    if(req.method !== 'GET') {
        res.status(405).json({ error: 'Must be GET request' })
    }

    const session = getSession(req, res)

    console.log(session.user)
    
    res.status(200).json({ "user": session.user });
}