import React from 'react';
import Head from 'next/head';

export default function SiteHead() {
  return (
    <Head>
      <title>Quiz Marvel | Feliquiz - Davi Félix</title>
      <link rel="icon" href="/img/mjolnir.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      <meta property="og:description" content="Quiz sobre o Universo Marvel" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Feliquiz Marvel" />
      <meta property="og:url" content="https://quiz-with-nextjs.vercel.app/" />
      <meta property="og:image" content="/img/ogimage.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="660" />
      <meta property="og:image:alt" content="Quiz Marvel" />
      <meta property="twitter:description" content="Quiz sobre o Universo Marvel" />
      <meta property="twitter:creator" content="Davi Félix" />
      <meta property="twitter:image" content="/img/ogimage.png" />
      <meta property="twitter:site" content="Feliquiz Marvel" />
    </Head>
  );
}
