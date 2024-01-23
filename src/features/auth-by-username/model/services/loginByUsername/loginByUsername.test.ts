import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>
describe('loginByUsername.test', () => {
    let dispatch: Dispatch
    let getState: () => StateSchema

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })
    test('', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: '123', is: '1' } }))
        const action = loginByUsername({ username: '123', password: '123' })
        const result = action(dispatch, getState, undefined)
        console.log(result)
        // expect().toEqual()
    })
})
