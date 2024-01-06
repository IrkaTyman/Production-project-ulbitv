import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    argTypes: {}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Button'
    }
}

export const Clear: Story = {
    args: {
        theme: ThemeButton.Clear,
        children: 'Button'
    }
}

export const Outline: Story = {
    args: {
        theme: ThemeButton.Outline,
        children: 'Button'
    }
}

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.Outline,
        children: 'Button'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}
