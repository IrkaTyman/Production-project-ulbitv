import { useTheme, Theme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitch.module.scss';
import { classNames } from 'shared/lib/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button';

type ThemeSwitchProps = {
    className?: string;
}

export const ThemeSwitch = ({className}: ThemeSwitchProps) => {
    const {toggleTheme, theme} = useTheme();

    return (
        <Button 
            theme={ThemeButton.Clear} 
            onClick={toggleTheme} 
            className={classNames(styles.ThemeSwitrch, {}, [className])}
        >
            {theme === Theme.Dark ?
                <DarkIcon/> :
                <LightIcon/>
            }
        </Button>
    );
};