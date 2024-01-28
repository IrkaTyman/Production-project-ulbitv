import { type FC, memo, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal, type ModalProps } from 'shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader'

type LoginModalProps = ModalProps & Readonly<{
    className?: string
    'data-testid'?: string
}>

export const LoginModal: FC<LoginModalProps> = memo(({
    className,
    'data-testid': dataTestId = 'LoginModal',
    ...modalProps
}: LoginModalProps) => {
    return (
        <Modal
            {...modalProps}
            lazy
            data-testid={dataTestId}
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync onSuccess={modalProps.onClose}/>
            </Suspense>
        </Modal>
    )
})
