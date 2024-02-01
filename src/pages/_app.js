import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { Layout } from '@/layouts/default/layout';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#72C240',
      },
      secondary: {
        main: '#858585',
      },
      black: {
        main: '#000000',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
