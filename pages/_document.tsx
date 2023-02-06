import { Html, Head, Main, NextScript } from 'next/document'
import OgImage from '../public/og_image.png';

function Document({host}: {host: string}) {

  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="The Gig Life" />
        <meta property="og:description" content="Join The Gig Life to get the most relevant news, politics, road stories and tips & tools related to the gig economy delivered to your inbox" />
        <meta property="og:image" content={`${host}${OgImage.src}`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


Document.getInitialProps = async (ctx: any) => {
  const { req, query, res, asPath, pathname } = ctx;
  let host;
  if (req) {
    host = req.headers.host
  }
  return { host: String(host) }
}

export default Document