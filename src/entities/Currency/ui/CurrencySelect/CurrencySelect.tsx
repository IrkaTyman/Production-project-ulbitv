import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { type TestProps } from 'shared/types/TestProps'

import styles from './CurrencySelect.module.scss'
import { Currency } from '../../model/types/currency'
import { Select } from 'shared/ui/Select'

export type Props = TestProps & Readonly<{
    className?: string
    value?: Currency
    onChange?: (currency: Currency) => void
    readonly?: boolean
}>

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect: FC<Props> = memo(({
    className,
    onChange,
    readonly,
    value,
    'data-testid': dataTestId = 'CurrencySelect'
}: Props) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select
            data-testid={dataTestId}
            className={classNames(styles.CurrencySelect, {}, [className])}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            options={options}
            label={t('Укажите валюту')}
        />
    )
})
