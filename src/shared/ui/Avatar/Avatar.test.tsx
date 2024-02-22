import { screen } from '@testing-library/react'
import { Avatar } from './Avatar'
import { componentRender } from 'shared/config/tests'

describe('shared/Avatar', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<Avatar data-testid="Avatar"/>)
        expect(screen.getByTestId('Avatar')).toBeInTheDocument()
    })
})
