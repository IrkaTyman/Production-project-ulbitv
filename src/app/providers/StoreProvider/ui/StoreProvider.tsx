import { type FC, memo, type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'

type StoreProviderProps = PropsWithChildren & Readonly<{
    initialState?: Partial<StateSchema>
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
}>

export const StoreProvider: FC<StoreProviderProps> = memo(({
    children,
    initialState,
    asyncReducers
}: StoreProviderProps) => {
    return (
        <Provider
            store={createReduxStore(
                initialState as StateSchema,
                asyncReducers as ReducersMapObject<StateSchema>
            )}
        >
            {children}
        </Provider>
    )
})
