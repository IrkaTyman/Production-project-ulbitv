import {
    combineReducers,
    type Reducer,
    type ReducersMapObject,
    type UnknownAction
} from '@reduxjs/toolkit'
import { type ReducerManager, type StateSchema, type StateSchemaKey } from './StateSchema'

export function createReducerManager (
    initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
    const reducers = { ...initialReducers }
    let combinedReducer = combineReducers(reducers)
    let keysToRemove: StateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: UnknownAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete state[key]
                }
                keysToRemove = []
            }

            // @ts-expect-error Ошибка типизации
            return combinedReducer(state, action)
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }

            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        }
    }
}
