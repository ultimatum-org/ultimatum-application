import { Title, Text, Button, Group, Image, Box, Container, Grid } from '@mantine/core'
import { BrandGithub, Messages } from 'tabler-icons-react';

const index = () => {
    return (
        <>
            <Box sx={{ maxWidth: '75vw' }} mx="auto">
                <Group position="center" direction="column">
                    <Group position="center" direction="column" style={{paddingTop: '15vh'}}>
                        <Title>Ultimatum</Title>
                        <Text align="center">The open source Decentralized Autonomous Organization empowering the community.</Text>
                        <Button>Join The Community</Button>
                    </Group>
                    <Grid style={{paddingTop: '15vh'}} align="center">
                        <Grid.Col md={6} lg={5}>
                            <Image src="images/svg-1.svg"/>
                        </Grid.Col>
                        <Grid.Col md={6} lg={7}>
                            <Text>A True DAO</Text>
                            <Title>Building The Future</Title>
                            <Text>Invest in the future by contributing to an organization which puts the people's needs first.</Text>
                            <br/>
                            <Button>Learn More</Button>
                        </Grid.Col>
                    </Grid>
                    <Grid style={{paddingTop: '15vh'}} align="center">
                        <Grid.Col md={6} lg={5}> 
                            <Image src="images/svg-2.svg"/>
                        </Grid.Col>
                        <Grid.Col md={6} lg={7}>
                            <Text>Open Source</Text>
                            <Title>Know Everything</Title>
                            <Text>Fully transparent and open source organization dedicated to your security and privacy.</Text>
                            <br/>
                            <Button>View The Code</Button>
                        </Grid.Col>
                    </Grid>
                    <Grid style={{paddingTop: '15vh'}}>
                        <Grid.Col md={4} lg={4}>
                            <Container sx={(theme) => ({
                                backgroundColor: theme.colors.gray[0],
                                color: theme.colors.dark[4],
                                borderRadius: '10px',
                                height: '100%',
                            })}>
                                <Image src="images/svg-3.svg" style={{paddingTop: '40px'}}/>
                                <Title align="center" order={3} style={{paddingTop: '50px'}}>Self Dependent</Title>
                                <br/>
                                <Text align="center" style={{paddingBottom: '40px'}}>Decentralized blockchain which runs outside of other chains</Text>
                            </Container>
                        </Grid.Col>
                        <Grid.Col md={4} lg={4}>
                            <Container sx={(theme) => ({
                                backgroundColor: theme.colors.gray[0],
                                color: theme.colors.dark[4],
                                borderRadius: '10px',
                                height: '100%'
                            })}>
                                <Image src="images/svg-5.svg" style={{paddingTop: '40px'}}/>
                                <Title align="center" order={3} style={{paddingTop: '50px'}}>A Proper DAO</Title>
                                <br/>
                                <Text align="center" style={{paddingBottom: '40px'}}>Fully open and secure voting schema to make decisions</Text>
                            </Container>
                        </Grid.Col>
                        <Grid.Col md={4} lg={4}>
                            <Container sx={(theme) => ({
                                backgroundColor: theme.colors.gray[0],
                                color: theme.colors.dark[4],
                                borderRadius: '10px',
                                height: '100%'
                            })}>
                                <Image src="images/svg-7.svg" style={{paddingTop: '40px'}}/>
                                <Title align="center" order={3} style={{paddingTop: '50px'}}>Power To The People</Title>
                                <br/>
                                <Text align="center" style={{paddingBottom: '40px'}}>A DAO which puts the code in the hands of the community</Text>
                            </Container>
                        </Grid.Col>
                    </Grid>
                    <Grid style={{paddingTop: '15vh'}} align="center">
                        <Grid.Col md={6} lg={5}>
                            <Image src="images/svg-4.svg"/>
                        </Grid.Col>
                        <Grid.Col md={6} lg={7}>
                            <Text>Web 3.0</Text>
                            <Title>Learn Web 3.0 With The Community</Title>
                            <Text>See the power of Web 3.0 in action with the Ultimatum community and decentralized development platform.</Text>
                            <br/>
                            <Button>View The Docs</Button>
                        </Grid.Col>
                    </Grid>
                    <Group position="center" direction="column" grow style={{paddingTop: '15vh', paddingBottom: '15vh'}}>
                        <Title>Join The Team Today</Title>
                        <Group grow>
                            <Button variant="outline">
                                <Group>
                                    GitHub
                                    <BrandGithub/>
                                </Group>
                            </Button>
                            <Button variant="outline">
                                <Group>
                                    Contribute
                                    <Messages/>
                                </Group>
                            </Button>
                        </Group>
                    </Group>
                </Group>
            </Box>
        </>
    )
}

export default index