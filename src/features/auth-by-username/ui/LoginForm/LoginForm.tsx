import { type FC, memo, useCallback } from 'react'
import styles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text } from 'shared/ui/Text'
import { TextTheme } from 'shared/ui/Text/Text'

type Props = Readonly<{
    className?: string
    'data-testid'?: string
}>

export const LoginForm: FC<Props> = memo(({
    className,
    'data-testid': dataTestId = 'LoginForm'
}: Props) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        // TODO исправить ошибку типизации
        // @ts-expect-error В курсе пока что не решаем эту проблему
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div
            data-testid={dataTestId}
            className={classNames(styles.LoginForm, {}, [className])}
        >
            <Text title={t('Форма авторизации')}/>
            {error &&
                <Text text={t(error)} theme={TextTheme.Error}/>
            }
            <Input
                type="text"
                className={styles.input}
                autoFocus
                value={username}
                onChange={onChangeUsername}
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                value={password}
                onChange={onChangePassword}
                className={styles.input}
                placeholder={t('Введите пароль')}
            />
            <Button
                className={styles.loginBtn}
                theme={ButtonTheme.Outline}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})
