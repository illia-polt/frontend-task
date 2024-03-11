
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  dataTestId?: string;
  variant?: 'primary' | 'delete';
  disabled?: boolean;
  ariaLabel?: string;
}

const baseClasses = 'flex justify-center items-center px-4 py-2 rounded-md text-base font-medium';
const variantClasses = {
  primary: 'bg-white border border-neutral25 text-neutral100 hover:bg-neutral6 focus:outline-none focus:ring focus:ring-gray100 active:bg-neutral12',
  delete: 'bg-red110 border border-red110 text-white hover:bg-red120 border-red120 focus:border-red110 outline-none focus:ring focus:ring-error100 active:bg-red130 border-red130',
};

export const Button = ({
  onClick,
  variant = 'primary',
  children,
  disabled = false,
  dataTestId,
  ariaLabel = 'Button',
}: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      ${baseClasses}
      ${variantClasses[variant]}
      ${disabled ? 'disabled:opacity-50 cursor-not-allowed' : ''}
    `}
    data-testid={dataTestId}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);
