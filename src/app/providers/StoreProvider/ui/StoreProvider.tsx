import { type FC, memo, type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { type DeepPartial } from 'shared/types/DeepPartial'

type StoreProviderProps = PropsWithChildren & Readonly<{
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
}>

export const StoreProvider: FC<StoreProviderProps> = memo(({
    children,
    initialState,
    asyncReducers
}: StoreProviderProps) => {
    const navigate = useNavigate()

    return (
        <Provider
            store={createReduxStore(
                initialState as StateSchema,
                asyncReducers as ReducersMapObject<StateSchema>,
                navigate
            )}
        >
            {children}
        </Provider>
    )
})
