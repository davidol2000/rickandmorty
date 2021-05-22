import PagesProvider from '../context/pagesContext';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core';
import theme from '../context/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rick and morty encyclopedia</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <PagesProvider>
          <Component {...pageProps} />
        </PagesProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
