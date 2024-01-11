import { type FC, type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'

type StoreProviderProps = PropsWithChildren & Readonly<{
    initialState?: Partial<StateSchema>
}>

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    initialState
}) => {
    return (
        <Provider store={createReduxStore(initialState as StateSchema)}>
            {children}
        </Provider>
    )
}
