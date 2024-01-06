import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageError } from './PageError'

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'centered'
    },
    argTypes: {}
} satisfies Meta<typeof PageError>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: ThemeDecorator(Theme.Dark)
}
