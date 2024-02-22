import { type FC, memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

export const AppRouter: FC = memo(() => {
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => (
        routeConfig
            .filter(route => isAuth ?? !route.authOnly)
            .map(({ path, element }) => (
                <Route
                    path={path}
                    key={path}
                    element={
                        <div className="page-wrapper">
                            {element}
                        </div>}
                />
            ))
    ), [isAuth])

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {routes}
            </Routes>
        </Suspense>
    )
})
