import { type FC } from 'react'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
            </div>
        </div>
    )
}
