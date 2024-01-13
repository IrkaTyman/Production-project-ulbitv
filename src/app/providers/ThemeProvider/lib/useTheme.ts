import { useContext } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext
} from '../lib/ThemeContext'

interface UseThemeResult {
    toggleTheme: () => void
    theme?: Theme
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark
        setTheme?.(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        toggleTheme,
        theme
    }
}
