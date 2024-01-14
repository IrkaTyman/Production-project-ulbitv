import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {
        size: ButtonSize.M,
        children: 'Button'
    }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { }
}

export const Clear: Story = {
    args: {
        theme: ButtonTheme.Clear
    }
}

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.ClearInverted
    }
}

export const Outline: Story = {
    args: {
        theme: ButtonTheme.Outline
    }
}

export const OutlineL: Story = {
    args: {
        theme: ButtonTheme.Outline,
        size: ButtonSize.L
    }
}

export const OutlineXL: Story = {
    args: {
        theme: ButtonTheme.Outline,
        size: ButtonSize.XL
    }
}

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.Outline
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const BackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.Background
    }
}

export const BackgroundInvertedTheme: Story = {
    args: {
        theme: ButtonTheme.BackgroundInverted
    }
}

export const Square: Story = {
    args: {
        theme: ButtonTheme.BackgroundInverted,
        square: true
    }
}

export const SquareSizeL: Story = {
    args: {
        theme: ButtonTheme.BackgroundInverted,
        square: true,
        size: ButtonSize.L
    }
}

export const SquareSizeXl: Story = {
    args: {
        theme: ButtonTheme.BackgroundInverted,
        square: true,
        size: ButtonSize.XL
    }
}

export const Disabled: Story = {
    args: {
        theme: ButtonTheme.Background,
        disabled: true
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}
