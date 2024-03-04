import { useState } from "react";

import { Button } from "./components/Button";
import { DeleteSubprocessModal } from "./components/modals/DeleteSubprocessModal";


export function App() {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const deleteSubprocess = () => {
    // Delete logic
    console.log('Subprocess was deleted');
    closeModal();
  }

  return (
    <>
      <h1>Frontend task</h1>
      <Button
        onClick={openModal}
        dataTestId="open-modal-button"
        ariaLabel="Open modal button"
      >
        Open modal
      </Button>
      <DeleteSubprocessModal
        open={open}
        closeModal={closeModal}
        deleteSubprocess={deleteSubprocess}
        processTitle="03A456 Picking smtg_long name"
      />
    </>
  )
}