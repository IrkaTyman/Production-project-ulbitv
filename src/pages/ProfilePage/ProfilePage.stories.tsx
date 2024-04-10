import type { Meta, StoryObj } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/storybook.jpg'

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
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
        })
    ]
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

export const DefaultDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.Dark)]
}
