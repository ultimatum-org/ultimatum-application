import { TextInput, Select, Card, Textarea, useMantineTheme, Badge, Checkbox, Button, Group, Box, Text, Title, Accordion } from '@mantine/core';
import { ArrowNarrowUp, ArrowNarrowDown } from 'tabler-icons-react'

const Contribution = (props) => {
    var tagColor
    if(props.type === 'bug') {
        tagColor = 'pink'
    } else if(props.type === 'documentation') {
        tagColor = 'blue'
    } else if(props.type === 'enhancement') {
        tagColor = 'green'
    }

    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
        <Group position="apart" style={{ marginBottom: 5}} grow>
            <Text weight={500}>{props.title}</Text>
            <Group position="apart" grow>
                <Badge color="blue" variant="dark">
                    {props.repository}
                </Badge>
                <Badge color={tagColor} variant="light">
                    {props.type}
                </Badge>
            </Group>
        </Group>
        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {props.description}
        </Text>
        <Group position="center" grow>
            <Button variant="light" color="blue" style={{ marginTop: 14 }}>
                <ArrowNarrowUp/>
            </Button>
            <Button variant="light" color="orange" style={{ marginTop: 14 }}>
                <ArrowNarrowDown/>
            </Button>
        </Group>
    </Card>
  )
}

export default Contribution