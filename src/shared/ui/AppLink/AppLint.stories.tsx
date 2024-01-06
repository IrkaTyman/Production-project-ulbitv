import type { Meta, StoryObj } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {
        to: '/',
        children: 'Text'
    }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        theme: AppLinkTheme.Primary
    }
}

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.Secondary
    }
}
