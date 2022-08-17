import { useState } from 'react';
import { FormBansos, MainLayout, ModalAlert } from '~/components/.';

const Form = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpenModal = () => {
    setShow(true);
  }

  const handleCloseModal = () => {
    setShow(false);
  }

  const handleMessage = (value: string) => {
    setMessage(value);
  }

  return (
    <MainLayout page="Form">
      <FormBansos openModal={handleOpenModal} setMessage={handleMessage} />
      <ModalAlert showModal={show} closeModal={handleCloseModal} message={message} />
    </MainLayout>
  )
}

export default Form;
