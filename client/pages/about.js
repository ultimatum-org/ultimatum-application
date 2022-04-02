import { Title, Text, Button, Group, Image, Box, Container, Grid, Blockquote, List, Timeline } from '@mantine/core'
import { BrandGithub, GitBranch, GitCommit, GitPullRequest, MessageDots, Checks, Cash } from 'tabler-icons-react';

const About = () => {
    return (
        <>
            <Box sx={{ maxWidth: '75vw' }} mx="auto">
                <Group position="center" direction="column">
                    <Group direction="column">
                        <Title>Our Story</Title>
                        <Text>The Ultimatum founders have a vision. A vision of platforms for everyone. Platforms which are secure, private and genuinelly are tailored for your experience.</Text>
                        <Blockquote cite="– You, probably.">
                            But how could they possibly achieve this?
                        </Blockquote>
                        <Text>With you! We believe that for a community to truly love the platform they use, they need to be able to change it, to shape it! We all know the dislike button incident right? Imagine if before removing dislikes, the community got the choice to vote with their opinion! Ultimatum helps you build applications which reward the community for contributing their ideas, opinions and programming skills.</Text>
                        <Title>The Details</Title>
                        <Text>In order to achieve this, Ultimatum has been created. Ultimatum is a development platform which allows your community to submit their ideas for review by the community. An individual&apos;s voting power is determined by their past contributions. Essentially, by contributing, individual&apos;s can gain an ever so slight advantage on what happens on the platform. Don&apos;t worry though, Monopolies don&apos;t exist here. In order to encourage community input, the community will be rewarded for their ideas, opinions and programming skills with the Ultimatum currency [TOKEN NAME HERE].</Text>
                        <Blockquote cite="– You, again.">
                            Oh god. Another blockchain project.
                        </Blockquote>
                        <Text>We know... We know. But hear us out. In order to ensure a fully decentralized, community based system, the blockchain architecture is the obvious choice. Our platform was never, is not, and will never be a shit coin for you to pump and dump like there&apos;s no tomorrow. [TOKEN NAME HERE] works by having holders enter their desired selling price, and having buyers enter their desired purchase price. Ultimately, the price of [TOKEN NAME HERE] is determined by the community.</Text>
                        <Title>Logistics</Title>
                        <Text>Ultimatum ultimately has a circular structure, with a few branches of course.</Text>
                        <List>
                            <List.Item>Ultimatum Founders</List.Item>
                            <List withPadding>
                                <List.Item>Us, the people who are writing this</List.Item>
                                <List.Item>Maintaining team of the Ultimatum system and blockchain</List.Item>
                                <List.Item>Founders fee: [FOUNDERS FEE]</List.Item>
                            </List>
                            <List.Item>Project Founders</List.Item>
                            <List withPadding>
                                <List.Item>The people with a vision</List.Item>
                                <List.Item>Application creators</List.Item>
                                <List.Item>Creator fee: Determined by the Project Founder</List.Item>
                            </List>
                            <List.Item>Programmers</List.Item>
                            <List withPadding>
                                <List.Item>The people who implement the community&apos;s ideas</List.Item>
                                <List.Item>Programmer reward: [PROGRAMMER REWARD]</List.Item>
                            </List>
                            <List.Item>Contractors</List.Item>
                            <List withPadding>
                                <List.Item>The community which provides ideas</List.Item>
                                <List.Item>Accepted contract reward: [CONTRACT REWARD]</List.Item>
                            </List>
                            <List.Item>Voters</List.Item>
                            <List withPadding>
                                <List.Item>The people who vote on contractor&apos;s ideas</List.Item>
                                <List.Item>Voter weight: Determined for each individual</List.Item>
                            </List>
                            <List.Item>Miners</List.Item>
                            <List withPadding>
                                <List.Item>The people who compute transactions and smart contracts on the blockchain</List.Item>
                                <List.Item>Block reward: [MINER REWARD]</List.Item>
                            </List>
                        </List>
                        <Text>The Ultimatum system ultimately wants to provide an equal platform for everyone involved, however certain fees and rewards will be given to those deemed to do more work. In the end, if you do a harder job, you get rewarded more.</Text>
                        <Title>Example Flow</Title>
                        <Timeline active={5} bulletSize={24} lineWidth={2}>
                            <Timeline.Item bullet={<GitBranch size={12} />} title="Contract Created">
                                <Text color="dimmed" size="sm">John Doe suggests the dislike button be removed from the platform</Text>
                            </Timeline.Item>
                            <Timeline.Item bullet={<GitCommit size={12} />} title="Voting">
                                <Text color="dimmed" size="sm">The community votes that this is a good idea (it isn&apos;t)</Text>
                            </Timeline.Item>
                            <Timeline.Item title="Programming" bullet={<GitPullRequest size={12} />}>
                                <Text color="dimmed" size="sm">Jane Doe alters the source code to remove the dislike button</Text>
                            </Timeline.Item>
                            <Timeline.Item title="Peer Review" bullet={<MessageDots size={12} />}>
                                <Text color="dimmed" size="sm">The community checks and runs the code and determines through another vote that the code does what it needs to</Text>
                            </Timeline.Item>
                            <Timeline.Item title="Implementation" bullet={<Checks size={12} />}>
                                <Text color="dimmed" size="sm">The code is pulled to the main project and the application is updated</Text>
                            </Timeline.Item>
                            <Timeline.Item title="Rewards" bullet={<Cash size={12} />}>
                                <Text color="dimmed" size="sm">The contractor gets [CONTRACTOR REWARD] [TOKEN NAME HERE]</Text>
                                <Text color="dimmed" size="sm">The community gets [COMMUNITY REWARD] [TOKEN NAME HERE]</Text>
                                <Text color="dimmed" size="sm">The Ultimatum founders get [% OF ALL TRANSACTIONS]</Text>
                                <Text color="dimmed" size="sm">The project founder gets [% OF ALL TRANSACTIONS]</Text>
                            </Timeline.Item>
                        </Timeline>
                    </Group>
                </Group>
            </Box>
        </>
    )
}

export default About