import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/types/DeepPartial'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password'
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('password')
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined)
    })
})
