import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routeConfig.map(({path, element}) => (
                    <Route 
                        path={path} 
                        key={path}
                        element={
                            <div className="pageWrapper">
                                {element}
                            </div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};