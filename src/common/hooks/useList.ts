import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { KEY_DATA } from '~/constants/.';

const useList = () => {
  const router = useRouter();

  const addForm = () => {
    router.push('/form');
  }

  useEffect(() => {
    const data = localStorage.getItem(KEY_DATA);
    console.log('data', data)
  }, [])

  return { addForm }
}

export { useList }
