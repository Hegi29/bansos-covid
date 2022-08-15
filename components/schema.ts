import * as yup from 'yup';
import { Reason } from '../enum/reason';

const schema = yup
  .object({
    nama: yup.string().required("Silakan masukan nama"),
    nik: yup.string().required("Silakan masukan NIK"),
    noKK: yup.string().required("Silakan masukan No KK"),
    fotoKTP: yup.mixed().test("required", "Silakan masukan file", (file) => {
      if (file[0]) return true;
      return false;
    })
      .test("fileSize", "File terlalu besar (maks. 2MB)", (file) => {
        return file[0] && file[0].size <= 2000000;
      }),
    fotoKK: yup.mixed().test("required", "Silakan masukan file", (file) => {
      if (file[0]) return true;
      return false;
    })
      .test("fileSize", "File terlalu besar (maks. 2MB)", (file) => {
        return file[0] && file[0].size <= 2000000;
      }),
    umur: yup.number().required("Silakan masukan umur"),
    jenisKelamin: yup.string().required("Silakan masukan jenis kelamin"),
    provinsi: yup.string().required("Silakan pilih provinsi"),
    kabupatenKota: yup.string().required("Silakan pilih kabupaten / kotamadya"),
    kecamatan: yup.string().required("Silakan pilih kecamatan"),
    kelurahanDesa: yup.string().required("Silakan pilih kelurahan / desa"),
    alamat: yup.string().required("Silakan masukan alamat"),
    rt: yup.string().required("Silakan masukan RT"),
    rw: yup.string().required("Silakan masukan RW"),
    penghasilanSebelum: yup.number().required("Silakan masukan penghasilan"),
    penghasilanSesudah: yup.number().required("Silakan masukan penghasilan"),
    alasan: yup.string().test("required", "Silakan pilih alasan", (reason) => {
      if (reason) return true;
      return false;
    }),
    alasanLain: yup.string().test("required", "Silakan masukan alasan lainnya", (reason, ctx) => {
      if (reason && ctx.parent.alasan === Reason.Lainnya) return true;
      return false;
    })
  })
  .required();

export { schema }
