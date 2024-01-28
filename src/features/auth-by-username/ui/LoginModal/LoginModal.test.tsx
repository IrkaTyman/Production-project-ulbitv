import { screen } from '@testing-library/react'
import { LoginModal } from './LoginModal'
import { componentRender } from 'shared/config/tests'
import { act } from 'react-dom/test-utils'

describe('features/auth-by-username/LoginModal', () => {
    test('Компонент отобразился в DOM', () => {
        act(() => {
            componentRender(<LoginModal data-testid="LoginModal" isOpen={true}/>)
        })

        expect(screen.getByTestId('LoginModal')).toBeInTheDocument()
    })
})
