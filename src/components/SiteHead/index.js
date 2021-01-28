import React from 'react';
import Head from 'next/head';

export default function SiteHead() {
  return (
    <Head>
      <title>Astroquiz | Aluraquiz - Davi Félix</title>
      <link rel="icon" href="/img/solar-system.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      <meta property="og:description" content="Venha testar seus conhecimentos sobre o Universo no Astroquiz" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Astroquiz" />
      <meta property="og:url" content="https://quiz-with-nextjs.vercel.app/" />
      <meta property="og:image" content="/img/imageog.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1767" />
      <meta property="og:image:height" content="922" />
      <meta property="og:image:alt" content="Astroquiz" />
      <meta property="twitter:description" content="Venha testar seus conhecimentos sobre o Universo a partir do Astroquiz" />
      <meta property="twitter:creator" content="Davi Félix" />
      <meta property="twitter:image" content="/img/imageog.png" />
      <meta property="twitter:site" content="Astroquiz" />
    </Head>
  );
}
