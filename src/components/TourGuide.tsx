import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
export default function TourGuide() {
    const guides = [
        [
            { name: "Jane Cooper", title: "Tourist Guide", image: "/guide/avatar1.png" },
            { name: "Guy Hawkins", title: "Tourist Guide", image: "/guide/avatar2.png" },
            { name: "Jenny Wilson", title: "Tourist Guide", image: "/guide/avatar3.png" },
            { name: "Jacob Jones", title: "Tourist Guide", image: "/guide/avatar4.png" },
        ],
        [
            { name: "Jane Cooper 2", title: "Tourist Guide", image: "/guide/avatar1.png" },
            { name: "Guy Hawkins 2", title: "Tourist Guide", image: "/guide/avatar2.png" },
            { name: "Jenny Wilson 2", title: "Tourist Guide", image: "/guide/avatar3.png" },
            { name: "Jacob Jones 2", title: "Tourist Guide", image: "/guide/avatar4.png" },
        ],
        [
            { name: "Jane Cooper 3", title: "Tourist Guide", image: "/guide/avatar1.png" },
            { name: "Guy Hawkins 3", title: "Tourist Guide", image: "/guide/avatar2.png" },
            { name: "Jenny Wilson 3", title: "Tourist Guide", image: "/guide/avatar3.png" },
            { name: "Jacob Jones 3", title: "Tourist Guide", image: "/guide/avatar4.png" },
        ],
    ]

    return <div className="bg-cover mt-14 bg-center bg-no-repeat bg-[url('/best-recommend/bg.png')]" >
        <div className=" mx-auto px-4 pt-24">
            <div className="text-[#113D48] text-center ">
                <p className="text-[2rem] font-montez">Meet with Guide</p>
                <h2 className="text-4xl font-bold mb-10">Tour Guide</h2>
            </div>

            <div className="relative max-w-6xl mx-auto overflow-hidden">
                <input type="radio" name="slide" id="slide1" className="hidden" defaultChecked />
                <input type="radio" name="slide" id="slide2" className="hidden" />
                <input type="radio" name="slide" id="slide3" className="hidden" />

                <div className="relative w-full overflow-hidden">
                    <div className="flex w-[300%] transition-transform duration-500 ease-in-out slider-transform">
                        {guides.map((slideGuides, slideIndex) => (
                            <div key={slideIndex} className="w-1/3 px-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto pt-15">
                                    {slideGuides.map((guide, guideIndex) => (
                                        <div
                                            key={guideIndex}
                                            className="relative bg-white rounded-3xl p-2 pt-16 text-center  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-visible"
                                        >
                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-30 h-30 rounded-full ring-4 ring-white shadow-lg bg-white z-20 overflow-hidden">
                                                <img
                                                    src={guide.image || "/placeholder.svg"}
                                                    alt={guide.name}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                            <div className="bg-[#E9F6F9] py-4 rounded-2xl mt-6">
                                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{guide.name}</h3>
                                                <p className="text-sm mb-5">{guide.title}</p>
                                                <div className="flex justify-center gap-2">
                                                    <div className='border border-[#1CA8CB] p-2 rounded-full cursor-pointer hover:opacity-80'>
                                                        <FaFacebookF color='#1CA8CB' ></FaFacebookF>
                                                    </div>
                                                    <div className='border border-[#1CA8CB] p-2 rounded-full cursor-pointer hover:opacity-80'>
                                                        <FaTwitter color='#1CA8CB' ></FaTwitter>
                                                    </div>
                                                    <div className='border border-[#1CA8CB] p-2 rounded-full cursor-pointer hover:opacity-80'>
                                                        <FaInstagram color='#1CA8CB' ></FaInstagram>
                                                    </div>
                                                    <div className='border border-[#1CA8CB] p-2 rounded-full cursor-pointer hover:opacity-80'>
                                                        <FaYoutube color='#1CA8CB' ></FaYoutube>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-3 my-8">
                    <label
                        htmlFor="slide1"
                        className="w-3 h-3 rounded-full  hover:bg-gray-400 cursor-pointer transition-colors nav-dot-1 border border-gray-500"
                    ></label>
                    <label
                        htmlFor="slide2"
                        className="w-3 h-3 rounded-full  hover:bg-gray-400 cursor-pointer transition-colors nav-dot-2 border border-gray-500"
                    ></label>
                    <label
                        htmlFor="slide3"
                        className="w-3 h-3 rounded-full  hover:bg-gray-400 cursor-pointer transition-colors nav-dot-3 border border-gray-500"
                    ></label>
                </div>
            </div>
        </div>
    </div>
}


