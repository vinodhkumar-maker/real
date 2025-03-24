import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsUpToLine,
  faCheck,
  faCircleExclamation,
  faTriangleExclamation,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

type VariantType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'upload'
  | 'danger'
  | 'cancel'
  | 'close';
type SizeVariantType = 'default' | 'small' | 'large';

interface ConfirmationModalProps {
  variant: VariantType;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  hideIcon?: boolean;
  customIcon?: React.ReactNode;
  size?: SizeVariantType;
  subtitle?: string;
  children?: React.ReactNode;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  variant,
  title,
  subtitle,
  isOpen,
  onClose,
  children,
  hideIcon = false,
  customIcon,
  size = 'default',
}) => {
  const variantClassMap: Record<VariantType, string> = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
    upload: 'bg-blue-500',
    danger: 'bg-red-500',
    cancel: 'bg-gray-500',
    close: 'bg-gray-500',
  };

  const variantIconMap: Record<VariantType, React.ReactNode> = {
    success: <FontAwesomeIcon icon={faCheck} />,
    error: <FontAwesomeIcon icon={faCircleExclamation} />,
    warning: <FontAwesomeIcon icon={faTriangleExclamation} />,
    info: <FontAwesomeIcon icon={faCircleExclamation} className="rotate-180" />,
    danger: <FontAwesomeIcon icon={faTrash} />,
    upload: <FontAwesomeIcon icon={faArrowsUpToLine} />,
    cancel: <FontAwesomeIcon icon={faTrash} />,
    close: <FontAwesomeIcon icon={faCircleExclamation} />,
  };

  const sizeClassMap: Record<SizeVariantType, string> = {
    default: 'md:w-1/2 lg:w-1/4',
    large: 'md:w-3/5 lg:w-2/5',
    small: 'md:w-1/3 lg:w-1/5',
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-40">
      <div className="absolute inset-0" role="button" aria-label="Close Modal" onClick={onClose} />
      <div
        className={clsx('relative w-full bg-white rounded-lg shadow-lg p-6', sizeClassMap[size])}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:bg-red-400 rounded-full px-1.5 py-0.5"
          onClick={onClose}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div className="flex items-start">
          {!hideIcon && (
            <div className="mr-4">
              <div
                className={clsx(
                  'flex items-center justify-center w-12 h-12 rounded-full bg-opacity-20',
                  variantClassMap[variant],
                )}
              >
                {customIcon || variantIconMap[variant]}
              </div>
            </div>
          )}

          <div className="flex-1">
            {title && <h2 className="text-lg font-bold text-gray-800 break-words">{title}</h2>}
            {subtitle && <p className="mt-1 text-sm text-gray-600 break-words">{subtitle}</p>}
            {children && <div className="mt-4">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
