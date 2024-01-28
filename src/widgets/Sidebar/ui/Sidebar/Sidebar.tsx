import { type FC, memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { ThemeSwitch } from 'widgets/ThemeSwitch'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed(collapsed => !collapsed)
    }

    return (
        <div
            data-testid="Sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className]
            )}
        >
            <Button
                size={ButtonSize.L}
                data-testid="Sidebar.toggle"
                theme={ButtonTheme.BackgroundInverted}
                onClick={onToggle}
                square
                className={styles.collapseBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem item={item} collapsed={collapsed} key={item.path}/>
                ))}
            </div>

            <div className={styles.switchers}>
                <ThemeSwitch/>
                <LangSwitcher className={styles.lang} short={collapsed}/>
            </div>
        </div>
    )
})
