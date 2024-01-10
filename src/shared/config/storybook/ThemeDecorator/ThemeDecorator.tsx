import { type StoryFn } from '@storybook/react'
import 'app/styles/themes/dark.scss'
import 'app/styles/themes/normal.scss'
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib'

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={classNames('app', {}, [theme])}>
            <Story/>
        </div>
    </ThemeProvider>
)
