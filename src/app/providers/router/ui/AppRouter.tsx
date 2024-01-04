import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
}
