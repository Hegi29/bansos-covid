import { useState } from 'react';

const useFormPage = () => {
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

  return {
    show,
    message,
    handleOpenModal,
    handleCloseModal,
    handleMessage
  }
}

export { useFormPage }
