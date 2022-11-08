import Head from 'next/head'
import Image from 'next/image'

import Title from '../components/Title'
import Nav from '../components/Nav'

import styles from '../../styles/Home.module.css'
import Description from '../components/Description'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loredana Sandu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title />
        <Description text='Change in progress...'/>
        <Description text='Con el cambio de estación hay que cambiar las sábanas.'/>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
