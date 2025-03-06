import React from "react";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger";
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    type = "button",
    variant = "primary",
    onClick,
    disabled = false,
    loading = false,
    children,
    className,
    icon,
}) => {
    // Define base styles
    const baseStyles: React.CSSProperties = {
        padding: "10px 20px",
        borderRadius: "8px",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled || loading ? 0.5 : 1,
        transition: "background-color 0.3s ease",
        border: "none",
    };

    // Define styles for each variant
    const variantStyles: Record<string, React.CSSProperties> = {
        primary: {
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            // hover: { backgroundColor: "#2563eb" },
        },
        secondary: {
            backgroundColor: "#6b7280",
            color: "#ffffff",
            // hover: { backgroundColor: "#4b5563" },
        },
        danger: {
            backgroundColor: "#ef4444",
            color: "#ffffff",
            // hover: { backgroundColor: "#dc2626" },
        },
    };

    // Merge base styles with the current variant
    const combinedStyles: React.CSSProperties = {
        ...baseStyles,
        ...variantStyles[variant],
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            style={combinedStyles}
            className={className}
        >
            {loading ? (
                <span
                    style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid white",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                    }}
                ></span>
            ) : (
                icon
            )}
            {children}
        </button>
    );
};

export default Button;
