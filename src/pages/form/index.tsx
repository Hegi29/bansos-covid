import { FormBansos, MainLayout, ModalAlert } from '~/components/.';
import { useFormPage } from '~/hooks/.';

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
