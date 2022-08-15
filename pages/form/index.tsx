import Head from 'next/head';

import { Card, FormBansos, Footer } from '../../components';
import { TITLE_APP } from '../../constants';
import styles from '../../styles/Home.module.css'

const Form = () => {
  return (
    <>
      <Head>
        <title>Form | {TITLE_APP}</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Card>
            <FormBansos />
          </Card>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Form;
