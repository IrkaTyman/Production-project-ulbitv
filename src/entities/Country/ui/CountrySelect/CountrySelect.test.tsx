import { screen } from '@testing-library/react'
import { CountrySelect } from './CountrySelect'
import { componentRender } from 'shared/config/tests'

describe('entities/Country/CountrySelect', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<CountrySelect data-testid="CountrySelect"/>)
        expect(screen.getByTestId('CountrySelect')).toBeInTheDocument()
    })
})
