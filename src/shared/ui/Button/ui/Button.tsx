import {
    type ButtonHTMLAttributes,
    type FC,
    type PropsWithChildren
} from 'react'
import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
    Clear = 'clear',
    Outline = 'outline',
    Background = 'background',
    BackgroundInverted = 'backgroundInverted',
}

export enum ButtonSize {
    L = 'size__l',
    M = 'size__m',
    XL = 'size__xl'
}

type ButtonProps = PropsWithChildren &
ButtonHTMLAttributes<HTMLButtonElement> &
{
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    square,
    size,
    ...props
}) => {
    const mods: Record<string, boolean | undefined> = {
        [styles.square]: square
    }

    const additionalClasses = [
        className,
        (theme != null) ? styles[theme] : undefined,
        (size != null) ? styles[size] : undefined
    ]

    return (
        <button
            type='button'
            {...props}
            className={classNames(
                styles.Button,
                mods,
                additionalClasses
            )}
        >
            {children}
        </button>
    )
}
