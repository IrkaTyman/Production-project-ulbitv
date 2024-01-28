import { type FC, memo } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({
    className,
    short
}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ButtonTheme.Clear}
            onClick={toggle}
            className={className}
        >
            {t(short ? 'Короткий язык' : 'Язык') }
        </Button>
    )
})
