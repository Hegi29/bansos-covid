import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useLogin = () => {
  const navigate = useRouter();

  const handleLogin = () => {
    navigate.push('/form');
  }

  useEffect(() => {
    localStorage.removeItem('X-Data-Form');
  }, [])

  return {
    handleLogin
  }
}

export { useLogin }
