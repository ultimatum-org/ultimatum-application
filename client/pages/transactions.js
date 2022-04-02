import Meta from '../components/Meta'
import { TextInput, Checkbox, Button, Group, Box, Text, Title, Accordion } from '@mantine/core';
import { useForm } from '@mantine/form';

const Transactions = () => {
  const createTransactionForm = useForm({
    initialValues: {
      senderAddress: '',
      recipientAddress: '',
      amount: ''
    },

    validate: {
      senderAddress: (value) => (value.length == 130 ? null : 'Must be a valid wallet address with a length of 130 characters.'),
      recipientAddress: (value) => (value.length == 130 ? null : 'Must be a valid wallet address with a length of 130 characters.'),
      amount: (value) => (isNaN(value) ? 'Must be a number.' : null)
    },
  });

  const getTransactionForm = useForm({
    initialValues: {
      walletAddress: '',
    },

    validate: {
      walletAddress: (value) => (value.length == 130 ? null : 'Must be a valid wallet address with a length of 130 characters.'),
    },
  });

  return (
    <>
        <Box sx={{ maxWidth: '75vw' }} mx="auto">
            <Title order={4}>Create A Transaction</Title>
            <br/>
            <form onSubmit={createTransactionForm.onSubmit((values) => console.log(values))}>
                <Group grow>
                    <TextInput
                    required
                    label="Sender Address"
                    placeholder="Sender Address"
                    {...createTransactionForm.getInputProps('senderAddress')}
                    />
                    <TextInput
                        required
                        label="Recipient Address"
                        placeholder="Recipient Address"
                        {...createTransactionForm.getInputProps('recipientAddress')}
                    />
                    <TextInput
                        required
                        label="Amount"
                        placeholder="Amount"
                        {...createTransactionForm.getInputProps('amount')}
                    />
                </Group>
                <Group position="right" mt="md">
                    <Button type="submit">Transact</Button>
                </Group>
            </form>
        </Box>
        <br/>
        <Box sx={{ maxWidth: '75vw' }} mx="auto">
            <Title order={4}>Check Transaction History</Title>
            <br/>
            <form onSubmit={getTransactionForm.onSubmit((values) => console.log(values))}>
            <TextInput
                required
                label="Public Wallet Address"
                placeholder="Public Address"
                {...getTransactionForm.getInputProps('walletAddress')}
            />
            <Group position="right" mt="md">
                <Button type="submit">Check Transactions</Button>
            </Group>
            </form>
            <br/>
            <Accordion iconPosition="right" multiple>
                <Accordion.Item label="Transaction Example 1">
                    <Text>From: senderAddress</Text>
                    <Text>To: recipientAddress</Text>
                    <Text>Amount: amount</Text>
                    <br/>
                    <Text>Transaction ID: id</Text>
                    <Text>Block: block</Text>
                </Accordion.Item>
                <Accordion.Item label="Transaction Example 2">
                    <Text>From: senderAddress</Text>
                    <Text>To: recipientAddress</Text>
                    <Text>Amount: amount</Text>
                    <br/>
                    <Text>Transaction ID: id</Text>
                    <Text>Block: block</Text>
                </Accordion.Item>
                <Accordion.Item label="Transaction Example 3">
                    <Text>From: senderAddress</Text>
                    <Text>To: recipientAddress</Text>
                    <Text>Amount: amount</Text>
                    <br/>
                    <Text>Transaction ID: id</Text>
                    <Text>Block: block</Text>
                </Accordion.Item>
            </Accordion>
        </Box>
  </>
  );
}

export default Transactions