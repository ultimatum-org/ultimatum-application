import cookie from "js-cookie"

export default function handler(req, res) {
    if(req.method !== 'GET') {
        res.status(405).json({ error: 'Must be GET request' })
    }

    console.log(cookie.get('user'))
    
    res.status(200).json({ "user": cookie.get('user') });
}