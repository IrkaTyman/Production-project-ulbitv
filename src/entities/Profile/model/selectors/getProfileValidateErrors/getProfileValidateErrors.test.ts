import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/types/DeepPartial'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: []
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([])
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
