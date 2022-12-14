import Head from 'next/head';

import { TITLE_APP } from '~/constants/.';
import { Card } from './Card';
import { Footer } from './Footer';
import { LayoutProps } from '../interfaces';
import styles from '~/styles/Home.module.css';

const MainLayout = ({ page, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{page} | {TITLE_APP}</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Card>
            {children}
          </Card>
        </main>
        <Footer />
      </div>
    </>
  )
}

export { MainLayout }
