import { useState } from 'react';

import { FormBansos, MainLayout } from '~/components/.';
import { ModalPreview } from '~/components/ModalPreview';

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const [previewData, setPreviewData] = useState({});

  const handleModal = () => {
    setShowModal(true);
  }

  const handlePreviewData = (data: any) => {
    setPreviewData(data);
  }

  return (
    <MainLayout page="Form">
      <FormBansos setShowModal={handleModal} handlePreviewData={handlePreviewData} />
      <ModalPreview showModal={showModal} setShowModal={handleModal} closeModal={() => setShowModal(false)} props={previewData} />
    </MainLayout>
  )
}

export default Form;
