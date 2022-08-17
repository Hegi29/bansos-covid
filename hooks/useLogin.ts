import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { KEY_DATA } from '../constants';

const useLogin = () => {
  const navigate = useRouter();

  const handleLogin = () => {
    navigate.push('/form');
  }

  useEffect(() => {
    localStorage.removeItem(KEY_DATA);
  }, [])

  return { handleLogin }
}

export { useLogin }
