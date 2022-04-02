import React from 'react';
import { Wallet, Exchange, Apps, Download, Home, AlertCircle, Messages } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import Link from 'next/link'

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  href: string;
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
  const css = `
  a {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit; /* no underline */
    }`

  return (
    <>
      <style>
          {css}
      </style>
        <Link href={`/${href}`} passHref>
            <UnstyledButton
              sx={(theme) => ({
                  display: 'block',
                  width: '100%',
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                  '&:hover': {
                  backgroundColor:
                      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                  },
              })}
            >
              <Group>
                  <ThemeIcon color={color} variant="light">
                  {icon}
                  </ThemeIcon>

                  <Text size="sm">{label}</Text>
              </Group>
            </UnstyledButton>
        </Link>
    </>
  );
}

const APIdata = [
  { icon: <Wallet size={16} />, color: 'blue', label: 'Wallet', href: 'wallet' },
  { icon: <Exchange size={16} />, color: 'teal', label: 'Transactions', href: 'transactions' },
  { icon: <Apps size={16} />, color: 'violet', label: 'Blockchain History', href: 'blockchain' },
  { icon: <Messages size={16} />, color: 'grape', label: 'Contribute', href: 'contribute' },
  { icon: <Download size={16} />, color: 'yellow', label: 'Download Client', href: 'download' },
];

export function APILinks() {
  const links = APIdata.map((link) => <MainLink {...link} key={link.label}/>);
  return <div>{links}</div>;
}

const Pagedata = [
    { icon: <Home size={16} />, color: 'blue', label: 'Home', href: '/' },
    { icon: <AlertCircle size={16} />, color: 'teal', label: 'About', href: 'about' },
    { icon: <Messages size={16} />, color: 'violet', label: 'Forum (Coming soon)', href: 'forum' },
  ];
  
  export function PageLinks() {
    const links = Pagedata.map((link) => <MainLink {...link} key={link.label} />);
    return <div>{links}</div>;
  }