export default async function (req, res) {
    const { cookies } = req;

    const jwt = cookies.JWT

    if(!jwt) {
        return res.json({ message: "Invalid token!" })
    }

    res.json({ message: "Top secret!" })
}