import { screen } from '@testing-library/react'
import { SidebarItem } from './SidebarItem'
import { componentRender } from 'shared/config/tests'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

describe('widgets/Sidebar/SidebarItem', () => {
    test('Компонент отобразился в DOM', () => {
        componentRender(
            <SidebarItem
                data-testid="SidebarItem"
                item={{ path: '', Icon: ProfileIcon, text: '' }}
            />)
        expect(screen.getByTestId('SidebarItem')).toBeInTheDocument()
    })
})
