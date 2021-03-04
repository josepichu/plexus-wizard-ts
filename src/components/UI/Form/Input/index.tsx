import React, { FC } from 'react';

// assets
import './index.scss';

interface InputProps {
  label?: string;
  name: string;
  type: 'text' | 'number' | 'password' | 'email';
  onChange(e): void;
  icon?: JSX.Element;
  placeholder?: string;
  error?: string;
  value: string | number;
  className?: string;
}

const Input: FC<InputProps> = ({ label, type, name, placeholder, icon, error, value, onChange, className }) => {
  return (
    <div className={`input-container ${className || ''}`}>
      {label && <label>{label}</label>}
      <div>
        {icon}
        <input
          className={'input-field ' + (error ? 'error' : '')}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <span className='error'>{error}</span>}
    </div>
  );
};

export default Input;
