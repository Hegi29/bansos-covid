import * as yup from 'yup';

import { Reason } from '../enum/reason';
import { bytesToMegaBytes } from '../utils/.';

const MAX_SIZE_FILE = 2; // MB
const LENGTH_NO_ID = 16;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/bmp", "image/png"];

const validateIDNumber = (value: number | undefined) => {
  const length = value?.toString().length;
  if (length === LENGTH_NO_ID) {
    return true;
  }

  return false;
}

const validateFileSize = (file: FileList) => {
  if (file.length > 0) {
    const size = bytesToMegaBytes(file[0].size);
    return size < MAX_SIZE_FILE;
  }

  return false;
}

const validateFileType = (file: FileList) => {
  if (file.length > 0) {
    const type = file[0].type;
    return SUPPORTED_FORMATS.includes(type);
  }

  return false;
}

const schema = yup
  .object({
    nama: yup.string().required("Silakan masukan nama"),
    nik: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value
    }).test("required", "Silakan masukan NIK", (value) => {
      if (value && value > 0) return true;
      return false;
    }).test("length", "NIK harus terdiri dari 16 angka", (value) => {
      return validateIDNumber(value);
    }),
    noKK: yup.number().transform((value) => {
      return isNaN(value) ? 0 : value
    }).required("Silakan masukan No. KK").test("length", "No KK harus terdiri dari 16 angka", (value) => {
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
      if (ctx.parent.alasan === Reason.Lainnya && !reason) return false;
      return true;
    })
  })
  .required();

export { schema }
