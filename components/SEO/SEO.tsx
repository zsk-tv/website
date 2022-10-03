import Head from "next/head";

function SEO() {
  return (
    <Head>
      <title>ZSK TV Poznań</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="title" content="ZSK TV Poznań" />
      <meta
        name="description"
        content="Strona internetowa ZSK TV działającego w Zespole Szkół Komunikacji im. Hipolita Cegielskiego w Poznaniu"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://zsktv.pl/" />
      <meta property="og:title" content="ZSK TV Poznań" />
      <meta
        property="og:description"
        content="Strona internetowa ZSK TV działającego w Zespole Szkół Komunikacji im. Hipolita Cegielskiego w Poznaniu"
      />
      <meta property="og:image" content="/images/logo-bg.png" />
      <meta property="twitter:url" content="https://zsktv.pl/" />
      <meta property="twitter:domain" content="zsktv.pl" />
      <meta property="twitter:title" content="ZSK TV Poznań" />
      <meta
        property="twitter:description"
        content="Strona internetowa ZSK TV działającego w Zespole Szkół Komunikacji im. Hipolita Cegielskiego w Poznaniu"
      />
      <meta property="twitter:image" content="/images/logo-bg.png" />

      <meta property="og:site_name" content="zsktv.pl" />
      <meta name="theme-color" content="#272D70" />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="HandheldFriendly" content="True" />
      <meta http-equiv="cleartype" content="on" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#272D70" />
      <meta name="application-name" content="ZSK TV Poznań" />
      <meta
        name="msapplication-tooltip"
        content="Strona internetowa ZSK TV działającego w Zespole Szkół Komunikacji im. Hipolita Cegielskiego w Poznaniu"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="address=no" />
    </Head>
  );
}

export default SEO;
