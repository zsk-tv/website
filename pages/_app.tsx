import Head from "next/head";
import { AppProps } from "next/app";
import "../components/CSS/styles.scss"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZSKTV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;