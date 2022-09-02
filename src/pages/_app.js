import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps, title = 'Enterprise Learner Record Repository' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
