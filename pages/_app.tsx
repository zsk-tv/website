import Head from "next/head";
import { AppProps } from "next/app";
import Script from "next/script";
import "../components/CSS/styles.scss"

const GTM_ID: string = "G-LQ8851E18Y";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZSKTV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default App;