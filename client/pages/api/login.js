import cookie from "js-cookie"

const handler = (req, res) => {
    if(req.method !== 'POST') {
        res.status(405).json({ error: 'Must be POST request' })
    }

    try {
        console.log(req.body.publicKey)

        cookie.set("user", req.body.publicKey, {
            expires: 1/24
        })

        console.log(cookie.get("user"))
    
        res.status(200).json({ "success": "Successfully signed in" });
    } catch (error) {
        console.log(error)
    }
}

export default handler