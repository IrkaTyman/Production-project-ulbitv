import { type FC } from 'react'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink
                    theme={AppLinkTheme.Secondary}
                    to="/"
                    className={styles.mainLink}
                >
                    Main
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.Secondary}
                    to="/about">
                    About
                </AppLink>
            </div>
        </div>
    )
}
