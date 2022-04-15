import Layout from '../components/Layout'
import Meta from '../components/Meta'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: 'dark',
  })

  const toggleColorScheme = () => {
    setColorScheme((colorScheme) => (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  const [user, setUser] = useState(0)

  //DOESNT WORK

  useEffect(() => {
    try {
      fetch('api/auth/verify')
      .then((res) => res.json())
      .then((newUser) => {
        setUser(newUser)
        // @refresh reset
      }).catch((err) => {
        setUser(0)
      })
    } catch {
      setUser(0)
    }
  }, [user])

  return (
    <>
      <Meta/>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            primaryColor: 'yellow'
          }}
        >
          <Layout user={user}>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}