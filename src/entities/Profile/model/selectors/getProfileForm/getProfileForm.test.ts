import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/types/DeepPartial'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/storybook.jpg'
import { getProfileForm } from './getProfileForm'

const data = {
    first: 'dawaw',
    lastname: 'Ульбив',
    age: 222,
    currency: Currency.EUR,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImg
}

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
