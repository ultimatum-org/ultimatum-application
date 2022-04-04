import { Group, Text, Box, Avatar, UnstyledButton, useMantineTheme, Modal, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft } from 'tabler-icons-react'

const Account = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const signIn = useForm({
        initialValues: {
        publicKey: '',
        localPort: ''
        },

        validate: {
            publicKey: (value) => (value.length == 130 ? null : 'Must be a valid public key with a length of 130 characters.'),
            localPort: (value) => (value < 65535 && value > 1023 ? null : 'Must be a valid port number from 1023 to 65535')
    }});

    const signedIn = false

    return (
        <>
            <Modal opened={opened} onClose={() => setOpened(false)} title="Login to Ultimatum">
                <form onSubmit={signIn.onSubmit((values) => 
                    fetch(`localhost:${values.localPort}/public-key`)
                        .then((res) => res.json())
                        .then((data) => {
                        setData(data)
                        console.log(data)
                        })
                    )}>
                    <Group grow direction="column">
                        <TextInput
                            required
                            label="Public Key"
                            placeholder="Public Key"
                            {...signIn.getInputProps('publicKey')}
                        />
                        <TextInput
                            required
                            label="Local Port"
                            placeholder="Local Port"
                            {...signIn.getInputProps('localPort')}
                        />
                    </Group>
                    <Group position="right" mt="md">
                        <Button type="submit">Sign In</Button>
                    </Group>
                </form>
            </Modal>
            <Box
                sx={{
                    paddingTop: theme.spacing.sm,
                    borderTop: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                    }`,
                }}
            >
                <UnstyledButton
                    onClick={() => setOpened(true)}

                    sx={{
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                    '&:hover': {
                        backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                    }}
                >
                    { signedIn ? (
                        <Group>
                            <Avatar radius="xl"/>
                            <Box sx={{ flex: 1 }}>
                                <Text size="sm" weight={500}>
                                    John Doe
                                </Text>
                                <Text color="dimmed" size="xs">
                                    email@gmail.com
                                </Text>
                            </Box>
                            {theme.dir === 'ltr' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                        </Group>
                        ) : (
                        <Group>
                            <Box sx={{ flex: 1 }}>
                                <Text size="sm" weight={500}>
                                    Not signed in!
                                </Text>
                                <Text color="dimmed" size="xs">
                                    Sign in to make transactions and contribute
                                </Text>
                            </Box>
                            {theme.dir === 'ltr' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                        </Group>
                        )
                    }
                </UnstyledButton>
            </Box>
        </>
    )
}

export default Account