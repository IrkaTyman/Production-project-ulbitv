import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { type TestProps } from 'shared/types/TestProps'

import styles from './CountrySelect.module.scss'
import { Country } from '../../model/types/country'
import { Select } from 'shared/ui/Select'

export type Props = TestProps & Readonly<{
    className?: string
    value?: Country
    onChange?: (country: Country) => void
    readonly?: boolean
}>

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine }
]

export const CountrySelect: FC<Props> = memo(({
    className,
    onChange,
    readonly,
    value,
    'data-testid': dataTestId = 'CountrySelect'
}: Props) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            data-testid={dataTestId}
            className={classNames(styles.CountrySelect, {}, [className])}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            options={options}
            label={t('Укажите страну')}
        />
    )
})
