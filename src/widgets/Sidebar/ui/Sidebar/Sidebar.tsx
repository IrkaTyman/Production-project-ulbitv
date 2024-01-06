import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { ThemeSwitch } from 'widgets/ThemeSwitch'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ThemeButton } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { t } = useTranslation()
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
                data-testid="Sidebar.toggle"
                theme={ThemeButton.Clear}
                onClick={onToggle}
            >
                {t('Меню(вкл/выкл)')}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitch/>
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    )
}
