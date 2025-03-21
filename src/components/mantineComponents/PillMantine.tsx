import { MantineSize, Pill } from "@mantine/core"

interface PillMantineProps {
    children?: React.ReactNode
    color?: string
    radius?: string
    size?: MantineSize
    removeButtonProps?: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'>
    withRemoveButton?: boolean
    disabled?: boolean
    onRemove?: () => void
    width?: number
}

const PillMantine: React.FC<PillMantineProps> = ({
    children,
    width,
    color,
    radius,
    size,
    removeButtonProps,
    withRemoveButton,
    disabled,
    onRemove,
    ...props

}) => {
    return (
        <div className="flex flex-row w-full ">
            <Pill
                disabled={false}
                color={color}
                radius={radius}
                size={size}
                removeButtonProps={removeButtonProps}
                withRemoveButton={withRemoveButton}
                aria-disabled={disabled}
                onRemove={onRemove}
                {...props}
                style={{ width }}
            >
                {children}

            </Pill >
        </div>
    )
}

export default PillMantine