const ModalPreview = ({ showModal, closeModal, props }: any) => {
  console.log('props', props);

  return (
    <>
      {showModal &&
        <div className="bg-black bg-opacity-50 w-y-auto fixed inset-0 z-50 flex justify-center items-center outline-none focus:outline-none">
          <div className="relative w-[800px] my-6 mx-auto">
            <div className="border-0 max-h-[400px] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <p className="font=semibold">Preview Data</p>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={closeModal}
                >
                  <span className="text-black opacity-7 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                    x
                  </span>
                </button>
              </div>
              <div className="modal-body relative p-4 ">
                <div className='overscroll-contain'>
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
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export { ModalPreview }
