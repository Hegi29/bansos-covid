import { Reason } from '~/enum/.';

const useHandleChange = (
  setCities: (_args: []) => void,
  setSelectedKabKota: (_args: string) => void,
  setDistrict: (_args: []) => void,
  setVillages: (_args: []) => void,
  setSelectedProvince: (_args: string) => void,
  setSelectedProvinceName: (_args: string) => void,
  setSelectedKabKotaName: (_args: string) => void,
  setSelectedDistrict: (_args: string) => void,
  setSelectedDistrictName: (_args: string) => void,
  setSelectedVillageName: (_args: string) => void,
  setShowOtherReason: (_args: boolean) => void,
  setDisabled: (_args: boolean) => void
) => {
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

  return {
    handleChangeProvince,
    handleChangeKabKota,
    handleChangeDistrict,
    handleChangeVillage,
    handleChangeReason,
    handleUnderstand
  }
}

export { useHandleChange }
