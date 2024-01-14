import type { Meta, StoryObj } from '@storybook/react'

import { LoginModal } from './LoginModal'

const meta = {
    title: 'features/auth-by-username/LoginModal',
    component: LoginModal,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {}
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
