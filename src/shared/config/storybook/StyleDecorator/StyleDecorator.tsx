import { type ReactRenderer } from '@storybook/react'
import 'app/styles/index.scss'
import { type DecoratorFunction } from '@storybook/csf'

export const StyleDecorator: DecoratorFunction<ReactRenderer> =
(Story) => <Story/>
