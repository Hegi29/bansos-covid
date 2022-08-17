import { useEffect } from 'react';

import { URL_GET_WILAYAH, URL_GET_REASON } from '~/constants/api';

const useWilayah = (setProvinces: any, selectedProvince: any, setCities: any,
  selectedKabKota: any, setDistrict: any, selectedDistrict: any, setVillages: any, setReasons: any) => {
  useEffect(() => {
    fetch(`${URL_GET_WILAYAH}/provinces.json`)
      .then(response => response.json())
      .then(provinces => setProvinces(provinces));
  }, [setProvinces])

  useEffect(() => {
    if (selectedProvince) {
      fetch(`${URL_GET_WILAYAH}/regencies/${selectedProvince}.json`)
        .then(response => response.json())
        .then(item => setCities(item));
      return;
    }

    setProvinces([]);
  }, [selectedProvince, setCities, setProvinces])

  useEffect(() => {
    if (selectedKabKota) {
      fetch(`${URL_GET_WILAYAH}/districts/${selectedKabKota}.json`)
        .then(response => response.json())
        .then(item => setDistrict(item));
      return;
    }
  }, [selectedKabKota, setDistrict])

  useEffect(() => {
    if (selectedDistrict) {
      fetch(`${URL_GET_WILAYAH}/villages/${selectedDistrict}.json`)
        .then(response => response.json())
        .then(item => setVillages(item));
      return;
    }
  }, [selectedDistrict, setVillages])

  useEffect(() => {
    fetch(URL_GET_REASON)
      .then(response => response.json())
      .then(item => {
        setReasons(item.payload);
      });
  }, [setReasons])
}

export { useWilayah }
