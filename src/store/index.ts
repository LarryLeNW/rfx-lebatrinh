import { configureStore } from '@reduxjs/toolkit'
import { a3Reducer } from './a3.slice'

export const store = configureStore({
    reducer: { map: a3Reducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
