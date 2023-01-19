import { Suspense } from 'react'
import { AppRouter } from './providers/router'

export const App = () => {
    return (
        <div className='app'>
            <Suspense fallback=''>

                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}