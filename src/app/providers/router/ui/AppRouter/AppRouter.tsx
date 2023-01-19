import { RouterProvider } from 'react-router-dom'
import { router } from '../../config/routeConfig'

export const AppRouter = () => {
    return <RouterProvider router={router}/>
}
