import Meta from './Meta'
import { useState } from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';
import { AppShell, ActionIcon, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import {Title} from '@mantine/core'
import {APILinks, PageLinks} from './NavLinks'
import Logo from './Logo'
import Account from './Account'

const Layout = ({children, user}) => {
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const handleClose = (e) => {
    if (e === false) {
      return
    }

    setOpened(false)
  }

  return (
    <>
      <Meta/>
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        navbar={
          <Navbar
            p="md"
            // Breakpoint at which navbar will be hidden if hidden prop is true
            hiddenBreakpoint="sm"
            // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
            hidden={!opened}
            // when viewport size is less than theme.breakpoints.sm navbar width is 100%
            // viewport size > theme.breakpoints.sm – width is 300px
            // viewport size > theme.breakpoints.lg – width is 400px
            width={{ sm: 300, lg: 400 }}
          >
            <Navbar.Section>
              <Title order={4}>Navigation</Title>
              <Navbar.Section onClick={handleClose}>
                <PageLinks/>
              </Navbar.Section>
            </Navbar.Section>
            <Navbar.Section grow mt="lg">
              <Title order={4}>API Routes</Title>
              <Navbar.Section onClick={handleClose}>
                <APILinks/>
              </Navbar.Section>
            </Navbar.Section>
            <Navbar.Section>
              <Account user={user}/>
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={60} p="md">
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div style={{ display: 'flex', justifyContent: "space-between"}}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Logo/>
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {theme.colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
              </ActionIcon>
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  );
}

export default Layout