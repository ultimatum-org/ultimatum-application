import { useRouter } from 'next/router'
let users = require('../users.json')

const Login = () => {
    const router = useRouter()
    const {ref} = router.query

    console.log(users)

    return(
        <div>
            {users.find(item => item.hash === ref).publicKey}
        </div>
    )
}

export default Login