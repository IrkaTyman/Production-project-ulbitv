import { type FC, memo, useCallback } from 'react'
import { Button } from 'shared/ui/Button'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

type CounterProps = Readonly<{
    'data-testid'?: string
}>

export const Counter: FC<CounterProps> = memo(({
    'data-testid': dataTestId = 'Counter'
}: CounterProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = useCallback(() => {
        dispatch(counterActions.increment())
    }, [dispatch])

    const decrement = useCallback(() => {
        dispatch(counterActions.decrement())
    }, [dispatch])

    return (
        <div data-testid={dataTestId}>
            <h1 data-testid={`${dataTestId}.title`}>{counterValue}</h1>
            <Button
                data-testid={`${dataTestId}.incrementBtn`}
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid={`${dataTestId}.decrementBtn`}
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    )
})
