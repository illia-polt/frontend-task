import { Modal } from "../Modal";
import { Button } from "../Button";
import AlertIcon from '../../assets/alert.svg';
import { useEffect, useState } from "react";

type ModalProps = {
  open: boolean
  closeModal: () => void
  deleteSubprocess: () => void
  processTitle: string
}

const confirmMessage = "Are you sure you want to delete this subprocess? This action cannot be undone.";

const modalContentClasses = "max-h-[500px] text-sans text-base text-neutral85 leading-5 whitespace-normal text-left w-full break-words overflow-y-auto";
const titleClasses = "font-medium text-lg leading-7 text-neutral100 text-left w-full break-words mb-2";

export const DeleteSubprocessModal = ({
  open,
  closeModal,
  deleteSubprocess,
  processTitle
}: ModalProps) => {
  const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState<boolean>(true);
  
  useEffect(() => {
    if (open) {
      setIsDeleteButtonDisabled(true);
      const timeoutId = setTimeout(() => setIsDeleteButtonDisabled(false), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [open]);
  
  return (
    <Modal
      open={open}
      onClose={closeModal}
      size="sm"
      role="alertdialog"
    >
      <div className="grid gap-5">
        <img src={AlertIcon} alt="Alert icon indicator"/>
        <section
          id="delete-subprocess-modal-content" 
          className={modalContentClasses}
        >
          <h3
            className={titleClasses}
            aria-labelledby="modal-title"
            aria-modal="true"
          >
            Delete subprocess {processTitle}
          </h3>
          <p>{confirmMessage}</p>
        </section>
        <div className="grid gap-3 grid-cols-2 mt-3">
          <Button
            onClick={closeModal}
            dataTestId="cancel-button"
            ariaLabel="Cancel deleting the subprocess"
          >
            Cancel
          </Button>
          <Button
            onClick={deleteSubprocess}
            dataTestId="delete-button"
            ariaLabel="Delete the subprocess"
            variant="delete"
            disabled={isDeleteButtonDisabled}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}