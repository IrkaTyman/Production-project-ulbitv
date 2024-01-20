import { type ReactRenderer } from '@storybook/react'
import 'app/styles/index.scss'
import { type DecoratorFunction } from '@storybook/csf'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/auth-by-username/model/slice/loginSlice'

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}

export const StoreDecorator = (
    initialState?: Partial<StateSchema>,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
): DecoratorFunction<ReactRenderer> =>
    (Story) => (
        <StoreProvider
            initialState={initialState}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <Story/>
        </StoreProvider>
    )
