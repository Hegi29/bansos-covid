/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import { TITLE_APP, META_DESC } from '~/constants/.';
import { ChildProps } from '../interfaces';

const LoginLayout = ({ children }: ChildProps) => {
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
