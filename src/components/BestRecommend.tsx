
import { useState } from "react"
import { Clock, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { FaLocationCrosshairs } from 'react-icons/fa6';

const destinations = [
    {
        id: "1-1",
        name: "Ghorgsam Poon Hill Trek",
        location: "Pokhara, Nepal",
        price: 569,
        duration: 5,
        image: "/best-recommend/img1.png",
    },
    {
        id: "2-1",
        name: "Langtang Valley Trekking",
        location: "Langtang, Nepal",
        price: 600,
        duration: 6,
        image: "/best-recommend/img2.png",
    },
    {
        id: "3-1",
        name: "Short Trek around Pokhara",
        location: "Pokhara, Nepal",
        price: 250,
        duration: 4,
        image: "/best-recommend/img3.png",
    },
    {
        id: "4-1",
        name: "Island Peak Climbing",
        location: "Everest, Nepal",
        price: 569,
        duration: 3,
        image: "/best-recommend/img4.png",
    },
    {
        id: "1-2",
        name: "Ghorgsam Poon Hill Trek 2",
        location: "Pokhara, Nepal",
        price: 569,
        duration: 10,
        image: "/best-recommend/img1.png",
    },
    {
        id: "2-2",
        name: "Langtang Valley Trekking 2",
        location: "Langtang, Nepal",
        price: 600,
        duration: 9,
        image: "/best-recommend/img2.png",
    },
    {
        id: "3-2",
        name: "Short Trek around Pokhara 2",
        location: "Pokhara, Nepal",
        price: 250,
        duration: 8,
        image: "/best-recommend/img3.png",
    },
    {
        id: "4-2",
        name: "Island Peak Climbing 2",
        location: "Everest, Nepal",
        price: 569,
        duration: 7,
        image: "/best-recommend/img4.png",
    },
    {
        id: "1-3",
        name: "Ghorgsam Poon Hill Trek 3",
        location: "Pokhara, Nepal",
        price: 569,
        duration: 15,
        image: "/best-recommend/img1.png",
    },
    {
        id: "2-3",
        name: "Langtang Valley Trekking 3",
        location: "Langtang, Nepal",
        price: 600,
        duration: 16,
        image: "/best-recommend/img2.png",
    },
    {
        id: "3-3",
        name: "Short Trek around Pokhara 3",
        location: "Pokhara, Nepal",
        price: 250,
        duration: 17,
        image: "/best-recommend/img3.png",
    },
    {
        id: "4-3",
        name: "Island Peak Climbing 3",
        location: "Everest, Nepal",
        price: 569,
        duration: 18,
        image: "/best-recommend/img4.png",
    },
    {
        id: "1-4",
        name: "Ghorgsam Poon Hill Trek 4",
        location: "Pokhara, Nepal",
        price: 569,
        duration: 19,
        image: "/best-recommend/img1.png",
    },
    {
        id: "2-4",
        name: "Langtang Valley Trekking 4",
        location: "Langtang, Nepal",
        price: 600,
        duration: 20,
        image: "/best-recommend/img2.png",
    },
    {
        id: "3-4",
        name: "Short Trek around Pokhara 4",
        location: "Pokhara, Nepal",
        price: 250,
        duration: 21,
        image: "/best-recommend/img3.png",
    },
    {
        id: "4-4",
        name: "Island Peak Climbing 4",
        location: "Everest, Nepal",
        price: 569,
        duration: 22,
        image: "/best-recommend/img1.png",
    },
    {
        id: "5-1",
        name: "Annapurna Base Camp Trek",
        location: "Annapurna, Nepal",
        price: 800,
        duration: 12,
        image: "/best-recommend/img2.png",
    },
    {
        id: "6-1",
        name: "Manaslu Circuit Trek",
        location: "Manaslu, Nepal",
        price: 950,
        duration: 18,
        image: "/best-recommend/img2.png",
    },
    {
        id: "7-1",
        name: "Everest Base Camp Trek",
        location: "Everest, Nepal",
        price: 1200,
        duration: 14,
        image: "/best-recommend/img2.png",
    },
    {
        id: "8-1",
        name: "Upper Mustang Trek",
        location: "Mustang, Nepal",
        price: 1100,
        duration: 16,
        image: "/best-recommend/img2.png",
    },
    {
        id: "9-1",
        name: "Rara Lake Trek",
        location: "Rara, Nepal",
        price: 750,
        duration: 12,
        image: "/best-recommend/img1.png",
    },
    {
        id: "10-1",
        name: "Gosaikunda Lake Trek",
        location: "Langtang, Nepal",
        price: 650,
        duration: 10,
        image: "/best-recommend/img1.png",
    },
    {
        id: "11-1",
        name: "Makalu Base Camp Trek",
        location: "Makalu, Nepal",
        price: 1050,
        duration: 21,
        image: "/best-recommend/img1.png",
    },
    {
        id: "12-1",
        name: "Kanchenjunga Base Camp Trek",
        location: "Kanchenjunga, Nepal",
        price: 1300,
        duration: 24,
        image: "/best-recommend/img1.png",
    },
]


export default function BestRecommend() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const getVisibleDestinations = () => {
        const itemsPerSlide = 4
        const start = currentSlide * itemsPerSlide
        return destinations.slice(start, start + itemsPerSlide)
    }
    return <div className="bg-cover bg-center bg-no-repeat bg-[url('/best-recommend/bg.png')] h-[750px]  ">
        <div className="max-w-5xl mx-auto pt-24">
            <div className="text-center mb-12 text-[#113D48]">
                <p className="font-montez text-[2rem] ">Best Recommended Places</p>
                <h2 className="text-4xl font-bold mb-4">Popular Destination we offer for all</h2>
                <p className="max-w-lg mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
            </div>
            <div className="relative overflow-hidden mb-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {getVisibleDestinations().map((destination, index) => (
                            <motion.div
                                key={destination.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group p-0 gap-0">
                                    <div className="relative overflow-hidden">
                                        <motion.img
                                            src={destination.image || "/placeholder.svg"}
                                            alt={destination.name}
                                            className="w-full h-48 object-cover transform transition-transform duration-300 ease-out"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold text-slate-800 mb-1 text-sm">{destination.name}</h3>
                                        <div className=" text-slate-500 text-xs flex items-center gap-1">
                                            <FaLocationCrosshairs />
                                            <p className=" ">{destination.location}</p>
                                        </div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <span className="text-lg font-bold text-slate-800">${destination.price}.00</span>
                                                <span className="text-slate-500 text-sm">/Person</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-slate-500 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{destination.duration} Days</span>
                                            </div>
                                            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="cursor-pointer border rounded-2xl py-2 px-3 hover:text-teal-700 text-[#113D48] hover:bg-teal-50  h-auto font-medium"
                                                >
                                                    Book Now
                                                    <div
                                                        className="
      w-4 h-4 bg-[#113D48] transition-colors 
      [mask-image:url('/arrow.svg')] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center]
      [-webkit-mask-image:url('/arrow.svg')] [-webkit-mask-size:100%_100%] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]
    "
                                                    />
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-3">
                {Array.from({ length: Math.ceil(destinations.length / 4) }).map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`border border-gray-400 cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-teal-500 scale-125" : " hover:bg-slate-400"}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    </div>
}
