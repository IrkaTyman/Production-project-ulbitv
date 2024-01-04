import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import styles from './Sidebar.module.scss'
import { ThemeSwitch } from 'widgets/ThemeSwitch'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ThemeButton } from 'shared/ui/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = (): void => {
        setCollapsed(collapsed => !collapsed)
    }

    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button
                theme={ThemeButton.Clear}
                onClick={onToggle}
            >
                Toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitch/>
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    )
}
