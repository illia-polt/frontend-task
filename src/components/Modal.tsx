import { createPortal } from 'react-dom';

enum ButtonSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  size?: "sm" | "md" | "lg";
  role?: string;
}

const backdropClassName = "flex justify-center items-center fixed inset-0 transition duration-300 ease-in-out";
const containerClassName = "max-h-screen bg-white rounded-xl shadow-md p-6 transition-all duration-300 ease-in-out";
const sizeClasses = {
  [ButtonSize.Small]: 'max-w-[400px]',
  [ButtonSize.Medium]: 'max-w-[800px]',
  [ButtonSize.Large]: 'max-w-[1200px]',
};

export const Modal = ({
  open,
  onClose,
  children,
  size = "md",
  role = "dialog",
}: ModalProps) => (
  createPortal(
    <div onClick={onClose} className={`${backdropClassName} ${ open ? "bg-gray-400/50 backdrop-blur-sm visible" : "invisible"}`} aria-hidden={!open} role={role}>
      <div onClick={(e: React.MouseEvent) => e.stopPropagation()} className={`${containerClassName} ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} ${sizeClasses[size]}`}>
        {children}
      </div>
    </div>,
    document.body
  )
);
