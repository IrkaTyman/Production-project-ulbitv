import { classNames } from 'shared/lib/classNames'
import styles from './AppLink.module.scss'
import { type FC, type PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    Primary = 'primary',
    Secondary = 'secondary',
}

type AppLinkProps = PropsWithChildren & LinkProps & {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    theme = AppLinkTheme.Primary,
    ...props
}) => {
    return (
        <Link
            {...props}
            className={classNames(
                styles.AppLink,
                {},
                [className, styles[theme]]
            )}
        >
            {children}
        </Link>
    )
}
