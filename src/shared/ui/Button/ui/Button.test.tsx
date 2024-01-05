import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button'

describe('Button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('clear theme', () => {
        render(<Button theme={ThemeButton.Clear}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})
