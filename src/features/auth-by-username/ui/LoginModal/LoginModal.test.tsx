import { screen } from '@testing-library/react'
import { LoginModal } from './LoginModal'
import { componentRender } from 'shared/config/tests'

describe('features/auth-by-username/LoginModal', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<LoginModal data-testid="LoginModal"/>)
        expect(screen.getByTestId('LoginModal')).toBeInTheDocument()
    })
})
