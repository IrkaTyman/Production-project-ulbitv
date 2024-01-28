import { type FC, memo, useCallback, useState } from 'react'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/auth-by-username'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

type NavbarProps = Readonly<{
    className?: string
}>

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.ClearInverted}
                    className={styles.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.ClearInverted}
                className={styles.links}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal &&
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />}
        </div>
    )
})
