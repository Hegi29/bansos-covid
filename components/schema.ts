import * as yup from 'yup';
import { Reason } from '../enum/reason';

const schema = yup
  .object({
    nama: yup.string().required("Silakan masukan nama"),
    nik: yup.string().required("Silakan masukan NIK"),
    noKK: yup.string().required("Silakan masukan No. KK"),
    fotoKTP: yup.mixed().test("required", "Silakan unggah foto KTP", (file) => {
      if (file[0]) return true;
      return false;
    })
      .test("fileSize", "File terlalu besar (maks. 2MB)", (file) => {
        return file[0] && file[0].size <= 2000000;
      }),
    fotoKK: yup.mixed().test("required", "Silakan unggah foto KK", (file) => {
      if (file[0]) return true;
      return false;
    })
      .test("fileSize", "File terlalu besar (maks. 2MB)", (file) => {
        return file[0] && file[0].size <= 2000000;
      }),
    umur: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value
    }).test("required", "Silakan masukan umur", (value) => {
      if (value && value > 0) return true;
      return false;
    }),
    jenisKelamin: yup.string().required("Silakan masukan jenis kelamin"),
    provinsi: yup.string().required("Silakan pilih provinsi"),
    kabupatenKota: yup.string().required("Silakan pilih kabupaten / kotamadya"),
    kecamatan: yup.string().required("Silakan pilih kecamatan"),
    kelurahanDesa: yup.string().required("Silakan pilih kelurahan / desa"),
    alamat: yup.string().required("Silakan masukan alamat"),
    rt: yup.string().required("Silakan masukan RT"),
    rw: yup.string().required("Silakan masukan RW"),
    penghasilanSebelum: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value;
    }).test("required", "Silakan masukan penghasilan sebelum pandemi", (value) => {
      if (value && value > 0) return true;
      return false;
    }),
    penghasilanSesudah: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value;
    }).test("required", "Silakan masukan penghasilan sesudah pandemi", (value) => {
      if (value && value > 0) return true;
      return false;
    }),
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
