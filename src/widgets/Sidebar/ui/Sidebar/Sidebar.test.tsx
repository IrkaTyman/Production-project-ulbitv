import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { componentRender } from 'shared/config/tests'

describe('Sidebar', () => {
    test('test render', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        componentRender(<Sidebar/>)

        const toggleButton = screen.getByTestId('Sidebar.toggle')
        fireEvent.click(toggleButton)

        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
    })
})
