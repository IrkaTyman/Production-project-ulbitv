import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { type TestProps } from 'shared/types/TestProps'

import styles from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export type Props = TestProps & Readonly<{
    className?: string
}>

export const ProfilePageHeader: FC<Props> = memo(({
    className,
    'data-testid': dataTestId = 'ProfilePageHeader'
}: Props) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const readonly = useSelector(getProfileReadonly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div
            data-testid={dataTestId}
            className={classNames(styles.ProfilePageHeader, {}, [className])}
        >
            <Text
                title={t('Профиль')}
                className={styles.title}
            />
            {readonly
                ? <Button
                    onClick={onEdit}
                    theme={ButtonTheme.Outline}
                    className={styles.editButton}
                >
                    {t('Редактировать')}
                </Button>
                : <>
                    <Button
                        onClick={onCancel}
                        theme={ButtonTheme.OutlineRed}
                        className={styles.editButton}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        onClick={onSave}
                        theme={ButtonTheme.Outline}
                        className={styles.editButton}
                    >
                        {t('Сохранить')}
                    </Button>
                </>}
        </div>
    )
})
