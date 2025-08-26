import { Button } from "./ui/button"
export default function News() {
    const articles = [
        {
            id: 1,
            image: "/news/1.png",
            date: "Jul 10, 2024",
            readTime: "3 Min Read",
            title: "Enrich Your Mind Envision Your Future Education for Success",
        },
        {
            id: 2,
            image: "/news/2.png",
            date: "Jul 10, 2024",
            readTime: "3 Min Read",
            title: "Exploring The Green Spaces Of Realar Residence Harmony with",
        },
        {
            id: 3,
            image: "/news/3.png",
            date: "Jul 09, 2024",
            readTime: "3 Min Read",
            title: "Living sustainability: A day in the life atrealar residence",
        },
    ]
    return <div className="py-24 bg-[#E9F6F9]  px-52">
        <div className=" mx-auto px-6 max-w-7xl">
            <div className="mb-12 text-[#113D48]">
                <h1 className="font-serif font-montez text-[2rem]">About Us Restaurant</h1>
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-4xl font-bold mb-4">News & Articles From Tourm</h2>
                    <Button
                        variant="outline"
                        className="hidden md:flex items-center gap-2 border-slate-300 text-slate-600 hover:bg-slate-50 bg-transparent rounded-2xl cursor-pointer"
                    >
                        See More Articles
                        <div
                            className="
      w-6 h-6 bg-[#113D48] transition-colors 
      [mask-image:url('/arrow.svg')] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center]
      [-webkit-mask-image:url('/arrow.svg')] [-webkit-mask-size:100%_100%] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]
    "
                        />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className=" bg-transparent border-none shadow-none pt-0"
                    >
                        <div className="relative h-64 overflow-hidden w-full rounded-2xl">
                            <img
                                src={article.image || "/placeholder.svg"}
                                alt={article.title}
                                className="object-contain transition-transform duration-300 hover:scale-105 rounded-2xl "
                            />
                        </div>

                        <div className="py-6">
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                                <span>{article.date}</span>
                                <div className="h-2 w-[0.5px] bg-gray-400"></div>
                                <span>{article.readTime}</span>
                            </div>

                            <h3 className="text-xl font-semibold text-[#113D48] mb-6  font-manrope">
                                {article.title}
                            </h3>

                            <Button
                                className="cursor-pointer w-auto border border-[#113D48] text-[#113D48] hover:bg-slate-50 bg-transparent rounded-2xl"
                            >
                                <div>Read More</div>
                                <div
                                    className="
      w-6 h-6 bg-[#113D48] transition-colors 
      [mask-image:url('/arrow.svg')] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center]
      [-webkit-mask-image:url('/arrow.svg')] [-webkit-mask-size:100%_100%] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]
    "
                                />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    </div>
}

