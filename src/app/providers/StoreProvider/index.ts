/**
 app/StoreProvider
 **/
export { StoreProvider } from './ui/StoreProvider'

export { createReduxStore, type AppDispatch } from './config/store'

export type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    ThunkExtraArg
} from './config/StateSchema'
