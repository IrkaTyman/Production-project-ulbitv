import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { type TestProps } from 'shared/types/TestProps'

import styles from './ProfileCard.module.scss'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader'
import { Avatar } from 'shared/ui/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country, CountrySelect } from 'entities/Country'

export type Props = TestProps & Readonly<{
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    onChangeLastName?: (value?: string) => void
    onChangeFirstName?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency?: Currency) => void
    onChangeCountry?: (currency?: Country) => void
    readonly?: boolean
}>

export const ProfileCard: FC<Props> = memo(({
    className,
    data,
    isLoading,
    error,
    onChangeLastName,
    onChangeFirstName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
    readonly,
    'data-testid': dataTestId = 'ProfileCard'
}: Props) => {
    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div
                data-testid={dataTestId}
                className={classNames(
                    styles.ProfileCard,
                    { [styles.loading]: true },
                    [className]
                )}
            >
                <Loader/>
            </div>
        )
    }
    if (error) {
        return <div
            data-testid={dataTestId}
            className={classNames(styles.ProfileCard, {}, [className, styles.error])}
        >
            <Text
                theme={TextTheme.Error}
                title={t('Произошла ошибка')}
                text={t('Перезагрузите')}
                align={TextAlign.Center}
            />
        </div>
    }
    const mods: Mods = {
        [styles.editing]: !readonly
    }

    return (
        <div
            data-testid={dataTestId}
            className={classNames(styles.ProfileCard, mods, [className])}
        >
            <div className={styles.data}>
                {data?.avatar && <div className={styles.avatarWrapper}>
                    <Avatar src={data?.avatar}/>
                </div>}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={styles.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={styles.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возвраст')}
                    className={styles.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    type="number"
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={styles.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Ваш никнейм')}
                    className={styles.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Ваш аватар')}
                    className={styles.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={styles.input}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                    value={data?.currency}
                />
                <CountrySelect
                    className={styles.input}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    value={data?.country}
                />
            </div>
        </div>
    )
})
