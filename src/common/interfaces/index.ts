export interface ChildProps {
  children: React.ReactNode
}

export interface FormBansosProps {
  openModal: () => void,
  setMessage: (_arg: string) => void
}

export interface ConfirmationProps {
  handleUnderstand: (_args: any) => void;
}

export interface LayoutProps {
  page: string;
  children: React.ReactNode
}

export interface ModalProps {
  showModal: boolean, closeModal: () => void, message?: string, props?: any
}
