import { type ReactRenderer } from '@storybook/react'
import 'app/styles/index.scss'
import { type DecoratorFunction } from '@storybook/csf'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/auth-by-username/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { type DeepPartial } from 'shared/types/DeepPartial'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
): DecoratorFunction<ReactRenderer> =>
    (Story) => (
        <StoreProvider
            initialState={initialState}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <Story/>
        </StoreProvider>
    )
