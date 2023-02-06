import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="The Gig Life" />
        <meta property="og:description" content="Join The Gig Life to get the most relevant news, politics, road stories and tips & tools related to the gig economy delivered to your inbox" />
        <meta property="og:image" content="https://my-og-img.vercel.app/api/og" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
