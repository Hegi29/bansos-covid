import { useRouter } from 'next/router';

import { URL_POST_DATA } from '~/constants/api';
import { KEY_DATA } from '../constants';
import { useDataStore } from '../utils';

const usePostData = (
  isValid: boolean,
  getValues: any,
  selectedProvinceName: string,
  selectedKabKotaName: string,
  selectedDistrictName: string,
  selectedVillageName: string,
  setSubmitedData: any,
  reset: any,
  setDisabled: (_arg: boolean) => void,
  openModal: (_arg: boolean) => void,
  setMessage: (_arg: string) => void
) => {
  const router = useRouter();
  const { addData } = useDataStore();

  const onSubmitClicked = () => {
    if (isValid) {
      const dataForm = getValues();
      dataForm.namaProvinsi = selectedProvinceName;
      dataForm.namaKabupatenKota = selectedKabKotaName;
      dataForm.namaKecamatan = selectedDistrictName;
      dataForm.namaKelurahanDesa = selectedVillageName;

      fetch(URL_POST_DATA, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(dataForm)
      })
        .then(response => response.json())
        .then(({ isSuccess, message }) => {
          if (isSuccess) {
            localStorage.setItem(KEY_DATA, JSON.stringify(dataForm));
            addData(dataForm);
            setSubmitedData(true);
          }

          setMessage(message);
          openModal(true);
        });
    }
  }

  const resetForm = () => {
    reset();
    setSubmitedData(false);
    setDisabled(false);
  }

  const preview = () => {
    router.push('/preview');
  }

  return {
    onSubmitClicked,
    resetForm,
    preview
  }
}

export { usePostData }
