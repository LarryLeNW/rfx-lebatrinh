import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { FixedSizeList as VirtualList } from 'react-window'
import { Input } from "../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import type { Place } from '../../types'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { boundsPointsSelector, filteredSortedPlaces, querySelector, selectedCoordSelector, selectedIdSel, sortSelector } from '../../store/a3.selector'
import { setQuery, setSelectedId, setSortOrder } from '../../store/a3.slice'


function makeMarkerIcon(isSelected: boolean, rating: number) {
    const size = isSelected ? 40 : 28
    const bg = isSelected ? '#2563eb' : '#0ea5e9'
    const ring = isSelected ? '0 0 0 6px rgba(37,99,235,0.2)' : '0 0 0 3px rgba(14,165,233,0.25)'
    const html = `
    <div style="
      width:${size}px;height:${size}px;line-height:${size}px;
      background:${bg};color:#fff;border-radius:50%;
      text-align:center;font-weight:700;font-family:Inter,system-ui;
      box-shadow:${ring};
    ">${rating.toFixed(1)}</div>`
    return L.divIcon({ html, iconSize: [size, size], className: 'rf-divicon' })
}

function FitToBounds({ points }: { points: [number, number][] }) {
    const map = useMap()
    useEffect(() => {
        if (!points.length) return
        const bounds = L.latLngBounds(points.map(([lat, lng]) => L.latLng(lat, lng)))
        map.fitBounds(bounds, { padding: [40, 40] })
    }, [map, points])
    return null
}

function FlyToSelected({ coord }: { coord: [number, number] | null }) {
    const map = useMap()
    useEffect(() => {
        if (!coord) return
        const [lat, lng] = coord
        map.flyTo([lat, lng], Math.max(map.getZoom(), 13), { duration: 0.8 })
    }, [map, coord])
    return null
}

export default function MapListSync() {
    const dispatch = useAppDispatch()
    const items = useAppSelector(filteredSortedPlaces)
    const query = useAppSelector(querySelector)
    const sortOrder = useAppSelector(sortSelector)
    const selectedId = useAppSelector(selectedIdSel)
    const selectedCoord = useAppSelector(selectedCoordSelector)
    const boundsPoints = useAppSelector(boundsPointsSelector)
    const listRef = useRef<VirtualList>(null)
    const markerRefs = useRef<Record<string, L.Marker>>({})

    const idToIndex = useMemo(() => {
        const m = new Map<string, number>()
        items.forEach((p, idx) => m.set(p.id, idx))
        return m
    }, [items])

    useEffect(() => {
        if (!selectedId) return
        const idx = idToIndex.get(selectedId)
        if (idx != null) listRef.current?.scrollToItem(idx, 'center')
    }, [selectedId, idToIndex])

    const handleSelect = useCallback((id: string) => {
        dispatch(setSelectedId(id))
    }, [dispatch])

    useEffect(() => {
        if (!selectedId) return
        markerRefs.current[selectedId]?.openPopup()
    }, [selectedId])

    return (
        <div className="h-[88vh] grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            <Card className="flex flex-col">
                <CardHeader><CardTitle>A3</CardTitle></CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <Input
                            value={query}
                            onChange={(e) => dispatch(setQuery(e.target.value))}
                            placeholder="Search by name or description..."
                        />
                        <Select value={sortOrder} onValueChange={(v) => dispatch(setSortOrder(v as 'asc' | 'desc'))}>
                            <SelectTrigger className="w-[140px]"><SelectValue placeholder="Sort by rating" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="desc">Rating ↓</SelectItem>
                                <SelectItem value="asc">Rating ↑</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <VirtualList
                        ref={listRef}
                        height={window.innerHeight * 0.68}
                        width={'100%'}
                        itemCount={items.length}
                        itemSize={90}
                        itemData={{ items, selectedId, onSelect: handleSelect }}
                    >
                        {({ index, style, data }) => {
                            const item: Place = data.items[index]
                            const selected = item.id === data.selectedId
                            return (
                                <div
                                    style={style}
                                    onClick={() => data.onSelect(item.id)}
                                    className={`p-3 border-b cursor-pointer ${selected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                                >
                                    <div className="font-semibold">
                                        {item.name} <span className="text-sm text-yellow-600">({item.rating}★)</span>
                                    </div>
                                    <div className="text-sm text-gray-600 truncate">{item.description}</div>
                                </div>
                            )
                        }}
                    </VirtualList>
                </CardContent>
            </Card>

            <div className='p-0 overflow-hidden'>
                <div className="p-0 h-full rounded-2xl overflow-hidden">
                    <MapContainer center={[16.047, 108.206]} zoom={8} style={{ height: '100%', minHeight: '80vh' }}>
                        <TileLayer attribution='&copy; Lê Bá Trình' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {!selectedCoord && <FitToBounds points={boundsPoints} />}
                        <FlyToSelected coord={selectedCoord} />
                        {items.map(p => {
                            const selected = p.id === selectedId
                            return (
                                <Marker
                                    key={p.id}
                                    position={[p.location.lat, p.location.lng]}
                                    icon={makeMarkerIcon(selected, p.rating)}
                                    eventHandlers={{ click: () => dispatch(setSelectedId(p.id)) }}
                                    ref={(ref) => { if (ref) markerRefs.current[p.id] = ref }}
                                >
                                    <Popup>
                                        <div className="font-semibold text-blue-600 text-lg">{p.name}</div>
                                        <em className="text-sm text-gray-600 ">{p.description}</em>
                                    </Popup>
                                </Marker>
                            )
                        })}
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}