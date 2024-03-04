
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
  primary: 'bg-white border border-gray-300 text-gray-700 focus:border-gray-300 outline-none focus:ring focus:ring-gray-200 hover:bg-gray-200 active:bg-gray-400',
  delete: 'bg-red-600 border border-red-600 text-white hover:bg-red-900 border-red-900 focus:border-red-600 outline-none focus:ring focus:ring-pink-200 active:bg-red-900 border-red-900',
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
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
    data-testid={dataTestId}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);
