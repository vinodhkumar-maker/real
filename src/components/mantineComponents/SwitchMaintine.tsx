import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Switch } from "@mantine/core"

interface SwitchMaintineProps {
    id?: string
    size?: string
    label?: string
    color?: string
    radius?: string
    value?: string
    onChange?: () => void
    onLabel?: React.ReactNode
    offLabel?: React.ReactNode
    disabled?: boolean
    defaultChecked?: boolean
}

const SwitchMaintine: React.FC<SwitchMaintineProps> = ({
    id,
    size,
    label,
    color,
    radius,
    value,
    ...props


}) => {
    return (
        <Switch
            id={id}
            value={value}
            size={size}
            label={label}
            color={color}
            disabled={false}
            onLabel={<FontAwesomeIcon icon={faSun} className=" text-xs" />}
            offLabel={<FontAwesomeIcon icon={faMoon} className=" text-xs" />}
            onChange={() => console.log('changed')}
            {...props}
            radius={radius}

        />
    )
}

export default SwitchMaintine