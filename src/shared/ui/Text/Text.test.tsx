import { screen } from '@testing-library/react'
import { Text } from './Text'
import { componentRender } from 'shared/config/tests'

describe('shared/Text', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<Text data-testid="Text"/>)
        expect(screen.getByTestId('Text')).toBeInTheDocument()
    })
})
