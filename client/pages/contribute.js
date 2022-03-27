import Meta from '../components/Meta'
import { TextInput, Select, Card, Textarea, useMantineTheme, Badge, Checkbox, Button, Group, Box, Text, Title, Accordion } from '@mantine/core';
import { ArrowNarrowUp, ArrowNarrowDown } from 'tabler-icons-react'
import { useForm } from '@mantine/form';
import Contribution from '../components/Contribution'

const contribute = () => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];
        
    const createContributionForm = useForm({
        initialValues: {
        repository: '',
        type: '',
        title: '',
        details: ''
        },

    validate: {
        repository: (value) => (value.length != 0 ? null : 'You must select a repository.'),
        type: (value) => (value.length != 0 ? null : 'You must select a contribution type.'),
        title: (value) => (value.length <= 50 ? null : 'Must be less than 50 characters long.'),
        details: (value) => (value.length <= 500 ? null : 'Must be less than 500 characters long.'),
    },
  });

  return (
    <>
        <Box sx={{ maxWidth: '75vw' }} mx="auto">
            <Title order={4}>Submit A Contribution</Title>
            <br/>
            <form onSubmit={createContributionForm.onSubmit((values) => console.log(values))}>
                <Group grow direction="column">
                    <Select
                        required
                        label="Relevant GitHub Repository"
                        placeholder="Pick One"
                        data={[
                            { value: 'ultimatum-web', label: 'Ultimatum-Web' },
                            { value: 'ultimatum-chain', label: 'Ultimatum-Chain' },
                        ]}
                        {...createContributionForm.getInputProps('repository')}
                    />
                    <Select
                        required
                        label="Contribution Type"
                        placeholder="Pick One"
                        data={[
                            { value: 'bug', label: 'Bug' },
                            { value: 'documentation', label: 'Documentation' },
                            { value: 'enhancement', label: 'Enhancement' },
                        ]}
                        {...createContributionForm.getInputProps('type')}
                    />
                    <TextInput
                        required
                        label="Title"
                        placeholder="Title"
                        {...createContributionForm.getInputProps('title')}
                    />
                    <Textarea
                        required
                        placeholder="Contribution Details"
                        label="Details"
                        {...createContributionForm.getInputProps('details')}
                    />
                </Group>
                <Group position="right" mt="md">
                    <Button type="submit">Submit Contribution For Voting</Button>
                </Group>
            </form>
        </Box>
        <br/>
        <Box sx={{ maxWidth: '75vw' }} mx="auto">
            <Title order={4}>Vote For Contributions</Title>
            <br/>
            <Group grow direction="column">
                <Contribution 
                    title="Contribution Example 1"
                    repository="Ultimatum-Chain"
                    type="bug"
                    description="Description of contribution example 1"
                />
                <Contribution 
                    title="Contribution Example 2"
                    repository="Ultimatum-Web"
                    type="documentation"
                    description="Description of contribution example 2"
                />
                <Contribution 
                    title="Contribution Example 3"
                    repository="Ultimatum-Chain"
                    type="enhancement"
                    description="Description of contribution example 3"
                />
            </Group>
        </Box>
  </>
  );
}

export default contribute