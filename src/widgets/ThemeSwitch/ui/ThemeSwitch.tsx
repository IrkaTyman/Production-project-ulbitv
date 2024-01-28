import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { type FC, memo } from 'react'

interface ThemeSwitchProps {
    className?: string
}

export const ThemeSwitch: FC<ThemeSwitchProps> = memo(({ className }: ThemeSwitchProps) => {
    const { toggleTheme, theme } = useTheme()

    return (
        <Button
            theme={ButtonTheme.Clear}
            onClick={toggleTheme}
            className={className}
        >
            {theme === Theme.Dark
                ? <DarkIcon/>
                : <LightIcon/>
            }
        </Button>
    )
})
