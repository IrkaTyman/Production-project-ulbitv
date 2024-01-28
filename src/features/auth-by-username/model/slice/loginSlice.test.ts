import { type DeepPartial } from 'shared/types/DeepPartial'
import { loginActions, type LoginSchema } from 'features/auth-by-username'
import { loginReducer } from 'features/auth-by-username/model/slice/loginSlice'

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '1223' }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('111'))).toEqual({ username: '111' }
        )
    })

    test('test set isLoading', () => {
        const state: DeepPartial<LoginSchema> = { password: '1223' }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('111'))
        ).toEqual({ password: '111' }
        )
    })
})
