import { AngleSlider, Group } from "@mantine/core"

interface AngleSliderMantineProps {
    value: number
    onChange: (value: number) => void
    onchangeEnd?: (value: number) => void
    formatLabel: (value: number) => string
    size?: number
    label?: string
    children?: React.ReactNode
    thumbSize?: number
}

const AngleSliderMantine: React.FC<AngleSliderMantineProps> = ({
    //props
    children,
    label,
    size,
    thumbSize
}) => {
    return (
        <>
            <Group p={100}>
                <AngleSlider
                    aria-label={label}
                    formatLabel={(value) => `${value}°`}
                    size={size}
                    thumbSize={thumbSize}
                    marks={[
                        { value: 0, label: '0°' },
                        { value: 45, label: '45°' },
                        { value: 90, label: '90°' },
                        { value: 135, label: '135°' },
                        { value: 180, label: '180°' },
                        { value: 225, label: '225°' },
                        { value: 270, label: '270°' },
                        { value: 315, label: '315°' },
                    ]}
                >
                    {children}
                </AngleSlider>
            </Group>
        </>
    )
}

export default AngleSliderMantine