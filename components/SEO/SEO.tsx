import Head from "next/head";

function SEO() {
  return (
    <Head>
      <title>ZSK TV Poznań</title>
      <link rel="icon" href="/favicon.png" />

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
      <meta name="theme-color" content="#ffffff" />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
}

export default SEO;
