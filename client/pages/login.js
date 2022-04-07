import { useRouter } from 'next/router'
let users = require('../data/users.json')

const Login = () => {
    const { query } = useRouter()

    function publicKey() {
        if(typeof users.find(item => item.hash === query.ref) !== 'undefined') {
            return(users.find(item => item.hash === query.ref).publicKey)
        } else {
            setTimeout(publicKey, 250)
        }
    }

    function display(key) {
        if(typeof key === 'undefined') {
            return("Invalid login")
        } else {
            return(key)
        }
    }

    return(
        <div>
            {display(publicKey())}
        </div>
    )
}

export default Login