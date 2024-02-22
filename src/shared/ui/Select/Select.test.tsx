import { screen } from '@testing-library/react'
import { Select } from './Select'
import { componentRender } from 'shared/config/tests'

describe('shared/Select', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<Select data-testid="Select"/>)
        expect(screen.getByTestId('Select')).toBeInTheDocument()
    })
})
