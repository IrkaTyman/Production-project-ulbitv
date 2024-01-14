import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Text.module.scss'

export enum TextTheme {
    Primary = 'primary',
    Error = 'error'
}

export type Props = Readonly<{
    className?: string
    'data-testid'?: string
    title?: string
    text?: string
    theme?: TextTheme
}>

export const Text: FC<Props> = memo(({
    title,
    text,
    theme = TextTheme.Primary,
    className,
    'data-testid': dataTestId = 'Text'
}: Props) => {
    return (
        <div
            data-testid={dataTestId}
            className={classNames(
                styles.Text,
                { [styles[theme]]: true },
                [className]
            )}
        >
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
})
