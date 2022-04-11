import { Notification, Button } from '@mantine/core'
import { Check, X } from 'tabler-icons-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
let users = require('../data/users.json')

import cookie from 'js-cookie';

const Login = () => {
    const { query } = useRouter()
    const router = useRouter()

    function getPublicKey() {
        try {
            if(typeof users.find(item => item.hash === query.ref) !== 'undefined') {
                return(users.find(item => item.hash === query.ref).publicKey)
            } else {
                setTimeout(getPublicKey, 250)
            }
        } catch {
            console.log("Invalid URL")
            return("")
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
            cookie.set("personalHash", query.ref, {expires: 1/24})

            return(
                <Notification disallowClose icon={<Check size={18}/>} color="teal" title="Success!">
                    Successfully signed in on public key: {key}
                </Notification>
            )
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const publicKey = getPublicKey()
        const hash = query.ref

        const credentials = { publicKey, hash }

        try {
            const user = await axios.post('/api/auth/login', credentials)
            console.log(user)
        } catch {
            console.log("Something went wrong")
        }
    }

    const handleGetUser = async () => {
        const user = await axios.get('/api/auth/user')

        console.log(user)
    }

    const handleLogout = async () => {
        const user = await axios.get('/api/auth/logout')

        console.log(user)
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/')
    //     }, 3000)
    // }, [])

    return(
        <div>
            <Button onClick={e => handleSubmit(e)}/>
            <Button onClick={() => handleGetUser()}/>
            <Button onClick={() => handleLogout()}/>
            {/* {display(getPublicKey())} */}
        </div>
    )    
}

export default Login