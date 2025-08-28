

import { useState } from "react"
import { Button } from "./ui/button"

interface Destination {
    id: number
    name: string
    listings: number
    image: string
    description: string
}

const destinations: Destination[] = [
    {
        id: 1,
        name: "Maldives",
        listings: 15,
        image: "/destination/maldives-tropical-resort-overwater-bungalows.png",
        description: "Paradise islands with crystal clear waters",
    },
    {
        id: 2,
        name: "Nepal",
        listings: 28,
        image: "/destination/nepal-mountains-himalaya-landscape.png",
        description: "Majestic mountains and ancient culture",
    },
    {
        id: 3,
        name: "Thailand",
        listings: 22,
        image: "/destination/thailand-beach-couple-romantic-sunset.png",
        description: "Beautiful beaches and rich heritage",
    },
    {
        id: 4,
        name: "Philippines",
        listings: 31,
        image: "/destination/philippines-tropical-island-lagoon.png",
        description: "Stunning archipelago with pristine waters",
    },
    {
        id: 5,
        name: "Bali",
        listings: 19,
        image: "/destination/bali-indonesia-temple-rice-terraces.png",
        description: "Island of gods with lush landscapes",
    },
    {
        id: 6,
        name: "Japan",
        listings: 42,
        image: "/destination/canh-dep-nhat-ban-18.jpg",
        description: "Land of rising sun with ancient traditions",
    },
    {
        id: 7,
        name: "Greece",
        listings: 35,
        image: "/destination/greece-santorini-white-buildings-blue-sea.png",
        description: "Mediterranean paradise with rich history",
    },
    {
        id: 8,
        name: "Iceland",
        listings: 18,
        image: "/destination/iceland-northern-lights-glaciers-waterfalls.png",
        description: "Nordic wonderland with natural phenomena",
    },
    {
        id: 9,
        name: "Morocco",
        listings: 26,
        image: "/destination/morocco-desert-dunes-marrakech-architecture.png",
        description: "Exotic culture and stunning landscapes",
    },
    {
        id: 10,
        name: "New Zealand",
        listings: 33,
        image: "/destination/new-zealand-mountains-lakes-green-landscapes.png",
        description: "Adventure paradise with breathtaking scenery",
    },
]

export default function TopDestination() {
    const [currentIndex, setCurrentIndex] = useState(4)

    const handleCardClick = (clickedIndex: number) => {
        setCurrentIndex(clickedIndex)
    }

    const getCardStyle = (index: number) => {
        const diff = index - currentIndex
        const normalizedDiff = ((diff % destinations.length) + destinations.length) % destinations.length

        const position = normalizedDiff > destinations.length / 2 ? normalizedDiff - destinations.length : normalizedDiff

        if (Math.abs(position) > 2) {
            return {
                transform: "translate3d(0, 100px, 0) scale(0.7)",
                zIndex: 0,
                opacity: 0,
                filter: "blur(3px)",
                pointerEvents: "none" as const,
            }
        }

        if (position === 0) {
            return {
                transform: "translate3d(0, 0, 0) scale(1) rotateY(0deg)",
                zIndex: 10,
                opacity: 1,
                filter: "blur(0px)",
            }
        } else {
            const absPosition = Math.abs(position)
            const direction = position > 0 ? 1 : -1

            const translateX = direction * (120 + absPosition * 140)
            const translateY = absPosition * 12

            const scale = absPosition === 2 ? 0.75 : 1 - absPosition * 0.12

            const rotateY = direction * absPosition * 8

            const blur = absPosition === 2 ? 0.3 : absPosition * 0.6

            const zIndex = 10 - absPosition

            return {
                transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex,
                filter: `blur(${blur}px)`,
            }
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-[#113D48] text-center pt-20">
                <p className="text-[2rem] mb-2 font-montez">Top Destination</p>
                <h2 className="text-4xl font-bold ">Popular Destination</h2>
            </div>
            <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                    {destinations.map((destination, index) => (
                        <div
                            key={destination.id}
                            className="absolute w-80 h-96 transition-all duration-1200 ease-out cursor-pointer"
                            style={{
                                ...getCardStyle(index),
                                willChange: "transform, opacity, filter",
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white hover:shadow-3xl transition-shadow duration-300">
                                <div className="absolute inset-0">
                                    <img
                                        src={destination.image || "/placeholder.svg"}
                                        alt={destination.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex justify-between items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                                        <p className="text-sm opacity-90 mb-4">{destination.listings} Listing</p>
                                    </div>
                                    {index === currentIndex && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="bg-white/20 border-white/30 text-white hover:text-[#113D48] cursor-pointer backdrop-blur-sm"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                            }}
                                        >
                                            View All →
                                        </Button>
                                    )}
                                </div>

                                {index !== currentIndex &&
                                    Math.abs(
                                        (index - currentIndex + destinations.length) % destinations.length > destinations.length / 2
                                            ? ((index - currentIndex + destinations.length) % destinations.length) - destinations.length
                                            : (index - currentIndex + destinations.length) % destinations.length,
                                    ) <= 2 && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                                                <div className="w-4 h-4 border-2 border-white rounded-full animate-pulse" />
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
