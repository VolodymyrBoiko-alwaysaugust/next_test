import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

 function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
      
  </Head>
    <Component {...pageProps} />
  </>
}


App.getInitialProps = async ({ Component, ctx }: any) => {
  let host

  if (ctx.req) {
    host = ctx.req.headers.host
  } else {
    host = location.hostname
  }

  // ToDo: need to update later
  const withSubdomain = host.includes('311gpt.');

  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ...ctx, withSubdomain })
  } else {
    pageProps = {
      withSubdomain
    }
  }
  return { pageProps }
}

export default App;