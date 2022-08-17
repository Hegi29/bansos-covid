/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import { TITLE_APP, META_DESC } from '~/constants/.';

const LoginLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Login | {TITLE_APP}</title>
        <meta name="description" content={META_DESC} />
      </Head>
      {children}
    </>
  )
}

export default LoginLayout;
