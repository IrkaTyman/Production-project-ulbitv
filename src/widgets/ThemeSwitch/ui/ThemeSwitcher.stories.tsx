import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitch } from './ThemeSwitch'

const meta = {
    title: 'widgets/ThemeSwitch',
    component: ThemeSwitch,
    parameters: {
        layout: 'centered'
    },
    argTypes: {}
} satisfies Meta<typeof ThemeSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

export const DefaultDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)]
}
