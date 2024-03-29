import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/auth-by-username'
import {
    type Dispatch,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
    type UnknownAction
} from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type To, type NavigateOptions } from 'react-router-dom'

export type StateSchema = {
    counter: CounterSchema
    user: UserSchema

    // Async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export type ReduxStoreWithManager = EnhancedStore & {
    reducerManager: ReducerManager
}

export type ReducerManager = {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    dispatch: Dispatch
    state: StateSchema
}
