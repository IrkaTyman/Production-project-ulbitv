import { type FC, memo } from 'react'

import styles from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from '../../model/items'
import { classNames } from 'shared/lib'
import { type TestProps } from 'shared/types/TestProps'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

export type Props = TestProps & Readonly<{
    item: SidebarItemType

    collapsed?: boolean
}>

export const SidebarItem: FC<Props> = memo(({
    item,
    collapsed,
    'data-testid': dataTestId = 'SidebarItem'
}: Props) => {
    const isAuth = useSelector(getUserAuthData)

    if (!item.Icon || (!isAuth && item.authOnly)) {
        return null
    }
    return (
        <AppLink
            data-testid={dataTestId}
            theme={AppLinkTheme.Secondary}
            className={classNames(styles.item, { [styles.collapsed]: collapsed })}
            to={item.path}
        >
            <item.Icon className={styles.itemIcon}/>
            <span className={styles.link}>{item.text}</span>
        </AppLink>
    )
})
