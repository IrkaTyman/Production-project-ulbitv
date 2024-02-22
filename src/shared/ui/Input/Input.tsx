import {
    type ChangeEvent,
    type FC,
    type InputHTMLAttributes,
    memo,
    useCallback, useEffect, useRef,
    useState
} from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'

import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

export type Props = HTMLInputProps & Readonly<{
    className?: string
    'data-testid'?: string
    value?: string | number
    onChange?: (value: string) => void
    readonly?: boolean
}>

export const Input: FC<Props> = memo(({
    value,
    onChange,
    type = 'text',
    className,
    placeholder,
    'data-testid': dataTestId = 'Input',
    autoFocus,
    readonly,
    ...inputProps
}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    const isCaretVisible = isFocused && !readonly

    const onChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
        setCaretPosition(event.target.value.length)
    }, [onChange])

    const onBlur = useCallback(() => {
        setIsFocused(false)
    }, [])

    const onFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    const onSelect = useCallback((event: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setCaretPosition(event?.target?.selectionStart ?? 0)
    }, [])

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            inputRef.current?.focus()
        }
    }, [autoFocus])

    const mods: Mods = {
        [styles.readonly]: readonly
    }

    return (
        <div
            data-testid={dataTestId}
            className={classNames(styles.InputWrapper, mods, [className])}
        >
            {placeholder &&
                <div className={styles.placeholder}>
                    {`${placeholder}>`}
                </div>}
            <div className={styles.caretWrapper}>
                <input
                    {...inputProps}
                    readOnly={readonly}
                    type={type}
                    ref={inputRef}
                    autoFocus={autoFocus}
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={styles.input}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                />
                {isCaretVisible &&
                    <span
                        className={styles.caret}
                        style={{ left: `${caretPosition * 9.4}px` }}
                    />
                }
            </div>
        </div>
    )
})
