import { type ReactRenderer } from '@storybook/react'
import 'app/styles/index.scss'
import { type DecoratorFunction } from '@storybook/csf'
import { Provider } from 'react-redux'
import { createReduxStore, type StateSchema } from 'app/providers/StoreProvider'

export const StoreDecorator =
    (initialState?: Partial<StateSchema>): DecoratorFunction<ReactRenderer> =>
        (Story) => (
            <Provider store={createReduxStore(initialState as StateSchema)}>
                <Story/>
            </Provider>
        )
