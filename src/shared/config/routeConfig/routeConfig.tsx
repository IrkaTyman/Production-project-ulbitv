import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'
import { ProfilePage } from 'pages/ProfilePage'

export enum AppRoutes {
    Main = 'main',
    About = 'about',
    NotFound = 'not_found',
    Profile = 'profile'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
    [AppRoutes.NotFound]: '*',
    [AppRoutes.Profile]: '/profile'
}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage/>
    },
    {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    },
    {
        path: RoutePath.profile,
        element: <ProfilePage/>
    }
]
