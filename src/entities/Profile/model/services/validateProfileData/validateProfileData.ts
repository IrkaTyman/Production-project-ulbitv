import { type Profile, ValidateProfileError } from '../../types/profile'

export function validateProfileData (profile?: Profile) {
    if (!profile) {
        return [ValidateProfileError.NoData]
    }

    const { first, lastname, age, country } = profile
    const errors: ValidateProfileError[] = []

    if (!first || !lastname) {
        errors.push(ValidateProfileError.IncorrectUserData)
    }

    if (!age) {
        errors.push(ValidateProfileError.IncorrectAge)
    }

    if (!country) {
        errors.push(ValidateProfileError.IncorrectCountry)
    }

    return errors
}
