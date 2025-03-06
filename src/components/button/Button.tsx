import { clsx } from "clsx";

type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "primary" | "secondary" | "danger" | "warning" | "success";

interface ButtonProps {
    label?: string;
    type?: ButtonType;
    size?: "sm" | "md" | "lg" | "xl";
    pill?: boolean;
    onClick?: () => void;
    variant?: ButtonVariant;
    className?: string;
    disabled?: boolean;
    isSubmitting?: boolean;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type = "button",
    size = "md",
    label,
    pill = false,
    onClick,
    variant = "primary",
    className,
    disabled = false,
    isSubmitting = false,
    fullWidth = false,
}) => {
    const buttonClassnameMap: Record<ButtonVariant, string> = {
        primary: "text-white bg-blue-500 hover:bg-blue-600",
        secondary: "text-gray-700 bg-gray-200 hover:bg-gray-300",
        danger: "text-white bg-red-500 hover:bg-red-600",
        warning: "text-white bg-yellow-500 hover:bg-yellow-600",
        success: "text-white bg-green-500 hover:bg-green-600",
    };

    const sizeClassNameMap: Record<NonNullable<ButtonProps["size"]>, string> = {
        sm: " text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
    };

    const pillClass = pill ? "rounded-full" : "rounded-lg";
    const buttonClass = buttonClassnameMap[variant];

    return (
        <button
            className={clsx(
                "flex items-center space-x-1 py-2 px-3 justify-center",
                buttonClass,
                sizeClassNameMap[size],
                pillClass,
                fullWidth && "w-full",
                className,
                disabled || isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            )}
            type={type}
            onClick={onClick}
            disabled={disabled || isSubmitting}
        >
            {isSubmitting ? <span>Loading...</span> : label && <span>{label}</span>}
        </button>
    );
};

export default Button;
