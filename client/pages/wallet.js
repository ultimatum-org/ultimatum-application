import Meta from '../components/Meta'
import { TextInput, Checkbox, Button, Group, Box, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

const wallet = () => {
  const form = useForm({
    initialValues: {
      walletAddress: '',
    },

    validate: {
      walletAddress: (value) => (value.length == 130 ? null : value.length),
    },
  });

  return (
    <>
      <Box sx={{ maxWidth: '75vw' }} mx="auto">
        <Title order={4}>Check Your Balance</Title>
        <br/>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            required
            label="Public Wallet Address"
            placeholder="Public Address"
            {...form.getInputProps('walletAddress')}
          />
          <Group position="right" mt="md">
            <Button type="submit">Check Balance</Button>
          </Group>
        </form>
      </Box>
      <Box sx={{ maxWidth: '75vw' }} mx="auto">
        <TextInput
          label="Returned Balance"
          placeholder="Returned Balance"
          disabled
        />
    </Box>
  </>
  );
}

export default wallet