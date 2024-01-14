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

export type Props = PropsWithChildren & {
    'data-testid'?: string
    className?: string
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 200

export const Modal: FC<Props> = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
    'data-testid': dataTestId = 'Modal'
}) => {
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
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

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div
                data-testid={dataTestId}
                className={classNames(styles.Modal, mods, [className])}
            >
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
