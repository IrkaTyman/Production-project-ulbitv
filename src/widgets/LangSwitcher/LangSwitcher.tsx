import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import styles from './LangSwitcher.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const toggle = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.Clear}
            onClick={toggle}
            className={classNames(styles.LangSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    )
}
