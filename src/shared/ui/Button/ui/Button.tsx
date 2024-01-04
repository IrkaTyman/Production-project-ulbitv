import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames';

export enum ThemeButton {
    Clear = 'clear',

}

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    theme: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className, 
    children, 
    theme,
    ...props
}) => {
    return (
        <button 
            {...props}
            className={classNames(styles.Button, {}, [className, styles[theme]])}
        >
            {children}
        </button>
    );
};