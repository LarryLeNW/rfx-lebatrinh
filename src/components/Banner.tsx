import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";
import { FaBicycle, FaRegClock } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import ArrowIcon from "../assets/arrow.svg";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "./ui/select";

type BannerItem = {
    imageUrl: string;
    title: string;
    description: string;
    links: [string, string];
};

const banners: BannerItem[] = [
    {
        imageUrl: "/banner/bg1.png",
        title: "Get unforgetable pleasure with us",
        description: "Explore beauty of the whole world",
        links: ["Explore Now", "Learn More"],
    },
    {
        imageUrl: "/banner/bg2.webp",
        title: "Get unforgetable pleasure with us 2",
        description: "Explore beauty of the whole world",
        links: ["Explore Now 2", "Learn More 2"],
    },
    {
        imageUrl: "/banner/bg3.webp",
        title: "Get unforgetable pleasure with us 3",
        description: "Explore beauty of the whole world",
        links: ["Explore Now 3", "Learn More 3"],
    },
];

const imgVariants: Variants = {
    initial: { opacity: 0, scale: 1.06, x: 12 },
    animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 1.02, x: -12, transition: { duration: 0.5, ease: "easeInOut" } },
};

const textParent = {
    initial: {},
    animate: { transition: { staggerChildren: 0.12 } },
    exit: {},
};

const textChild: Variants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.35, ease: "easeInOut" } },
};

export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => setCurrentIndex((i) => (i === 0 ? banners.length - 1 : i - 1));
    const nextSlide = () => setCurrentIndex((i) => (i === banners.length - 1 ? 0 : i + 1));

    return (
        <div className="relative">
            <div className="relative h-[480px] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={banners[currentIndex].imageUrl}
                        src={banners[currentIndex].imageUrl}
                        alt={`Banner ${currentIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover will-change-transform"
                        variants={imgVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />
                </AnimatePresence>

                <div className="absolute inset-0 bg-black/50" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={banners[currentIndex].title}
                        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 text-white w-11/12 sm:w-2/3 lg:w-1/3"
                        variants={textParent}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <motion.h4 className="text-3xl mb-1 font-montez" variants={textChild}>
                            {banners[currentIndex].title}
                        </motion.h4>

                        <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8" variants={textChild}>
                            {banners[currentIndex].description}
                        </motion.h2>

                        <motion.div className="flex gap-3" variants={textChild}>
                            <button
                                className="px-6 py-2 bg-[#1CA8CB] text-white rounded-full transition
                           hover:shadow-lg hover:-translate-y-0.5 hover:scale-105
                           active:translate-y-0 active:scale-95"
                            >
                                {banners[currentIndex].links[0]}
                            </button>
                            <button className="glass-button px-6 py-2 rounded-full">{banners[currentIndex].links[1]}</button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 flex flex-col items-center space-y-4">
                <button onClick={prevSlide} aria-label="Previous" className="text-white glass-button p-2 rounded-full">
                    <img src={ArrowIcon} alt="prev" className="w-4 h-4 -rotate-90" />
                </button>

                <div className="flex flex-col items-center gap-2">
                    {banners.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Go to ${i + 1}`}
                            className={`h-6 w-1 cursor-pointer rounded-full transition-all ${currentIndex === i ? "bg-[#1CA8CB]" : "bg-white/90 hover:bg-white"
                                }`}
                        />
                    ))}
                </div>

                <button onClick={nextSlide} aria-label="Next" className="text-white glass-button p-2 rounded-full">
                    <img src={ArrowIcon} alt="next" className="w-4 h-4 rotate-90" />
                </button>
            </div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-11/12 md:w-2/3">
                <div className="h-14 border border-[#1CA8CB] bg-white rounded-2xl flex items-center p-3 md:px-4 py-8 justify-between shadow-lg">
                    <Select defaultValue="hoi-an">
                        <SelectTrigger className="rounded-2xl shadow-none px-4 gap-2">
                            <HiOutlineLocationMarker color="#1CA8CB" />
                            <span>Destination</span>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="hoi-an">Hội An</SelectItem>
                                <SelectItem value="da-nang">Đà Nẵng</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div className="h-6 w-px bg-gray-300" />

                    <Select defaultValue="bike">
                        <SelectTrigger className="rounded-2xl shadow-none px-4 gap-2">
                            <FaBicycle color="#1CA8CB" />
                            <span>Activity</span>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="bike">Cycling</SelectItem>
                                <SelectItem value="walk">Walking</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div className="h-6 w-px bg-gray-300" />

                    <Select defaultValue="0-6">
                        <SelectTrigger className="rounded-2xl shadow-none px-4 gap-2">
                            <FaRegClock color="#1CA8CB" />
                            <span>Durations</span>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="0-6">0 Days - 6 Days</SelectItem>
                                <SelectItem value="6-12">6 Days - 12 Days</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div className="h-6 w-px bg-gray-300" />

                    <Select defaultValue="200-580">
                        <SelectTrigger className="rounded-2xl shadow-none px-4 gap-2">
                            <RiMoneyDollarCircleLine color="#1CA8CB" />
                            <span>$200 - $580</span>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="200-580">$200 - $580</SelectItem>
                                <SelectItem value="580-1000">$580 - $1000</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div className="h-6 w-px bg-gray-300" />

                    <Button className="bg-[#1CA8CB] px-6 md:px-8 py-5 rounded-full hover:bg-[#1CA8CB]/90 cursor-pointer">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};

