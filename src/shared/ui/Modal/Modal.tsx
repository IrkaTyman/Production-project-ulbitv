import {
    type FC,
    type PropsWithChildren,
    type MouseEvent,
    useState,
    useRef,
    useEffect,
    useCallback
} from 'react'
import styles from './Modal.module.scss'
import { classNames } from 'shared/lib'
import { Portal } from '../Portal'

type ModalProps = PropsWithChildren & {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 200

export const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpen,
    onClose
}) => {
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation()
    }

    const mods: Record<string, boolean | undefined> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
