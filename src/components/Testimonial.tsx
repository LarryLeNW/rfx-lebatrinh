import { Star } from "lucide-react"
import * as React from "react"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"

type Testi = {
    name: string
    role: string
    avatar: string
    rating: number
    quote: string
}

export default function Testimonial() {
    const items: Testi[] = [
        {
            name: "Angelina Rose",
            role: "Traveller",
            avatar: "/testimonial/client1.png",
            rating: 5,
            quote:
                "Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid. High-performance insulation and triple-glazed…",
        },
        {
            name: "Andrew Simon",
            role: "Traveller",
            avatar: "/testimonial/client2.png",
            rating: 5,
            quote:
                "A home that perfectly blends sustainability with luxury. The moment I stepped into the community, I knew it was where I wanted to live.",
        },
        {
            name: "Maria Doe",
            role: "Traveller",
            avatar: "/testimonial/client3.png",
            rating: 5,
            quote:
                "The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors.",
        },
        {
            name: "Jacob Jones",
            role: "Traveller",
            avatar: "/guide/avatar4.png",
            rating: 5,
            quote:
                "Smart systems quietly manage air quality, temperature, and lighting for effortless comfort all day long.",
        },
        {
            name: "Jenny Wilson",
            role: "Traveller",
            avatar: "/guide/avatar3.png",
            rating: 5,
            quote:
                "Green spaces and walkable paths make daily life calm and connected. Highly recommend!",
        },
        {
            name: "Guy Hawkins",
            role: "Traveller",
            avatar: "/guide/avatar2.png",
            rating: 5,
            quote:
                "Design principles executed beautifully — efficient, elegant, and human-centered.",
        },
    ]

    const [api, setApi] = React.useState<any>(null)
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return
        const onSelect = () => setCurrent(api.selectedScrollSnap())
        onSelect()
        api.on("select", onSelect)
        return () => api.off("select", onSelect)
    }, [api])

    return (
        <div className="relative pt-24 ">
            <div className="absolute top-56 left-16 space-y-4 w-14 h-14 ">
                <img src="/recent-gallery/item.png" className="object-cover scale-x-[-1]" />
            </div>
            <div className="mx-auto  bg-cover bg-center bg-no-repeat bg-[url('/testimonial/bg.png')] ">
                <div className="text-[#113D48] text-center">
                    <p className="text-[2rem] font-montez">Testimonial</p>
                    <h2 className="text-4xl font-bold mb-10">What Client Say About us</h2>
                </div>
                <Carousel
                    opts={{ loop: true, align: "start" }}
                    setApi={setApi}
                    className="w-full h-56"
                >
                    <CarouselContent className="-mx-12 h-72 ">
                        {items.map((it, idx) => {
                            const active = idx % 2 != 0
                            return (
                                <CarouselItem key={idx} className={`pl-6 md:basis-1/2 lg:basis-1/3 ${!active && "mt-14"}`}>
                                    <div
                                        className=
                                        "relative overflow-visible rounded-3xl p-6 md:p-7 transition-all duration-300 bg-[#EAF7FB] h-48 "
                                    >
                                        <div className="flex items-start justify-between ">
                                            <div className="flex items-center gap-2">
                                                <div className="w-12 h-12 rounded-full  overflow-hidden shadow-md">
                                                    <img
                                                        src={it.avatar}
                                                        alt={it.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="font-semibold text-[#113D48]">{it.name}</h3>
                                                    <p className="text-xs text-gray-500">{it.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-0.5 mt-2">
                                                {Array.from({ length: it.rating }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-3 w-3 text-[#F59E0B] fill-[#F59E0B]"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-base font-medium leading-6 text-gray-700">
                                            “{it.quote}”
                                        </p>

                                        <div className={`flex items-center justify-center w-10 h-10 absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full  text-sm font-semibold `}>
                                            <img src={active ? "./testimonial/quote.png" : "./testimonial/quote2.png"} />
                                        </div>

                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                </Carousel>

                <div className="flex justify-center gap-2 py-16 z-2">
                    {items.map((_, i) => (

                        <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            className={`h-3 w-3 rounded-full transition-all cursor-pointer
                  ${i === current ? "bg-teal-600 scale-110 shadow" : "border border-gray-400  hover:bg-gray-400"}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div >
    )
}
