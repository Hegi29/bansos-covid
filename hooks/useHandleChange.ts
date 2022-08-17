import { Reason } from 'enum/reason';

const useHandleChange = (
  setCities: any,
  setSelectedKabKota: any,
  setDistrict: any,
  setVillages: any,
  setSelectedProvince: any,
  setSelectedProvinceName: any,
  setSelectedKabKotaName: any,
  setSelectedDistrict: any,
  setSelectedDistrictName: any,
  setSelectedVillageName: any,
  setShowOtherReason: any,
  setDisabled: any
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
