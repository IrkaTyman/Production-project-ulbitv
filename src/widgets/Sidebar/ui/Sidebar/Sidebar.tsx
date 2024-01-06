import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { ThemeSwitch } from 'widgets/ThemeSwitch'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

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
                <AppLink
                    theme={AppLinkTheme.Secondary}
                    to={RoutePath.main}
                    className={styles.item}
                >
                    <MainIcon className={styles.itemIcon}/>
                    <span className={styles.link}>{t('Главная')}</span>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.Secondary}
                    className={styles.item}
                    to={RoutePath.about}
                >
                    <AboutIcon className={styles.itemIcon}/>
                    <span className={styles.link}>{t('О сайте')}</span>

                </AppLink>
            </div>

            <div className={styles.switchers}>
                <ThemeSwitch/>
                <LangSwitcher className={styles.lang} short={collapsed}/>
            </div>
        </div>
    )
}
