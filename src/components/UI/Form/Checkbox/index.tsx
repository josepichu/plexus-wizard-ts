import React, { FC } from 'react';

// assets
import './index.scss';

interface CheckboxProps {
  label?: string;
  name: string;
  type: 'checkbox';
  onChange(e): void;
  error?: string;
  checked?: boolean;
  className?: string;
}

const Checkbox: FC<CheckboxProps> = ({ label, type, name, error, checked, onChange }) => {
  return (
    <div className='checkbox_container'>
      {error && <div className='error'>{error}</div>}
      <input
        className={'input-field ' + (error ? 'error' : '')}
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Checkbox;
