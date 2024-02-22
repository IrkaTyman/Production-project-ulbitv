import { type FC, memo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'

import styles from './Text.module.scss'

export enum TextTheme {
    Primary = 'primary',
    Error = 'error'
}

export enum TextAlign {
    Right = 'right',
    Left = 'left',
    Center = 'center'
}

export type Props = Readonly<{
    className?: string
    'data-testid'?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}>

export const Text: FC<Props> = memo(({
    title,
    text,
    theme = TextTheme.Primary,
    className,
    align = TextAlign.Left,
    'data-testid': dataTestId = 'Text'
}: Props) => {
    const mods: Mods = {
        [styles[align]]: true,
        [styles[theme]]: true
    }

    return (
        <div
            data-testid={dataTestId}
            className={classNames(
                styles.Text,
                mods,
                [className]
            )}
        >
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
})
