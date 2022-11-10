import '../styles/globals.css'

import Head from 'next/head'
import Image from 'next/image'

import Title from '../components/Title'
import Description from '../components/Description'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>      
      <Head>
        <title>Loredana Sandu</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <div className='container'>
        <Title />
        {/* <Description text='Change in progress...'/> */}
        <Nav />
        <main className='main'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
