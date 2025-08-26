export default function Statistic() {
    return (
        <div className="relative pt-24 ">
            <div className="absolute top-24 left-12 space-y-4 w-30 h-30">
                <img src="/trip-plan/item.png" alt="decor" className="object-cover" />
            </div>
            <div className="absolute top-16 right-12 space-y-4 w-10 h-12">
                <img src="/statistic/item2.png" alt="decor" className="object-cover" />
            </div>
            <div className="absolute top-105 left-12 space-y-4 w-30 h-30">
                <img src="/statistic/item1.png" alt="decor" className="object-cover" />
            </div>
            <div className="flex gap-8 justify-center max-w-5xl mx-auto relative">
                <div className="relative w-[240px] h-[240px] flex items-center justify-center mt-25">
                    <div className="font-manrope  bg-[#E9F6F9] flex flex-col items-center rounded-full justify-center w-[190px] h-[190px] relative z-10">
                        <p className="text-xl font-bold">12</p>
                        <p className="text-lg font-medium">Years Experience</p>
                    </div>
                    <div className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-[url('/statistic/border.png')] flex items-center justify-center animate-spin-slow z-0"></div>
                </div>
                <div className="relative w-[240px] h-[240px] flex items-center justify-center ">
                    <div className="font-manrope  bg-[#E9F6F9] flex flex-col items-center rounded-full justify-center w-[190px] h-[190px] relative z-10">
                        <p className="text-xl font-bold">97%</p>
                        <p className="text-lg font-medium">Retention Rate</p>
                    </div>
                    <div className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-[url('/statistic/border.png')] flex items-center justify-center animate-spin-reverse-slow z-0"></div>
                </div>
                <div className="relative w-[240px] h-[240px] flex items-center justify-center mt-25">
                    <div className="font-manrope  bg-[#E9F6F9] flex flex-col items-center rounded-full justify-center w-[190px] h-[190px] relative z-10">
                        <p className="text-xl font-bold">19k</p>
                        <p className="text-lg font-medium">Happy Travelers</p>
                    </div>
                    <div className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-[url('/statistic/border.png')] flex items-center justify-center animate-spin-slow z-0"></div>
                </div>
                <div className="relative w-[240px] h-[240px] flex items-center justify-center ">
                    <div className="font-manrope  bg-[#E9F6F9] flex flex-col items-center rounded-full justify-center w-[190px] h-[190px] relative z-10">
                        <p className="text-xl font-bold">8k</p>
                        <p className="text-lg font-medium">Tours Completed</p>
                    </div>
                    <div className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-[url('/statistic/border.png')] flex items-center justify-center animate-spin-reverse-slow z-0"></div>
                </div>
            </div>
        </div>
    )
}
