import { type FC } from 'react'
import styles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

type LoginFormProps = Readonly<{
    className?: string
    'data-testid'?: string
}>

export const LoginForm: FC<LoginFormProps> = ({
    className,
    'data-testid': dataTestId = 'LoginForm'
}) => {
    const { t } = useTranslation()

    return (
        <div
            data-testid={dataTestId}
            className={classNames(styles.LoginForm, {}, [className])}
        >
            <Input
                type="text"
                className={styles.input}
                autoFocus
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                className={styles.input}
                placeholder={t('Введите пароль')}
            />
            <Button className={styles.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    )
}
