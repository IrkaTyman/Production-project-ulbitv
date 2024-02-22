import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'

export enum ValidateProfileError {
    ServerError = 'Server Error',
    NoData = 'No Data',
    IncorrectUserData = 'Incorrect User Data',
    IncorrectAge = 'Incorrect Age',
    IncorrectCountry = 'Incorrect Country'
}

export type Profile = {
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export type ProfileSchema = {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateError?: ValidateProfileError[]
}
