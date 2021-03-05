import React, { FC } from 'react';

// assets
import './index.scss';

interface ButtonProps {
  hidden?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick(e): void;
  className?: string;
  children: string;
}

const Button: FC<ButtonProps> = ({ hidden, disabled, onClick, className, children, loading }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} disabled={disabled || false} hidden={hidden || false}>
      {loading ? '...' : children}
    </button>
  );
};

export default Button;
