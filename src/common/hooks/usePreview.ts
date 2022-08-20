import { useRouter } from 'next/router';

import { useDataStore } from '~/utils/.';

const usePreview = () => {
  const { data } = useDataStore();
  const router = useRouter();

  const inputForm = () => {
    router.push("/form");
  }

  const logout = () => {
    router.push("/");
  }

  return {
    data,
    inputForm,
    logout
  }
}

export { usePreview }
