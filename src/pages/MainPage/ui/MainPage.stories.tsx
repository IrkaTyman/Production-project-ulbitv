import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import MainPage from './MainPage'

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'MainPage'
    },
    argTypes: {}
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

export const DefaultDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)]
}
