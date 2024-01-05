import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib'

describe('Sidebar', () => {
    test('test render', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslation(<Sidebar/>)

        const toggleButton = screen.getByTestId('Sidebar.toggle')
        fireEvent.click(toggleButton)

        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
    })
})
