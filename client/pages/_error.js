import {Title, Group, Button, Image, Text, Center} from '@mantine/core'
import Link from 'next/link'
import {useRouter} from 'next/router'

function Error({ statusCode }) {
  const router = useRouter()

  return (
    <p>
      {statusCode
        ? (
          <Group position="center" direction="column" spacing="lg" style={{paddingTop: '15vh'}}>
            <Image src="images/404.svg" width={300} alt="This fancy image showed a 404 illustration" withPlaceholder placeholder={<Text align="center">This fancy image showed a 404 illustration</Text>}/>
            <Title>Error 404</Title>
            <Title order={2}>Page Not Found</Title>
            <Button variant="outline" onClick={()=>router.back()}>Return To Safety</Button>
          </Group>
        )
        : (
          <Group position="center" direction="column" spacing="lg" style={{paddingTop: '15vh'}}>
            <Image src="images/error.svg" width={300} alt="This fancy image showed an error illustration" withPlaceholder placeholder={<Text align="center">This fancy image showed a 404 illustration</Text>}/>
            <Title>Error {statusCode}</Title>
            <Title order={2}>Something Went Wrong</Title>
            <Button variant="outline" onClick={()=>router.back()}>Return To Safety</Button>
          </Group>
        )}
    </p>
  )
}
  
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
  
export default Error