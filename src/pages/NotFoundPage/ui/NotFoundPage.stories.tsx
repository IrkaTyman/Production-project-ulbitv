import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { NotFoundPage } from './NotFoundPage'

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'NotFoundPage'
    },
    argTypes: {}
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

export const DefaultDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)]
}
