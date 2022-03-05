import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "theme/GlobalStyle";
import { Header } from "@packages/ui/Header";
import { Container } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Магазин курсов" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <Container maxWidth="sm">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
