import { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import "../components/CSS/styles.scss";

const GTM_ID: string = "G-LQ8851E18Y";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, []);

  return (
    <>
      <Head>
        <title>ZSK TV Poznań</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#272d70" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
