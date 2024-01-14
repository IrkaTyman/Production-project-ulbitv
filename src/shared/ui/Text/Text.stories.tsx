import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {}
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        text: 'Text',
        title: 'Title'
    }
}

export const OnlyText: Story = {
    args: {
        text: 'Text'
    }
}

export const OnlyTitle: Story = {
    args: {
        title: 'Title'
    }
}

export const DefaultDark: Story = {
    args: {
        text: 'Text',
        title: 'Title'
    },
    decorators: [
        ThemeDecorator(Theme.Dark)
    ]
}

export const OnlyTextDark: Story = {
    args: {
        text: 'Text'
    },
    decorators: [
        ThemeDecorator(Theme.Dark)
    ]
}

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title'
    },
    decorators: [
        ThemeDecorator(Theme.Dark)
    ]
}

export const Error: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        theme: TextTheme.Error
    }
}
