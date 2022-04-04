export default function handler(req, res) {
    if(req.method !== 'POST') {
        res.status(405).json({ error: 'Must be post request' })
    }

    console.log(req.body.publicKey)
    res.status(200).json({ "publicKey": req.body.publicKey });
}