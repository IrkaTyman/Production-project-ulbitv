import type { Meta, StoryObj } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

import AvatarImg from 'shared/assets/tests/storybook.jpg'

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
    args: {
        data: {
            first: 'dawaw',
            lastname: 'Ульбив',
            age: 222,
            currency: Currency.EUR,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
            avatar: AvatarImg
        }
    }
}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}

export const WithError: Story = {
    args: {
        error: 'Error'
    }
}
