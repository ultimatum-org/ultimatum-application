import { Group, Text, Box, Avatar, UnstyledButton, useMantineTheme, Modal, List, Button, Anchor } from '@mantine/core';
import { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft, Download } from 'tabler-icons-react'
import cookie from 'js-cookie'
import { useStateIfMounted } from 'use-state-if-mounted'
import axios from 'axios'

const Account = () => {
    const theme = useMantineTheme();
    const [instructions, setInstructions] = useState(false);
    const [settings, setSettings] = useState(false);
    const [user, setUser] = useStateIfMounted(0)
    const [isLoading, setLoading] = useStateIfMounted(0)

    useEffect(() => {
        setLoading(true)
        fetch('api/auth/verify')
        .then((res) => res.json())
        .then((user) => {
            setUser(user)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            setUser("")
        })
    }, [])

    const handleLogout = async () => {
        const user = await axios.get('/api/auth/logout')

        console.log(user)
    }

    if (isLoading) return <p>Loading...</p>

    return (
        <>
            <Modal opened={instructions} onClose={() => setInstructions(false)} title="Login to Ultimatum">
                <Group grow direction="column">
                    <Text>To login to Ultimatum follow these steps:</Text>
                    <List type="ordered">
                        <List.Item>Run the <Anchor href="/download">Ultimatum Client</Anchor></List.Item>
                        <List.Item>[CONTINUE THIS WHEN THE CLIENT APP IS DONE]</List.Item>
                    </List>
                </Group>
                <Group position="right" mt="md">
                    <Button type="submit" onClick={() => setInstructions(false)}>Close</Button>
                </Group>
            </Modal>
            <Modal opened={settings} onClose={() => setSettings(false)} title="Account Settings">
                <Group grow direction="column">
                    <Text sx={{
                        width: '45ch',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                    }}>
                        {user.publicKey}
                    </Text>
                    <Button variant="outline" color="red" onClick={() => {handleLogout()}}>Logout</Button>
                </Group>
                <Group position="right" mt="md">
                    <Button type="submit" onClick={() => setSettings(false)}>Close</Button>
                </Group>
            </Modal>
            <Box
                sx={{
                    paddingTop: theme.spacing.sm,
                    borderTop: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                    }`,
                }}
            >
                { user ? (
                    <UnstyledButton
                        onClick={() => setSettings(true)}

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
                        <Group>
                            <Avatar radius="xl"/>
                            <Box sx={{ flex: 1 }}>
                                <Text size="sm" weight={500} suppressHydrationWarning sx={{
                                    width: '30ch',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {user.publicKey}
                                </Text>
                                <Text color="dimmed" size="xs">
                                    Successfully signed in!
                                </Text>
                            </Box>
                            {theme.dir === 'ltr' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                        </Group>
                    </UnstyledButton>
                    ) : (
                    <UnstyledButton
                        onClick={() => setInstructions(true)}

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
                    </UnstyledButton>
                    )
                }
            </Box>
        </>
    )
}

export default Account