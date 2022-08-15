import type { NextPage } from 'next'
import Head from 'next/head'

import { Card, FormBansos, Footer } from '../components'
import { TITLE_APP, META_DESC } from '../constants'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{TITLE_APP}</title>
        <meta name="description" content={META_DESC} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card>
          <FormBansos />
        </Card>
      </main>

      <Footer />
    </div>
  )
}

export default Home
