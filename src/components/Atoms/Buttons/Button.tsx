import React from 'react';

interface ButtonProps {
  children?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onlyIcon?: React.ReactNode;
  onClick?: () => void;
  appearanceInverted?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps & { appearance?: 'primary' | 'secondary' }> = ({
  children,
  leadingIcon,
  trailingIcon,
  onlyIcon,
  onClick,
  appearance = 'primary',
  appearanceInverted = false,
  size = 'md',
}) => {
  const baseStyles =
    'flex items-center justify-center gap-2 rounded focus:outline-none focus:ring-2';

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const primaryStyles = appearanceInverted
    ? 'bg-white text-blue-700 hover:bg-gray-100 focus:ring-blue-400'
    : 'bg-blue-700 text-white hover:bg-sky-800 focus:ring-blue-400';

  const secondaryStyles = appearanceInverted
    ? 'text-blue-700 underline hover:text-blue-800 focus:ring-blue-400 underline underline-offset-8'
    : 'bg-transparent text-white hover:bg-blue-800 focus:ring-blue-400 underline underline-offset-8 inline-block';

  const buttonStyles = `${
    appearance === 'primary' ? primaryStyles : secondaryStyles
  } ${baseStyles} ${sizeStyles[size]}`;

  return (
    <button onClick={onClick} className={buttonStyles}>
      {onlyIcon ? (
        <span className="flex items-center justify-center">{onlyIcon}</span>
      ) : (
        <>
          {leadingIcon && <span className="flex items-center">{leadingIcon}</span>}
          {children && <span>{children}</span>}
          {trailingIcon && <span className="flex items-center">{trailingIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;