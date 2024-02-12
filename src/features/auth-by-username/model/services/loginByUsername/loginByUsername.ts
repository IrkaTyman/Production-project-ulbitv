import { createAsyncThunk } from '@reduxjs/toolkit'

import { type User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { type ThunkConfig } from 'app/providers/StoreProvider'

type Arguments = {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, Arguments, ThunkConfig<string>>(
    'users/loginByUsername',
    async (authData, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            extra.navigate?.('/about')
            return response.data
        } catch (error) {
            return rejectWithValue('Вы ввели неверный логин или пароль')
        }
    }
)
