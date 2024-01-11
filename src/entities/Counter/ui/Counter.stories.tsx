import type { Meta, StoryObj } from '@storybook/react'

import { Counter } from './Counter'

const meta = {
    title: 'entities/Counter',
    component: Counter,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {}
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
