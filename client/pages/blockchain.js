import Meta from '../components/Meta'
import { TextInput, Checkbox, Button, Group, Box, Text, Title, Accordion } from '@mantine/core';
import { ThemeIcon, Wallet, Exchange, Apps, Download, Home, AlertCircle, Messages } from 'tabler-icons-react';
import { useForm } from '@mantine/form';

const Blockchain = () => {
  return (
    <>
        <Box sx={{ maxWidth: '75vw' }} mx="auto">
            <Title order={4}>Blockchain History</Title>
            <br/>
            <Accordion iconPosition="right" multiple>
                <Accordion.Item label="Blockchain Example 1">
                    <Text>Block ID: id</Text>
                    <Text>Data: data</Text>
                </Accordion.Item>
                <Accordion.Item label="Blockchain Example 2">
                    <Text>Block ID: id</Text>
                    <Text>Data: data</Text>
                </Accordion.Item>
                <Accordion.Item label="Blockchain Example 3">
                    <Text>Block ID: id</Text>
                    <Text>Data: data</Text>
                </Accordion.Item>
            </Accordion>
        </Box>
  </>
  );
}

export default Blockchain