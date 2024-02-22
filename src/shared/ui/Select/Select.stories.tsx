import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {}
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '1', content: '1' },
            { value: '12', content: '12' },
            { value: '123', content: '123' }
        ]
    }
}
