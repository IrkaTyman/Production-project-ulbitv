import { screen, waitFor } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from 'shared/config/tests'
import userEvent from '@testing-library/user-event'

describe('entities/Counter', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(<Counter data-testid="Counter"/>, {
            initialState: { counter: { value: 10 } }
        })
        expect(screen.getByTestId('Counter.title')).toHaveTextContent('10')
    })

    test('increment', () => {
        componentRender(<Counter data-testid="Counter"/>, {
            initialState: { counter: { value: 10 } }
        })

        userEvent.click(screen.getByTestId('Counter.incrementBtn'))
        waitFor(() => { expect(screen.getByTestId('Counter.title')).toHaveTextContent('11') })
    })

    test('decrement', () => {
        componentRender(<Counter data-testid="Counter"/>, {
            initialState: { counter: { value: 10 } }
        })

        userEvent.click(screen.getByTestId('Counter.decrementBtn'))
        waitFor(() => { expect(screen.getByTestId('Counter.title')).toHaveTextContent('9') })
    })
})
