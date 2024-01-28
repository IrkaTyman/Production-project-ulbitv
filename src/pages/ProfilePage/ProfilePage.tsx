import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import {
    DynamicModuleLoader,
    type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

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
    const { t } = useTranslation()

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                data-testid={dataTestId}
                className={className}
            >
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
