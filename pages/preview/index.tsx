import { TITLE_FORM } from '../../constants';

const Preview = (props: any) => {
  return (
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
          <p className="appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight" id="nama">{props?.nama ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            NIK
          </p>
        </div>
        <div className="md:w-2/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="nik">{props?.nik ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            No. Kartu Keluarga
          </p>
        </div>
        <div className="md:w-2/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="no-kk">{props?.noKK ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Foto KTP
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="foto-ktp">{props?.fotoKTP ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Foto Kartu Keluarga
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="foto-kk">{props?.fotoKK ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Umur
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="umur">{props?.umur ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Jenis Kelamin
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="jenis-kelamin">{props?.jenisKelamin ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Provinsi
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="provinsi">{props?.provinsi ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Kabupaten / Kotamadya
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="kab-kota">{props?.kabKota ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Kecamatan
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="kecamatan">{props?.kecamatan ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Kelurahan / Desa
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="kelurahan-desa">{props?.kelurahanDesa ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Alamat
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="alamat">{props?.alamat ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            RT
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="rt">{props?.rt ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            RW
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="rw">{props?.rw ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Penghasilan Sebelum Pandemi
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="penghasilan-sebelum">{props?.penghasilanSebelum ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Penghasilan Setelah Pandemi
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="penghasilan-setelah">{props?.penghasilanSesudah ?? '-'}</p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <p className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4">
            Alasan membutuhkan bantuan
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="alasan">{props?.alasan ?? '-'}</p>
        </div>
      </div>
      <hr />
    </div >
  );
}

export default Preview
