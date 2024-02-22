import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile, ValidateProfileError } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
Profile,
void,
ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const form = getProfileForm(getState())

        const errors = validateProfileData(form)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile', form)

            return response.data
        } catch (error) {
            return rejectWithValue([ValidateProfileError.ServerError])
        }
    }
)
