import { Button, MantineSize } from "@mantine/core"

interface ButtonMaintineProps {
    children: React.ReactNode;
    color?: string;
    variant: "filled" | "outline" | "light" | "subtle" | "white" | "default" | "gradient";
    disabled?: boolean;
    fullWidth?: boolean;
    gradient?: { from: string; to: string; deg?: number };
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    loading?: boolean;
    radius?: MantineSize;
    size?: MantineSize;
}

const ButtonMantine: React.FC<ButtonMaintineProps> = ({
    children,
    variant,
    color,
    disabled,
    fullWidth,
    gradient,
    leftSection,
    rightSection,
    loading,
    radius,
    size,
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            disabled={disabled}
            fullWidth={fullWidth}
            gradient={variant === "gradient" ? gradient : undefined}
            leftSection={leftSection}
            loading={loading}
            radius={radius}
            rightSection={rightSection}
            size={size}
        >
            {children}
        </Button>
    )
}

export default ButtonMantine