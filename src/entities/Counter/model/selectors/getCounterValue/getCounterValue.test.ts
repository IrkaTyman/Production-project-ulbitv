import { getCounterValue } from './getCounterValue'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state: Partial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toBe(10)
    })
})
