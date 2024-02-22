import { type CSSProperties, type FC, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type TestProps } from 'shared/types/TestProps'

import styles from './Avatar.module.scss'

export type Props = TestProps & Readonly<{
    className?: string
    src?: string
    size?: number
    alt?: string
}>

export const Avatar: FC<Props> = memo(({
    size = 100,
    alt,
    src,
    className,
    'data-testid': dataTestId = 'Avatar'
}: Props) => {
    const inlineStyles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size])

    return (
        <img
            src={src}
            style={inlineStyles}
            alt={alt}
            data-testid={dataTestId}
            className={classNames(styles.Avatar, {}, [className])}
        />
    )
})
