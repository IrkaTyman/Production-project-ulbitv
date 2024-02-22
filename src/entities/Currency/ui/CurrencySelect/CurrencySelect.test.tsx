import { screen } from '@testing-library/react'
import { CurrencySelect } from './CurrencySelect'
import { componentRender } from 'shared/config/tests'

describe('entities/Currency/CurrencySelect', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<CurrencySelect data-testid="CurrencySelect"/>)
        expect(screen.getByTestId('CurrencySelect')).toBeInTheDocument()
    })
})
