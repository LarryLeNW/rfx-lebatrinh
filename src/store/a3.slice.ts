import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import data from '../data/places.json'
import type { Place } from '../types'

export type SortOrder = 'asc' | 'desc'
type MapState = {
    places: Place[]
    query: string
    sortOrder: SortOrder
    selectedId: string | null
}

const initialState: MapState = {
    places: data as Place[],
    query: '',
    sortOrder: 'desc',
    selectedId: null,
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setQuery: (s, a: PayloadAction<string>) => { s.query = a.payload },
        setSortOrder: (s, a: PayloadAction<SortOrder>) => { s.sortOrder = a.payload },
        setSelectedId: (s, a: PayloadAction<string | null>) => { s.selectedId = a.payload },
    },
})

export const { setQuery, setSortOrder, setSelectedId } = mapSlice.actions
export const a3Reducer = mapSlice.reducer
