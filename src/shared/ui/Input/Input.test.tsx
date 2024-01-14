import { screen } from '@testing-library/react'
import { Input } from './Input'
import { componentRender } from 'shared/config/tests'

describe('shared/Input', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<Input data-testid="Input"/>)
        expect(screen.getByTestId('Input')).toBeInTheDocument()
    })
})
