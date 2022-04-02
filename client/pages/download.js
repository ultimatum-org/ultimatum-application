import {ThemeIcon, Button, Title, Text, Box, Group, Image} from '@mantine/core'
import { BrandGithub, BrandWindows, BrandDebian, BrandApple } from 'tabler-icons-react';

const Download = () => {
  return (
    <>
        <Group position="center" direction="column" spacing="lg" style={{paddingTop: '15vh'}}>
            <Image src="images/download.svg" width={300} alt="This fancy image showed a 404 illustration" withPlaceholder placeholder={<Text align="center">This fancy image showed a 404 illustration</Text>}/>
            <Title align="center">Download The Ultimatum Client</Title>
            <Title order={2}>Executables</Title>
            <Group position="center">
                <Button variant="outline">
                    <Group>
                        Windows
                        <BrandWindows/>
                    </Group>
                </Button>
                <Button variant="outline">
                    <Group>
                        Linux
                        <BrandDebian/>
                    </Group>
                </Button>
                <Button variant="outline">
                    <Group>
                        Mac
                        <BrandApple/>
                    </Group>
                </Button>
            </Group>
            <Title order={2}>Raw Files</Title>
            <Button varient="solid">
                <Group>
                    GitHub
                    <BrandGithub/>
                </Group>
            </Button>
        </Group>
    </>
  )
}

export default Download