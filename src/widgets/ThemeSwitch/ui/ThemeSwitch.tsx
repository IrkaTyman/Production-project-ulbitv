import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button'
import { type FC } from 'react'

interface ThemeSwitchProps {
    className?: string
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
    const { toggleTheme, theme } = useTheme()

    return (
        <Button
            theme={ThemeButton.Clear}
            onClick={toggleTheme}
            className={className}
        >
            {theme === Theme.Dark
                ? <DarkIcon/>
                : <LightIcon/>
            }
        </Button>
    )
}
