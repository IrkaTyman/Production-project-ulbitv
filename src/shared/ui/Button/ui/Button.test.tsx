import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button'

describe('Button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('clear theme', () => {
        render(<Button theme={ButtonTheme.Clear}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})
