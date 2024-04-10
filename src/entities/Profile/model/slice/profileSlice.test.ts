import { type DeepPartial } from 'shared/types/DeepPartial'
import { profileActions, profileReducer } from './profileSlice'
import { type ProfileSchema, ValidateProfileError } from '../types/profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/storybook.jpg'
import { updateProfileData } from 'entities/Profile'

const data = {
    lastname: 'Ульбив',
    age: 222,
    currency: Currency.EUR,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: AvatarImg
}

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true })
    })

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data
        })
    })

    test('test update data', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '123' } }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: '12345' })
        )).toEqual({
            data,
            form: { username: '12345' }
        })
    })

    test('test update data service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.ServerError]
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending('')
        )).toEqual({
            isLoading: true,
            validateError: undefined
        })
    })

    test('test update data service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileError.ServerError]
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            data,
            form: data
        })
    })
})
