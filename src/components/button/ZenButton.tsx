import { clsx } from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
export type ZenButtonType = 'button' | 'submit' | 'reset';
export type ZenButtonVariant =
  | 'primary'
  | 'primary-outline'
  | 'primary-outline-selected'
  | 'primary-boarderless'
  | 'secondary'
  | 'secondary-outline-selected'
  | 'secondary-light-outline'
  | 'secondary-light-outline-thin'
  | 'success'
  | 'warning'
  | 'warning-outline'
  | 'danger'
  | 'danger-outline'
  | 'primary-link'
  | 'secondary-gray-outline'
  | 'secondary-gray-text-outline'
  | 'danger-link'
  | 'dark'
  | 'dark-outline'
  | 'rounded-white'
  | 'yellow'
  | 'yellow-outline';

export type ZenTextSize = 'sm' | 'md' | 'lg' | 'xl';

interface ZenButtonProps {
  label?: string;
  value?: string;
  variant?: ZenButtonVariant;
  isDisabled?: boolean;
  leftIconComponent?: React.ReactNode;
  rightIconComponent?: React.ReactNode;
  type?: ZenButtonType;
  isFullWidth?: boolean;
  onClick?:
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | ((event: React.MouseEvent<HTMLElement>) => void)
  | (() => void);
  isSubmitting?: boolean;
  textSize?: ZenTextSize;
  className?: string;
  disabled?: boolean;
  noWrop?: boolean;
  zeroPadding?: boolean;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  fontstyles?: string;
}

const ZenButton: React.FC<ZenButtonProps> = ({
  label,
  value,
  variant = 'primary',
  isDisabled = false,
  leftIconComponent,
  rightIconComponent,
  type = 'button',
  isFullWidth = false,
  onClick,
  isSubmitting = false,
  textSize = 'md',
  className = '',
  disabled = false,
  noWrop = false,
  zeroPadding = false,
  buttonProps,
  fontstyles = 'font-bold',
}) => {
  const variantClassMap: Record<ZenButtonVariant, string> = {
    primary: 'bg-blue-500 text-white',
    'primary-outline': 'bg-white border-blue-500 text-blue-500',
    'primary-outline-selected': 'bg-blue-500 text-white',
    'primary-boarderless': 'border-blue-500 text-blue-500',
    secondary: ' bg-slate-500 text-white',
    'secondary-outline-selected': 'bg-slate-500 text-white',
    'secondary-light-outline': 'border-slate-500 text-slate-500',
    'secondary-light-outline-thin': 'border-secondary text-secondary',
    success: 'bg-green-500 text-white',
    warning: 'bg-orange-400 text-white hover:bg-orange-500',
    'warning-outline': ' border border-orange-500 text-orange-500',
    danger: 'bg-red-500 text-white',
    'danger-outline': 'border-red-500 text-red-500',
    'primary-link': 'text-blue-500 underline',
    'secondary-gray-outline': 'border-slate-500 text-slate-500',
    'secondary-gray-text-outline': 'border-slate-500 text-slate-500',
    'danger-link': 'text-red-500 underline',
    dark: 'bg-black text-white',
    'dark-outline': 'border-black text-black',
    'rounded-white': 'bg-white text-black',
    yellow: 'bg-yellow-400 text-white hover:bg-yellow-500',
    'yellow-outline': ' border border-yellow-500 text-yellow-500',
  };
  const textSizeClassMap: Record<ZenTextSize, string> = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <button
      className={clsx(
        'flex items-center space-x-1 rounded-lg py-2 disabled:bg-zen-dark-4 justify-center',
        textSizeClassMap[textSize],
        variantClassMap[variant],
        className,
        zeroPadding ? 'px-0' : 'px-4.5',
        { 'w-full justify-center': isFullWidth },
        { 'w-max': noWrop },
        fontstyles ? '  font-bold' : 'font-light ',
        className,
        disabled,
      )}
      type={type}
      value={value}
      onClick={onClick}
      disabled={isDisabled}
      {...buttonProps}
    >
      {isSubmitting && <FontAwesomeIcon icon={faRotate} className="animate-spin mr-1" />}
      {leftIconComponent && <span className="flex items-center">{leftIconComponent}</span>}
      {label && <span>{label}</span>}
      {rightIconComponent && <span className="flex items-center ml-2">{rightIconComponent}</span>}
    </button>
  );
};

export default ZenButton;
