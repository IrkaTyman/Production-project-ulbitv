import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/types/DeepPartial'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileIsLoading(state as StateSchema)).toBe(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
    })
})
