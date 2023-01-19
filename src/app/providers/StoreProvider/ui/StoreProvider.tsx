import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { createReduxStore, StateSchema } from '@/app/providers/StoreProvider'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, asyncReducers, initialState } = props

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}