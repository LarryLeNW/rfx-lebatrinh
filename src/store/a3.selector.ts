import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '.'
import type { Place } from '../types'

const mapState = (s: RootState) => s.map
export const querySelector = (s: RootState) => s.map.query
export const sortSelector = (s: RootState) => s.map.sortOrder
export const selectedIdSel = (s: RootState) => s.map.selectedId
export const placesSel = (s: RootState) => s.map.places

export const filteredSortedPlaces = createSelector(
    [placesSel, querySelector, sortSelector],
    (all, query, sort): Place[] => {
        const q = query.trim().toLowerCase()
        let out = q
            ? all.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q))
            : all

        return [...out].sort((a, b) =>
            sort === 'asc' ? a.rating - b.rating : b.rating - a.rating
        )
    }
)

export const selectedCoordSelector = createSelector(
    [placesSel, selectedIdSel],
    (all, id): [number, number] | null => {
        if (!id) return null
        const p = all.find(x => x.id === id)
        return p ? [p.location.lat, p.location.lng] : null
    }
)

export const boundsPointsSelector = createSelector(
    [filteredSortedPlaces],
    (items) => items.map(p => [p.location.lat, p.location.lng] as [number, number])
)
