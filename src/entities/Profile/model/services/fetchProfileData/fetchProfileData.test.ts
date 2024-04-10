import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/storybook.jpg'

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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
