import type { Meta, StoryObj } from '@storybook/react'

import { ProfileCard } from './ProfileCard'

const meta = {
    title: 'entitites/Profile/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {}
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
