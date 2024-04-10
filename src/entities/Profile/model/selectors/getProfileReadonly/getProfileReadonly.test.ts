import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/types/DeepPartial'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toBe(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
    })
})
