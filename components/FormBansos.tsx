import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';

import { TITLE_FORM } from '../constants';
import { Confirmation } from './Confirmation';
import { schema } from './schema';
import { Reason } from '../enum/reason';
import { useDataStore } from '~/utils/.';
import styles from '../styles/Home.module.css';

const URL_POST_DATA = process.env.URL_POST_DATA as string;
const URL_GET_REASON = process.env.URL_GET_REASON as string;

const FormBansos = () => {
  const { addData } = useDataStore();
  const router = useRouter();
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

  useEffect(() => {
    console.log('x: ', URL_POST_DATA);
  }, [])

  useEffect(() => {
    console.log('y: ', URL_GET_REASON);
  }, [])

  const [disabled, setDisabled] = useState(true);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedProvinceName, setSelectedProvinceName] = useState("");
  const [selectedKabKota, setSelectedKabKota] = useState("");
  const [selectedKabKotaName, setSelectedKabKotaName] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedDistrictName, setSelectedDistrictName] = useState("");
  const [selectedVillageName, setSelectedVillageName] = useState("");
  const [cities, setCities] = useState([]);
  const [districts, setDistrict] = useState([]);
  const [villages, setVillages] = useState([]);
  const [showOtherReason, setShowOtherReason] = useState(false);
  const [submitedData, setSubmitedData] = useState(false);
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then(response => response.json())
      .then(provinces => setProvinces(provinces));
  }, [])

  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`)
        .then(response => response.json())
        .then(item => setCities(item));
      return;
    }

    setProvinces([]);
  }, [selectedProvince])

  useEffect(() => {
    if (selectedKabKota) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedKabKota}.json`)
        .then(response => response.json())
        .then(item => setDistrict(item));
      return;
    }
  }, [selectedKabKota])

  useEffect(() => {
    if (selectedDistrict) {
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedDistrict}.json`)
        .then(response => response.json())
        .then(item => setVillages(item));
      return;
    }
  }, [selectedDistrict])

  useEffect(() => {
    fetch(URL_GET_REASON)
      .then(response => response.json())
      .then(item => {
        setReasons(item.payload);
      });
  }, [])

  const handleChangeProvince = ({ target }: any) => {
    setCities([]);
    setSelectedKabKota("");
    setDistrict([]);
    setVillages([]);

    if (target.value) {
      const data = target.value.split('::');
      setSelectedProvince(data[0]);
      setSelectedProvinceName(data[1]);
      return;
    }
  }

  const handleChangeKabKota = ({ target }: any) => {
    setDistrict([]);
    setVillages([]);

    if (target.value) {
      const data = target.value.split('::');
      setSelectedKabKota(data[0]);
      setSelectedKabKotaName(data[1]);
      return;
    }
  }

  const handleChangeDistrict = ({ target }: any) => {
    setVillages([]);

    if (target.value) {
      const data = target.value.split('::');
      setSelectedDistrict(data[0]);
      setSelectedDistrictName(data[1]);
      return;
    }
  }

  const handleChangeVillage = ({ target }: any) => {
    if (target.value) {
      const data = target.value.split('::');
      setSelectedVillageName(data[1]);
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
            localStorage.setItem('X-Data-Form', JSON.stringify(dataForm));
            addData(dataForm);
            setSubmitedData(true);
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

  const preview = () => {
    router.push('/preview');
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
          {errors.nama &&
            <small className="text-red-500">
              {errors?.nama?.message as string}
            </small>
          }
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
          {errors.nik &&
            <small className="text-red-500">
              {errors?.nik?.message as string}
            </small>
          }
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
          {errors.noKK &&
            <small className="text-red-500">
              {errors?.noKK?.message as string}
            </small>
          }
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Foto KTP <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <input {...register('fotoKTP')} accept="image/jpg, image/jpeg, image/png, image/bmp" className={`appearance-none border-2 ${errors?.fotoKTP ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="foto-ktp" type="file" />
          {errors.fotoKTP &&
            <small className="text-red-500">
              {errors?.fotoKTP?.message as string}
            </small>
          }
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Foto Kartu Keluarga <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-1/3">
          <input {...register('fotoKK')} accept="image/jpg, image/jpeg, image/png, image/bmp" className={`appearance-none border-2 ${errors?.fotoKK ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="foto-kk" type="file" />
          {errors.fotoKK &&
            <small className="text-red-500">
              {errors?.fotoKK?.message as string}
            </small>
          }
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
          {errors.umur &&
            <small className="text-red-500">
              {errors?.umur?.message as string}
            </small>
          }
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
            <option value="Laki-laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          {errors.jenisKelamin &&
            <small className="text-red-500">
              {errors?.jenisKelamin?.message as string}
            </small>
          }
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
                <option key={item.id} value={`${item.id}::${item.name}`}>{item.name}</option>
              );
            })}
          </select>
          {errors.provinsi &&
            <small className="text-red-500">
              {errors?.provinsi?.message as string}
            </small>
          }
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
                <option key={item.id} value={`${item.id}::${item.name}`}>{item.name}</option>
              );
            })}
          </select>
          {errors.kabupatenKota &&
            <small className="text-red-500">
              {errors?.kabupatenKota?.message as string}
            </small>
          }
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
                <option key={item.id} value={`${item.id}::${item.name}`}>{item.name}</option>
              );
            })}
          </select>
          {errors.kecamatan &&
            <small className="text-red-500">
              {errors?.kecamatan?.message as string}
            </small>
          }
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Kelurahan / Desa <span className={styles.required}>*</span>
          </label>
        </div>
        <div className="md:w-2/3">
          <select {...register('kelurahanDesa')} className={`appearance-none border-2 ${errors?.kelurahanDesa ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white cursor-pointer`} id="kelurahan-desa" onChange={(e) => handleChangeVillage(e)}>
            <option value="">-</option>
            {villages && villages.map((item: any) => {
              return (
                <option key={item.id} value={`${item.id}::${item.name}`}>{item.name}</option>
              );
            })}
          </select>
          {errors.kelurahanDesa &&
            <small className="text-red-500">
              {errors?.kelurahanDesa?.message as string}
            </small>
          }
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
          {errors.alamat &&
            <small className="text-red-500">
              {errors?.alamat?.message as string}
            </small>
          }
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
          {errors.rt &&
            <small className="text-red-500">
              {errors?.rt?.message as string}
            </small>
          }
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
          {errors.rw &&
            <small className="text-red-500">
              {errors?.rw?.message as string}
            </small>
          }
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
          {errors.penghasilanSebelum &&
            <small className="text-red-500">
              {errors?.penghasilanSebelum?.message as string}
            </small>
          }
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
          {errors.penghasilanSesudah &&
            <small className="text-red-500">
              {errors?.penghasilanSesudah?.message as string}
            </small>
          }
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
            {reasons && reasons.map((item: any) => {
              return (
                <option key={item.id} value={item.name}>{item.name}</option>
              );
            })}
          </select>
          {errors.alasan &&
            <small className="text-red-500">
              {errors?.alasan?.message as string}
            </small>
          }
          {showOtherReason &&
            <>
              <input {...register('alasanLain')} className={`appearance-none mt-4 border-2 ${errors?.alasanLain ? 'border-red-500' : 'border-gray-200 focus:border-yellow-jds'} rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`} id="alasan-lain" />
              {errors.alasanLain &&
                <small className="text-red-500">
                  {errors?.alasanLain?.message as string}
                </small>
              }
            </>}
        </div>
      </div>
      <hr />
      <Confirmation handleUnderstand={handleUnderstand} />
      <div className={styles.buttonAction}>
        {!submitedData && <button disabled={disabled} type='submit' className={`w-1/3 ${!disabled ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded mr-3`}>Submit</button>}
        {submitedData && <button type='button' className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3" onClick={resetForm}>Isi Lagi</button>}
        {submitedData && <button type='button' className='w-1/3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={preview}>Preview</button>}
      </div>
    </form >
  );
}

export { FormBansos }
