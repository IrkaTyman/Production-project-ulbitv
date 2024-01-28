import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'
import { type FC, memo, type PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { type TestProps } from 'shared/types/TestProps'

export enum AppLinkTheme {
    Primary = 'primary',
    Secondary = 'secondary',
}

type AppLinkProps = TestProps & PropsWithChildren & LinkProps & {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo(({
    className,
    children,
    theme = AppLinkTheme.Primary,
    'data-testid': dataTestId = 'AppLink',
    ...props
}: AppLinkProps) => {
    return (
        <Link
            data-testid={dataTestId}
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
})
