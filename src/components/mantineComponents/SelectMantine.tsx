import { MantineSize, Select } from '@mantine/core';

interface SelectMantineProps {
  label?: string;
  id?: string;
  placeholder: string;
  error?: string;
  data: string[];
  radius?: string;
  onSlect: (value: string | null) => void;
  value?: string;
  wrapperProps?: React.HTMLProps<HTMLDivElement>;
  required?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  size?: MantineSize;
}

const SelectMantine: React.FC<SelectMantineProps> = ({
  label,
  id,
  placeholder,
  error,
  data,
  radius,
  ...props
}) => {
  return (
    <Select
      label={label}
      id={id}
      placeholder={placeholder}
      error={error}
      data={data}
      searchable={true}
      clearable={true}
      radius={radius}
      {...props}
    />
  );
};

export default SelectMantine;
