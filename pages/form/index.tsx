import { useFormPage } from 'hooks';
import { FormBansos, MainLayout, ModalAlert } from '~/components/.';

const Form = () => {
  const {
    show,
    message,
    handleOpenModal,
    handleCloseModal,
    handleMessage
  } = useFormPage();

  return (
    <MainLayout page="Form">
      <FormBansos openModal={handleOpenModal} setMessage={handleMessage} />
      <ModalAlert showModal={show} closeModal={handleCloseModal} message={message} />
    </MainLayout>
  )
}

export default Form;
