import { type ChangeEvent, type FC, memo, useCallback, useMemo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { type TestProps } from 'shared/types/TestProps'

import styles from './Select.module.scss'

export type SelectOption = {
    value: string
    content: string
}

export type Props = TestProps & Readonly<{
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}>

export const Select: FC<Props> = memo(({
    className,
    label,
    options,
    value,
    readonly,
    onChange,
    'data-testid': dataTestId = 'Select'
}: Props) => {
    const optionList = useMemo(() => {
        return options?.map(opt => (
            <option
                className={styles.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options])

    const mods: Mods = {

    }

    const onChangeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value)
    }, [onChange])

    return (
        <div
            data-testid={dataTestId}
            className={classNames(styles.Wrapper, mods, [className])}
        >
            {label && <span className={styles.label}>
                {`${label}>`}
            </span>}

            <select
                disabled={readonly}
                className={styles.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    )
})
