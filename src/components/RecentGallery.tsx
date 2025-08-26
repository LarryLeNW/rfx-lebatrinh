export default function RecentGallery() {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/recent-gallery/bg.png')] relative">
            <div className="absolute top-56 left-8 space-y-4 w-14 h-14">
                <img src="/recent-gallery/item.png" alt="decor" className=" object-cover" />
            </div>
            <div className="text-[#113D48] text-center pt-5 mb-12">
                <p className="text-[2rem] mb-2 font-montez">Make Your Tour More Pleasure</p>
                <h2 className="text-4xl font-bold">Recent Gallery</h2>
            </div>
            <div className="flex justify-center items-center gap-2 h-[460px]">
                <div className="w-60 h-[225px] rounded-2xl overflow-hidden cursor-pointer">
                    <img
                        src="/recent-gallery/1.jpg"
                        alt="main"
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className="w-60 h-[225px] rounded-2xl overflow-hidden cursor-pointer">
                        <img
                            src="/recent-gallery/2.jpg"
                            alt="main"
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                    </div>
                    <div className="w-60 h-[225px] rounded-2xl overflow-hidden cursor-pointer">
                        <img
                            src="/recent-gallery/3.jpg"
                            alt="main"
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                    </div>
                </div>
                <div className="w-60 h-full rounded-2xl overflow-hidden cursor-pointer">
                    <img
                        src="/recent-gallery/main.jpg"
                        alt="main"
                        className="w-full h-full rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                </div>
                <div className="flex flex-col gap-2 justify-between h-full">
                    <div className="w-60 h-[225px] rounded-2xl overflow-hidden cursor-pointer">
                        <img
                            src="/recent-gallery/4.jpg"
                            alt="main"
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                    </div>
                    <div className="w-60 h-[225px] rounded-2xl overflow-hidden cursor-pointer">
                        <img
                            src="/recent-gallery/5.jpg"
                            alt="main"
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                    </div>
                </div>
                <div className="w-60 h-[225px] rounded-2xl overflow-hidden cursor-pointer">
                    <img
                        src="/recent-gallery/6.jpg"
                        alt="main"
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
}

