import * as yup from 'yup';

import { Reason } from '~/enum/.';
import { validateFileSize, validateFileType, validateIDNumber } from './utils/validateFile';

const schema = yup
  .object({
    nama: yup.string().required("Silakan masukan nama"),
    nik: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value
    }).positive("NIK tidak boleh mengandung - atau berakhiran .").test("required", "Silakan masukan NIK", (value) => {
      if (value && value > 0) return true;
      return false;
    }).test("length", "NIK harus terdiri dari 16 angka", (value) => {
      return validateIDNumber(value);
    }),
    noKK: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value
    }).positive("No KK tidak boleh mengandung - atau berakhiran .").test("required", "Silakan masukan No KK", (value) => {
      if (value && value > 0) return true;
      return false;
    }).test("length", "No KK harus terdiri dari 16 angka", (value) => {
      return validateIDNumber(value);
    }),
    fotoKTP: yup.mixed().test("required", "Silakan unggah foto KTP", (file) => {
      if (file[0]) return true;
      return false;
    })
      .test("fileSize", "File terlalu besar (maks. 2MB)", (file) => {
        return validateFileSize(file);
      })
      .test("fileFormat", "Format file hanya boleh JPG/JPEG/PNG/BMP", (file) => {
        return validateFileType(file);
      }),
    fotoKK: yup.mixed().test("required", "Silakan unggah foto KK", (file) => {
      if (file[0]) return true;
      return false;
    })
      .test("fileSize", "File terlalu besar (maks. 2MB)", (file) => {
        return validateFileSize(file);
      })
      .test("fileFormat", "Format file hanya boleh JPG/JPEG/PNG/BMP", (file) => {
        return validateFileType(file);
      }),
    umur: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value
    }).test("required", "Silakan masukan umur", (value) => {
      if (value && value > 0) return true;
      return false;
    }).test("required", "Minimal umur adalah 25 tahun", (value) => {
      if (value && value >= 25) return true;
      return false;
    }),
    jenisKelamin: yup.string().required("Silakan masukan jenis kelamin"),
    provinsi: yup.string().required("Silakan pilih provinsi"),
    kabupatenKota: yup.string().required("Silakan pilih kabupaten / kotamadya"),
    kecamatan: yup.string().required("Silakan pilih kecamatan"),
    kelurahanDesa: yup.string().required("Silakan pilih kelurahan / desa"),
    alamat: yup.string().required("Silakan masukan alamat").max(255, "Melebihi batas maksimal 255 karakter"),
    rt: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value;
    }).test("required", "Silakan masukan RT", (value) => {
      if (value && value > 0) return true;
      return false;
    }),
    rw: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value;
    }).test("required", "Silakan masukan RW", (value) => {
      if (value && value > 0) return true;
      return false;
    }),
    penghasilanSebelum: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value;
    }).positive("Penghasilan tidak boleh mengandung - atau berakhiran .").test("required", "Silakan masukan penghasilan sebelum pandemi", (value) => {
      if (value && value > 0) return true;
      return false;
    }),
    penghasilanSesudah: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value;
    }).positive("Penghasilan tidak boleh mengandung - atau berakhiran .").test("required", "Silakan masukan penghasilan sesudah pandemi", (value) => {
      if (value && value > 0) return true;
      return false;
    }),
    alasan: yup.string().test("required", "Silakan pilih alasan", (reason) => {
      if (reason) return true;
      return false;
    }),
    alasanLain: yup.string().test("required", "Silakan masukan alasan lainnya", (reason, ctx) => {
      if (ctx.parent.alasan === Reason.Lainnya && !reason) return false;
      return true;
    })
  })
  .required();

export { schema }
