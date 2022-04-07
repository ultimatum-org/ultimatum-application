import { Notification } from '@mantine/core'
import { Check, X } from 'tabler-icons-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
let users = require('../data/users.json')

const Login = () => {
    const { query } = useRouter()
    const router = useRouter()

    function publicKey() {
        if(typeof users.find(item => item.hash === query.ref) !== 'undefined') {
            return(users.find(item => item.hash === query.ref).publicKey)
        } else {
            setTimeout(publicKey, 250)
        }
    }

    function display(key) {
        if(typeof key === 'undefined') {
            return(
                <Notification disallowClose icon={<X size={18}/>} color="red" title="Error!">
                    Invalid URL    
                </Notification>
            )
        } else {
            return(
                <Notification disallowClose icon={<Check size={18}/>} color="teal" title="Success!">
                    Successfully signed in on public key: {key}
                </Notification>
            )
        }
    }

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return(
        <div>
            {display(publicKey())}
        </div>
    )
}

export default Login