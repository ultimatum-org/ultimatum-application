import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Meta from '../components/Meta'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks'
import { ChevronsDownLeft } from 'tabler-icons-react';

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: 'dark',
  })

  const toggleColorScheme = () => {
    setColorScheme((colorScheme) => (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  //DOESNT WORK

  const user = fetch('api/auth/verify')
  .then((res) => res.json())
  .then((user) => {
      console.log(user)
      return user
  }).catch((err) => {
    console.log(err)
  })

  console.log(Component)

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
          <Layout user={"USer"}>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}