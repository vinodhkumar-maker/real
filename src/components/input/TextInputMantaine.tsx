import React from 'react';
import { Input } from '@mantine/core';
import { clsx } from 'clsx';

interface InputTextProps {
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  type?: string;
  disabled?: boolean;
  value?: string;
  error?: string;
  mt?: string | number;
  withAsterisk?: boolean;
  className?: string;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder = 'Enter text',
  onChange,
  type = 'text',
  disabled = false,
  value,
  error,
  mt = '1rem',
  withAsterisk = false,
  className,
}) => {
  const defaultStyles = clsx(
    ' rounded-md w-full',
    disabled
      ? 'bg-gray-100 cursor-not-allowed text-gray-400'
      : 'focus:border-blue-500 focus:ring-2 focus:ring-blue-500',
  );

  return (
    <>
      {label && (
        <label
          className={clsx(
            'text-gray-700 font-medium mb-1',
            withAsterisk && 'flex items-center',
            mt && ` mt-4`,
          )}
        >
          {label}
          {withAsterisk && <span className="text-red-500 text-sm ml-1">*</span>}
        </label>
      )}
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        disabled={disabled}
        className={clsx(defaultStyles, className)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </>
  );
};

export default InputText;
