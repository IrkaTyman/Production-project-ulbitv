import { type FC, memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader'

export const AppRouter: FC = memo(() => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {routeConfig.map(({ path, element }) => (
                    <Route
                        path={path}
                        key={path}
                        element={
                            <div className="page-wrapper">
                                {element}
                            </div>}
                    />
                ))}
            </Routes>
        </Suspense>
    )
})
