import { Button } from '@mantine/core'
import cookie from 'js-cookie'

const test = () => {
  return (
    <>
        <Button onClick={() => {cookie.set("token", "ABCD", {expires: 1/24})}}>Login</Button>
        <Button onClick={() => {cookie.remove("token")}}>Logout</Button>
    </>
  )
}

export default test