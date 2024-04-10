import { type FC, memo, useCallback, useEffect } from 'react'

import {
    DynamicModuleLoader,
    type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
    ProfileCard,
    ValidateProfileError
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { Text, TextTheme } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
    profile: profileReducer
}

export type Props = Readonly<{
    className?: string
    'data-testid'?: string
}>

const ProfilePage: FC<Props> = memo(({
    className,
    'data-testid': dataTestId = 'ProfilePage'
}: Props) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const form = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData())
        }
    }, [dispatch])

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value ?? '' }))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value ?? '') }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value ?? '' }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value ?? '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const validationErrorsTranslations = {
        [ValidateProfileError.ServerError]: t('Server Error'),
        [ValidateProfileError.NoData]: t('No Data'),
        [ValidateProfileError.IncorrectCountry]: t('Incorrect Country'),
        [ValidateProfileError.IncorrectAge]: t('Incorrect Age'),
        [ValidateProfileError.IncorrectUserData]: t('Incorrect User Data')
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                data-testid={dataTestId}
                className={className}
            >
                <ProfilePageHeader/>
                {validateErrors?.length &&
                    validateErrors.map(err => (
                        <Text
                            key={err}
                            theme={TextTheme.Error}
                            text={validationErrorsTranslations[err]}
                        />
                    ))}
                <ProfileCard
                    readonly={readonly}
                    data={form}
                    error={error}
                    isLoading={isLoading}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                />
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
