import { type FC, lazy } from 'react'
import { type Props } from './LoginForm'

export const LoginFormAsync = lazy <FC<Props>>(async () => await import('./LoginForm'))
