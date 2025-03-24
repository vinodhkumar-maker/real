import React from 'react';
import clsx from 'clsx';

interface InputTextProps {
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  type?: string;
  value: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputTextProps> = ({
  label,
  placeholder = 'Enter text',
  onChange,
  type = 'text',
  value,
  error,
  disabled = false,
  className,
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={clsx(
          'w-full border rounded-md p-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75',
          error ? 'border-red-500' : 'border-gray-300',
          disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white',
          className,
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
