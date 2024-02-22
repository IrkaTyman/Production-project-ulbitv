import type { Meta, StoryObj } from '@storybook/react'

import { CurrencySelect } from './CurrencySelect'

const meta = {
    title: 'entities/Currency/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {}
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
