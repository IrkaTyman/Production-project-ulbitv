import { screen } from '@testing-library/react'
import { ProfileCard } from './ProfileCard'
import { componentRender } from 'shared/config/tests'

describe('entitites/Profile/ProfileCard', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<ProfileCard data-testid="ProfileCard"/>)
        expect(screen.getByTestId('ProfileCard')).toBeInTheDocument()
    })
})
