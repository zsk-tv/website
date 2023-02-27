import { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import TagManager from "react-gtm-module";
import "../components/CSS/styles.scss";
import { NextUIProvider, createTheme } from "@nextui-org/react";

const GTM_ID: string = "G-LQ8851E18Y";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, []);

  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        background: "#000000",
      },
      fonts: {
        sans: "Inter, -apple-system, sans-serif",
      },
    },
  });

  return (
    <>
      <Head>
        <title>ZSK TV Poznań</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
};

export default App;
