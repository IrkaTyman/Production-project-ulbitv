import type { Meta, StoryObj } from '@storybook/react'

import LoginForm from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
    title: 'features/auth-by-username/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '', password: '', error: '', isLoading: false }
        })
    ]
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '', password: '', error: 'Error', isLoading: false }
        })
    ]
}

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '', password: '', error: '', isLoading: true }
        })
    ]
}
