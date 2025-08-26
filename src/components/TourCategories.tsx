
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { useMemo, useState } from "react"

const tourCategories = [
    {
        id: 1,
        name: "Wildlife",
        image: "/tour-cate/cate1.jpg",
        description: "Explore amazing wildlife",
    },
    {
        id: 2,
        name: "Walking",
        image: "/tour-cate/cate2.jpg",
        description: "Discover scenic walking trails",
    },
    {
        id: 3,
        name: "Cruises",
        image: "/tour-cate/cate3.jpg",
        description: "Luxury cruise experiences",
    },
    {
        id: 4,
        name: "Hiking",
        image: "/tour-cate/cate4.jpg",
        description: "Adventure hiking expeditions",
    },
    {
        id: 5,
        name: "Airbirds",
        image: "/tour-cate/cate5.webp",
        description: "Aerial wildlife tours",
    },
    {
        id: 6,
        name: "Wildlife 1",
        image: "/tour-cate/cate6.jpg",
        description: "Explore amazing wildlife",
    },
    {
        id: 7,
        name: "Walking 2",
        image: "/tour-cate/cate7.jpg",
        description: "Discover scenic walking trails",
    },
    {
        id: 8,
        name: "Cruises 3",
        image: "/tour-cate/cate8.jpg",
        description: "Luxury cruise experiences",
    },
    {
        id: 9,
        name: "Hiking 4",
        image: "/tour-cate/cate9.jpg",
        description: "Adventure hiking expeditions",
    },
    {
        id: 10,
        name: "Airbirds 5",
        image: "/tour-cate/cate10.jpg",
        description: "Aerial wildlife tours",
    },
    {
        id: 11,
        name: "Wildlife 2",
        image: "/tour-cate/cate1.jpg",
        description: "Explore amazing wildlife",
    },
    {
        id: 12,
        name: "Walking 2",
        image: "/tour-cate/cate2.jpg",
        description: "Discover scenic walking trails",
    },
    {
        id: 13,
        name: "Cruises 2",
        image: "/tour-cate/cate3.jpg",
        description: "Luxury cruise experiences",
    },
    {
        id: 14,
        name: "Hiking 2",
        image: "/tour-cate/cate4.jpg",
        description: "Adventure hiking expeditions",
    },
    {
        id: 15,
        name: "Airbirds 2",
        image: "/tour-cate/cate5.webp",
        description: "Aerial wildlife tours",
    },
]
export default function TourCategories() {
    const VISIBLE = 5
    const [currentIndex, setCurrentIndex] = useState(0)
    const [slideDir, setSlideDir] = useState<1 | -1>(1)
    const totalSlides = Math.ceil(tourCategories.length / VISIBLE)

    const page = Math.floor(currentIndex / VISIBLE)

    const getVisibleIndexes = (start: number) =>
        Array.from({ length: VISIBLE }, (_, i) => (start + i) % tourCategories.length)

    const visible = useMemo(() => getVisibleIndexes(currentIndex), [currentIndex])

    const goToSlide = (p: number) => {
        const target = (p * VISIBLE) % tourCategories.length
        setSlideDir(target >= currentIndex ? 1 : -1)
        setCurrentIndex(target)
    }

    const posToYR = (pos: number) => {
        const yArr = [48, 12, 0, 12, 48]
        const rArr = [-10, -6, 0, 6, 10]
        return { y: yArr[pos], rotate: rArr[pos] }
    }

    const groupVariants: Variants = {
        initial: (dir: 1 | -1) => ({ opacity: 0, x: dir === 1 ? 40 : -40 }),
        animate: {
            opacity: 1, x: 0,
            transition: {
                duration: 0.2,
                ease: [0.2, 0.8, 0.2, 1],
                when: "beforeChildren",
                staggerChildren: 0.04
            }
        },
        exit: (dir: 1 | -1) => ({
            opacity: 0, x: dir === 1 ? -40 : 40,
            transition: {
                duration: 0.1,
                ease: [0.4, 0.0, 0.2, 1],
                when: "afterChildren",
                staggerDirection: -1
            }
        })
    } as const

    const itemVariants: Variants = {
        initial: (dir: 1 | -1) => ({ opacity: 0, x: dir === 1 ? 20 : -20 }),
        animate: {
            opacity: 1, x: 0,
            transition: { duration: 0.20, ease: [0.2, 0.8, 0.2, 1] }
        },
        exit: (dir: 1 | -1) => ({
            opacity: 0, x: dir === 1 ? -24 : 24,
            transition: { duration: 0.45, ease: [0.4, 0.0, 0.2, 1] }
        })
    } as const

    return (
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/tour-cate/bg.png')]">
            <div className="text-[#113D48] text-center pt-24">
                <p className="text-[2rem] mb-2 font-montez">Wonderful Place for You</p>
                <h2 className="text-4xl font-bold mb-10">Tour Categories</h2>
            </div>

            <div className="relative">
                <div className="w-full">
                    <AnimatePresence mode="wait" custom={slideDir}>
                        <motion.div
                            key={page}
                            custom={slideDir}
                            variants={groupVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex justify-center gap-6 w-full items-end"
                        >
                            {visible.map((idx, pos) => {
                                const item = tourCategories[idx]
                                const { y, rotate } = posToYR(pos)
                                return (
                                    <motion.div
                                        key={`${item.id}-${pos}`}
                                        custom={slideDir}
                                        variants={itemVariants}
                                        className="w-[200px] shrink-0 flex flex-col items-center cursor-pointer"
                                        style={{ y, rotate }}
                                    >
                                        <div className="relative w-full aspect-square overflow-hidden rounded-3xl">
                                            <motion.img
                                                src={item.image}
                                                alt={item.name}
                                                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                            />
                                        </div>
                                        <div className="mt-3 text-center">
                                            <div className="font-semibold text-[#113D48]">{item.name}</div>
                                            <button className="text-sm text-gray-600 ">
                                                See more
                                            </button>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    {Array.from({ length: totalSlides }).map((_, p) => {
                        const active = page === p
                        return (
                            <button
                                key={p}
                                onClick={() => goToSlide(p)}
                                className={`h-3 w-3 rounded-full transition-all cursor-pointer
                  ${active ? "bg-teal-600 scale-110 shadow" : "border border-gray-400  hover:bg-gray-400"}`}
                                aria-label={`Go to slide ${p + 1}`}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

