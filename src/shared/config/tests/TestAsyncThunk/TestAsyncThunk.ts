import { type StateSchema } from 'app/providers/StoreProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { type AxiosStatic } from 'axios'
import { type DeepPartial } from 'shared/types/DeepPartial'

type ActionCreatorType<Return, Args, RejectedValue> =
    (arg: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

export class TestAsyncThunk<Return, Args, RejectedValue> {
    dispatch: jest.MockedFn<any>

    getState: () => StateSchema

    actionCreator: ActionCreatorType<Return, Args, RejectedValue>

    api: jest.MockedFunctionDeep<AxiosStatic>

    navigate: jest.MockedFn<any>

    constructor (
        actionCreator: ActionCreatorType<Return, Args, RejectedValue>,
        state?: DeepPartial<StateSchema>
    ) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)

        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk (arg: Args) {
        const action = this.actionCreator(arg)
        const result = await action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate }
        )

        return result
    }
}
