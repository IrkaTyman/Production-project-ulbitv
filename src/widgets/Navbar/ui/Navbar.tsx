import { type FC } from 'react'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink
                    theme={AppLinkTheme.Secondary}
                    to="/"
                    className={styles.mainLink}
                >
                    {t('Главная')}
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.Secondary}
                    to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    )
}
