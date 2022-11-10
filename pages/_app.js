import '../styles/globals.css'

import { Inter } from '@next/font/google'

import Head from 'next/head'
import Image from 'next/image'

import Title from '../components/Title'
import Nav from '../components/Nav'

import Description from '../components/Description'


function MyApp({ Component, pageProps }) {
  return (
    <>      
      <Head>
        <title>Loredana Sandu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='container'>
        <Title />
        {/* <Description text='Change in progress...'/> */}
        <Nav />
        <main className='main'>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
