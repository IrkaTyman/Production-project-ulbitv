import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const form = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', form)

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    }
)
