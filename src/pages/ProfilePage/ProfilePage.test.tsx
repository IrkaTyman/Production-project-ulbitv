import { screen } from '@testing-library/react'
import ProfilePage from './ProfilePage'
import { componentRender } from 'shared/config/tests'

describe('pages/ProfilePage', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<ProfilePage data-testid="ProfilePage"/>)
        expect(screen.getByTestId('ProfilePage')).toBeInTheDocument()
    })
})
