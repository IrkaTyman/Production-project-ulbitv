import { type FC, memo, useEffect } from 'react'

import {
    DynamicModuleLoader,
    type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard'

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
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                data-testid={dataTestId}
                className={className}
            >
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
