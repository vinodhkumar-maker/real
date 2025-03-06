import React, { ReactNode } from "react";
import { Modal, ModalProps } from "@mantine/core";

interface RegisterModalProps extends Partial<ModalProps> {
    title?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
    title = "Default Title",
    children,
    isOpen,
    onClose,
    ...modalProps
}) => {
    return (
        <Modal
            title={title}
            opened={isOpen}
            onClose={onClose}
            yOffset="1vh"
            xOffset={0}
            {...modalProps}
        >
            {children}
        </Modal>
    );
};

export default RegisterModal;
