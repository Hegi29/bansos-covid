import { ModalProps } from '../interfaces';

const ModalAlert = ({ showModal, closeModal, message }: ModalProps) => {
  return (
    <>
      {showModal &&
        <div className="bg-black bg-opacity-50 w-y-auto fixed inset-0 z-50 flex justify-center items-center outline-none focus:outline-none">
          <div className="relative my-6 mx-auto">
            <div className="border-0 max-h-[400px] rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="modal-body relative p-6 ">
                {message}
              </div>
              <div className="flex justify-center pt-0 p-6 rounded-b">
                <button
                  className="text-white bg-blue-jds rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={closeModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export { ModalAlert }
