import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import AboutPage from './AboutPage'

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered'
    },
    argTypes: {}
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

export const DefaultDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)]
}
