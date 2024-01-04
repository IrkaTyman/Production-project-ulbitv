import { classNames } from "shared/lib/classNames";
import styles from './AppLink.module.scss';
import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    Primary = 'primary',
    Secondary = 'secondary',
}

type AppLinkProps = PropsWithChildren & LinkProps & {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = ({
    className, 
    children, 
    theme = AppLinkTheme.Primary,
    ...props
}: AppLinkProps) => {
    return (
        <Link 
            {...props}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
        >
            {children}
        </Link>
    );
};