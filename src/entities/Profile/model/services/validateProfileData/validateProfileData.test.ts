import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/storybook.jpg'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from 'entities/Profile'

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)
        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })
        expect(result).toEqual([ValidateProfileError.IncorrectUserData])
    })

    test('without age', async () => {
        const result = validateProfileData({ ...data, age: undefined })
        expect(result).toEqual([ValidateProfileError.IncorrectAge])
    })

    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined })
        expect(result).toEqual([ValidateProfileError.IncorrectCountry])
    })

    test('without country', async () => {
        const result = validateProfileData()
        expect(result).toEqual([ValidateProfileError.NoData])
    })

    test('empty data', async () => {
        const result = validateProfileData({})
        expect(result).toEqual([
            ValidateProfileError.IncorrectUserData,
            ValidateProfileError.IncorrectAge,
            ValidateProfileError.IncorrectCountry
        ])
    })
})
