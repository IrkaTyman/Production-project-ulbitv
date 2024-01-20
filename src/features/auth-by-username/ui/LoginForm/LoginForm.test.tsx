import { screen } from '@testing-library/react'
import LoginForm from './LoginForm'
import { componentRender } from 'shared/config/tests'

describe('features/auth-by-username/LoginForm', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<LoginForm data-testid="LoginForm"/>)
        expect(screen.getByTestId('LoginForm')).toBeInTheDocument()
    })
})
