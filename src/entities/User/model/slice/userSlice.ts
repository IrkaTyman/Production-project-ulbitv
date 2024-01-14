import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/User'

const initialState: UserSchema = {
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    }
})

export const {
    actions: userActions,
    reducer: userReducer
} = userSlice
