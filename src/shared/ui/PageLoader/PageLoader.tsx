import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = memo(({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
})
