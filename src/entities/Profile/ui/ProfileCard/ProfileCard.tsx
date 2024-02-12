import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { type TestProps } from 'shared/types/TestProps'

import styles from './ProfileCard.module.scss'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

export type Props = TestProps & Readonly<{
    className?: string
}>

export const ProfileCard: FC<Props> = memo(({
    className,
    'data-testid': dataTestId = 'ProfileCard'
}: Props) => {
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)

    return (
        <div
            data-testid={dataTestId}
            className={classNames(styles.ProfileCard, {}, [className])}
        >
            <div className={styles.header}>
                <Text title={t('Профиль')}/>
                <Button
                    theme={ButtonTheme.Outline}
                    className={styles.editButton}
                >
                    {t('Редактировать')}
                </Button>
            </div>

            <div className={styles.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={styles.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={styles.input}
                />
            </div>
        </div>
    )
})
