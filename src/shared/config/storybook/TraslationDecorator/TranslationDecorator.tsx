import { type ReactRenderer } from '@storybook/react'
import 'shared/config/i18n/i18nForTest'
import { type DecoratorFunction } from '@storybook/csf'

export const TranslationDecorator: DecoratorFunction<ReactRenderer> =
(Story) => <Story/>
