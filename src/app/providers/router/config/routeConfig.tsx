import { createBrowserRouter } from 'react-router-dom'
import { getRouteMain } from '@/shared/const/router'
import { MainPage } from '@/pages/MainPage'

export const router = createBrowserRouter([
    {
        path: getRouteMain(),
        element: <MainPage />
    }
])