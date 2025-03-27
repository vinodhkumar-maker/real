import { PasswordInput } from '@mantine/core';
import React from 'react';

interface PasswordInputMantineProps {
  id?: string;
  label?: string;
  description?: string;
  placeholder: string;
  required?: boolean;
  error?: string;
  variant: string;
  size?: string;
  radius?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: string;
  withAsterisk?: boolean;
  wrapperProps?: React.HTMLProps<HTMLDivElement>;
  pointer?: boolean;
}

const PasswordInputMantine: React.FC<PasswordInputMantineProps> = ({
  placeholder,
  label,
  id,
  error,
  variant,
  size,
  radius,
  onChange,
  value,
  leftSection,
  rightSection,
  ...props
}) => {
  return (
    <>
      <PasswordInput
        label={label}
        id={id}
        placeholder={placeholder}
        error={error}
        variant={variant}
        size={size}
        radius={radius}
        onChange={onChange}
        value={value}
        leftSection={leftSection}
        rightSection={rightSection}
        iconPosition="right"
        withAsterisk={false}
        pointer={true}
        {...props}
      />
    </>
  );
};

export default PasswordInputMantine;
