import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

type NavbarProps = {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink 
                    theme={AppLinkTheme.Secondary} 
                    to="/" 
                    className={styles.mainLink}
                >
                    Main
                </AppLink>
                
                <AppLink 
                    theme={AppLinkTheme.Secondary} 
                    to="/about">
                    About
                </AppLink>
            </div>
        </div>
    );
};
