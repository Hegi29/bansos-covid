import { LENGTH_NO_ID, MAX_SIZE_FILE, SUPPORTED_FORMATS } from '~/constants/.';
import { bytesToMegaBytes } from './bytesToMegaBytes';

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

export {
  validateIDNumber,
  validateFileSize,
  validateFileType
}
