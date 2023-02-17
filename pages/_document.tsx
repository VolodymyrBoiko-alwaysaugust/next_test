import { Html, Head, Main, NextScript } from 'next/document'

function Document({host}: {host: string}) {

  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="The Gig Life" />
        <meta property="og:description" content="Join The Gig Life to get the most relevant news, politics, road stories and tips & tools related to the gig economy delivered to your inbox" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document