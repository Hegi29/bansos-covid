import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TITLE_FORM } from '../constants';
import { Confirmation } from './Confirmation';
import { schema } from './schema';
import { Reason } from '../enum/reason';
import styles from '../styles/Home.module.css';

const FormBansos = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const [disabled, setDisabled] = useState(true);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedKabKota, setSelectedKabKota] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [cities, setCities] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [villages, setVillages] = useState([]);
  const [showOtherReason, setShowOtherReason] = useState(false);
  const [submitedData, setSubmitedData] = useState(false);

  useEffect(() => {
    fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then(response => response.json())
      .then(provinces => setProvinces(provinces));
  }, [])

  useEffect(() => {
    if (selectedProvince) {
      fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`)
        .then(response => response.json())
        .then(item => setCities(item));
      return;
    }

    setProvinces([]);
  }, [selectedProvince])

  useEffect(() => {
    if (selectedKabKota) {
      fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedKabKota}.json`)
        .then(response => response.json())
        .then(item => setDistrict(item));
      return;
    }
  }, [selectedKabKota])

  useEffect(() => {
    if (selectedDistrict) {
      fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrict}.json`)
        .then(response => response.json())
        .then(item => setVillages(item));
      return;
    }
  }, [selectedDistrict])

  const handleChangeProvince = ({ target }: any) => {
    setCities([]);
    setDistrict([]);
    setVillages([]);

    if (target.value) {
      setSelectedProvince(target.value);
      return;
    }
  }

  const handleChangeKabKota = ({ target }: any) => {
    setDistrict([]);
    setVillages([]);

    if (target.value) {
      setSelectedKabKota(target.value);
      return;
    }
  }

  const handleChangeDistrict = ({ target }: any) => {
    setVillages([]);

    if (target.value) {
      setSelectedDistrict(target.value);
      return;
    }
  }

  const handleChangeReason = ({ target }: any) => {
    if (target.value === Reason.Lainnya) {
      setShowOtherReason(true);
      return;
    }

    setShowOtherReason(false);
  }

  const handleUnderstand = ({ target }: any) => {
    setDisabled(!target.checked);
  }

  const onSubmitClicked = () => {
    if (isValid) {
      setSubmitedData(true);

      const dataForm = getValues();

      fetch(`http://localhost:3000/api/simulate-post-data`, {
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
        .then((data) => {
          const { isSuccess, message } = data;
          if (isSuccess) {
            // keluarin modal sukses
          }

          alert(message);
        });
    }
  }

  const resetForm = () => {
    reset();
    setSubmitedData(false);
    setDisabled(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitClicked)} className="w-full p-6">
      <h1 className='font-bold text-xl mb-5'>{TITLE_FORM}</h1>
      <hr />
      <div className="md:flex md:items-center my-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Nama <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <input {...register('nama')} className={`appearance-none border-2 ${errors?.nama ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="nama" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            NIK <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <input {...register('nik')} className={`appearance-none border-2 ${errors?.nik ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="nik" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            No. Kartu Keluarga <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <input {...register('noKK')} className={`appearance-none border-2 ${errors?.noKK ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="no-kk" type="text" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Foto KTP <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <input {...register('fotoKTP')} accept="image/jpg, image/jpeg, image/png" className={`appearance-none border-2 ${errors?.fotoKTP ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="foto-ktp" type="file" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Foto Kartu Keluarga <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <input {...register('fotoKK')} accept="image/jpg, image/jpeg, image/png" className={`appearance-none border-2 ${errors?.fotoKK ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="foto-kk" type="file" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Umur <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <input {...register('umur')} className={`appearance-none border-2 ${errors?.umur ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="umur" type="number" min={1} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Jenis Kelamin <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <select {...register('jenisKelamin')} className={`appearance-none border-2 ${errors?.jenisKelamin ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white cursor-pointer`} id="jenis-kelamin">
            <option value="">-</option>
            <option value="1">Laki-Laki</option>
            <option value="2">Perempuan</option>
          </select>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Provinsi <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <select {...register('provinsi')} className={`appearance-none border-2 ${errors?.provinsi ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white cursor-pointer`} id="provinsi" onChange={(e) => handleChangeProvince(e)}>
            <option value="">-</option>
            {provinces && provinces.map((item: any) => {
              return (
                <option key={item.id} value={item.id}>{item.name}</option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Kabupaten / Kotamadya <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <select {...register('kabupatenKota')} className={`appearance-none border-2 ${errors?.kabupatenKota ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white cursor-pointer`} id="kabupaten-kota" onChange={(e) => handleChangeKabKota(e)}>
            <option value="">-</option>
            {cities && cities.map((item: any) => {
              return (
                <option key={item.id} value={item.id}>{item.name}</option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Kecamatan <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <select {...register('kecamatan')} className={`appearance-none border-2 ${errors?.kecamatan ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white cursor-pointer`} id="kecamatan" onChange={(e) => handleChangeDistrict(e)}>
            <option value="">-</option>
            {districts && districts.map((item: any) => {
              return (
                <option key={item.id} value={item.id}>{item.name}</option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Kelurahan / Desa <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <select {...register('kelurahanDesa')} className={`appearance-none border-2 ${errors?.kelurahanDesa ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white cursor-pointer`} id="kelurahan-desa">
            <option value="">-</option>
            {villages && villages.map((item: any) => {
              return (
                <option key={item.id} value={item.id}>{item.name}</option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Alamat <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea {...register('alamat')} className={`appearance-none border-2 ${errors?.alamat ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="alamat" maxLength={255} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            RT <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <input {...register('rt')} className={`appearance-none border-2 ${errors?.rt ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="rt" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            RW <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <input {...register('rw')} className={`appearance-none border-2 ${errors?.rw ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="rw" />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Penghasilan Sebelum Pandemi <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <input {...register('penghasilanSebelum')} className={`appearance-none border-2 ${errors?.penghasilanSebelum ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="penghasilan-sebelum" type="number" min={0} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Penghasilan Setelah Pandemi <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <input {...register('penghasilanSesudah')} className={`appearance-none border-2 ${errors?.penghasilanSesudah ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="penghasilan-sesudah" type="number" min={0} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Alasan membutuhkan bantuan <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <select {...register('alasan')} className={`appearance-none border-2 ${errors?.alasan ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white cursor-pointer`} id="alasan" onChange={(e) => handleChangeReason(e)}>
            <option value="">-</option>
            <option value="Kehilangan pekerjaan">Kehilangan pekerjaan</option>
            <option value="Kepala keluarga terdampak / korban Covid-19">Kepala keluarga terdampak / korban Covid-19</option>
            <option value="Tergolong Fakir / Miskin semenjak sebelum Covid-19">Tergolong Fakir / Miskin semenjak sebelum Covid-19</option>
            <option value="Lainnya">Lainnya</option>
          </select>
          {showOtherReason && <input {...register('alasanLain')} className={`appearance-none mt-4 border-2 ${errors?.alasanLain ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="alasan-lain" />}
        </div>
      </div>
      <hr />
      <Confirmation handleUnderstand={handleUnderstand} />
      <div className={styles.buttonAction}>
        {!submitedData && <button disabled={disabled} type='submit' className={`w-1/3 ${!disabled ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded mr-3`}>Submit</button>}
        {submitedData && <button type='button' className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3" onClick={resetForm}>Isi Lagi</button>}
        {submitedData && <button type='button' className='w-1/3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Preview</button>}
      </div>
    </form >
  );
}

export { FormBansos }
