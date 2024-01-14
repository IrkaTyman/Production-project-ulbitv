import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal, type ModalProps } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

type LoginModalProps = ModalProps & Readonly<{
    className?: string
    'data-testid'?: string
}>

export const LoginModal: FC<LoginModalProps> = ({
    className,
    'data-testid': dataTestId = 'LoginModal',
    ...modalProps
}) => {
    return (
        <Modal
            {...modalProps}
            lazy
            data-testid={dataTestId}
            className={classNames('', {}, [className])}
        >
            <LoginForm/>
        </Modal>
    )
}
