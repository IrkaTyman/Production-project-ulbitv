import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames";
import styles from './Sidebar.module.scss';
import { ThemeSwitch } from "widgets/ThemeSwitch";

type SidebarProps = {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(collapsed => !collapsed);
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitch/>
                {/* {<LangSwitcher/>} */}
            </div>
        </div>
    );
};