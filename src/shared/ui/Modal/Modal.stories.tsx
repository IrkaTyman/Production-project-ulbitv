import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {
        isOpen: true,
        children: 'lorem'
    }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)]
}
