import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

import AvatarImg from '../../assets/tests/storybook.jpg'

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {}
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        size: 150,
        src: AvatarImg
    }
}

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg
    }
}
