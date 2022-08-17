/* eslint-disable @next/next/no-img-element */
import { MainLayout } from '~/components/.';
import { TITLE_FORM } from '~/constants/.';
import { usePreview } from 'hooks/.';
import styles from '../../styles/Home.module.css';

const Preview = () => {
  const { data, inputForm, logout } = usePreview();

  return (
    <MainLayout page="Preview">
      <div className="w-full p-6">
        <h1 className='font-bold text-xl mb-5'>{TITLE_FORM}</h1>
        <hr />
        <div className="md:flex md:items-center my-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Nama
            </p>
          </div>
          <div className="md:w-2/3">
            <p className="appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight" id="nama">{data?.nama ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              NIK
            </p>
          </div>
          <div className="md:w-2/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="nik">{data?.nik ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              No. Kartu Keluarga
            </p>
          </div>
          <div className="md:w-2/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="no-kk">{data?.noKK ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Foto KTP
            </p>
          </div>
          <div className="md:w-1/3">
            {data && <img alt="foto ktp" src={URL.createObjectURL(data?.fotoKTP[0])} />}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Foto Kartu Keluarga
            </p>
          </div>
          <div className="md:w-1/3">
            {data && <img alt="foto KK" src={URL.createObjectURL(data?.fotoKK[0])} />}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Umur
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="umur">{data?.umur ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Jenis Kelamin
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="jenis-kelamin">{data?.jenisKelamin ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Provinsi
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="provinsi">{data?.namaProvinsi ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Kabupaten / Kotamadya
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="kab-kota">{data?.namaKabupatenKota ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Kecamatan
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="kecamatan">{data?.namaKecamatan ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Kelurahan / Desa
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="kelurahan-desa">{data?.namaKelurahanDesa ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Alamat
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="alamat">{data?.alamat ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              RT
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="rt">{data?.rt ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              RW
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="rw">{data?.rw ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Penghasilan Sebelum Pandemi
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="penghasilan-sebelum">{data?.penghasilanSebelum ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Penghasilan Setelah Pandemi
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="penghasilan-setelah">{data?.penghasilanSesudah ?? '-'}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
              Alasan membutuhkan bantuan
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="alasan">{data?.alasan ?? '-'}</p>
          </div>
        </div>
        <hr />
        <div className={styles.buttonAction}>
          <button type='button' className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3" onClick={inputForm}>Isi Lagi</button>
          <button type='button' className='w-1/3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={logout}>Logout</button>
        </div >
      </div>
    </MainLayout>
  );
}

export default Preview
