import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from '../config/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/auth-by-username'

export function createReduxStore (initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
