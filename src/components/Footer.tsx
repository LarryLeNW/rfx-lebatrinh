import { Facebook, Twitter, Linkedin, Youtube, Instagram, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { LuMail } from 'react-icons/lu';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-16 ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mx-58 pb-8  border-b border-gray-200">
                <div>
                    <h2 className="text-3xl font-bold text-[#113D48] mb-2 pr-12">Get Updated The Latest Newsletter</h2>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <Input type="email" placeholder="Enter your Email" className="flex-1 md:w-80 bg-white border-gray-500 h-12 rounded-3xl" />
                    <Button className="bg-[#113D48] text-white h-12 rounded-3xl cursor-pointer hover:bg-[#113D48]/90 flex items-center">
                        <span>Subscribe Now</span>
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className=" mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-58 mb-12 ">
                    <div className="space-y-4 ">
                        <div className="flex items-center gap-2">
                            <img src="/footer/logo.png" alt="logo-footer" className="w-48 h-14" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive
                            infrastructures
                        </p>
                        <div className="flex gap-3">
                            <div className='border border-[#1CA8CB] p-2 text-xs rounded-full cursor-pointer hover:opacity-80'>
                                <FaFacebookF color='#1CA8CB' ></FaFacebookF>
                            </div>
                            <div className='border border-[#1CA8CB] p-2 text-xs rounded-full cursor-pointer hover:opacity-80'>
                                <FaTwitter color='#1CA8CB' ></FaTwitter>
                            </div>
                            <div className='border border-[#1CA8CB] p-2 text-xs rounded-full cursor-pointer hover:opacity-80'>
                                <FaInstagram color='#1CA8CB' ></FaInstagram>
                            </div>
                            <div className='border border-[#1CA8CB] p-2 text-xs rounded-full cursor-pointer hover:opacity-80'>
                                <FaYoutube color='#1CA8CB' ></FaYoutube>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pl-16 ">
                        <h3 className="text-xl font-semibold text-[#113D48]">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors flex items-center gap-2 ">
                                    <MdKeyboardArrowRight />
                                    <span> Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors flex items-center gap-2 ">
                                    <MdKeyboardArrowRight />
                                    <span> About Us</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors flex items-center gap-2 ">
                                    <MdKeyboardArrowRight />
                                    <span> Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors flex items-center gap-2 ">
                                    <MdKeyboardArrowRight />
                                    <span> Tour Guide</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors flex items-center gap-2 ">
                                    <MdKeyboardArrowRight />
                                    <span> Contact Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 ">
                        <h3 className="text-xl font-semibold text-[#113D48]">Get In Touch</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#E9F6F9] w-9 h-9  rounded-full flex items-center justify-center mt-0.5">
                                    <FiPhoneCall color="#1CA8CB" />
                                </div>
                                <div className="text-sm text-gray-500">
                                    <p>+01 234 567 890</p>
                                    <p>+09 999 999 999</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-[#E9F6F9] w-9 h-9  rounded-full flex items-center justify-center mt-0.5">
                                    <LuMail color="#1CA8CB" />
                                </div>
                                <div className="text-sm text-gray-500">
                                    <p>mail00@tours.com</p>
                                    <p>support24@tours.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-[#E9F6F9] w-9 h-9  rounded-full flex items-center justify-center mt-0.5">
                                    <HiOutlineLocationMarker color="#1CA8CB" />
                                </div>
                                <div className="text-sm text-gray-500">
                                    <p>789 Inner Lane, Holy park,</p>
                                    <p>California, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 ">
                        <h3 className="text-xl font-semibold text-[#113D48]">Instagram Post</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <img
                                src="/destination/bali-indonesia-temple-rice-terraces.png"
                                alt="Travel destination"
                                className="w-full h-16 object-cover rounded-lg cursor-pointer"
                            />
                            <img
                                src="\destination\philippines-tropical-island-lagoon.png"
                                alt="Travel destination"
                                className="w-full h-16 object-cover rounded-lg cursor-pointer"
                            />
                            <img
                                src="/destination/greece-santorini-white-buildings-blue-sea.png"
                                alt="Travel destination"
                                className="w-full h-16 object-cover rounded-lg cursor-pointer"
                            />
                            <img
                                src="\destination\iceland-northern-lights-glaciers-waterfalls.png"
                                alt="Travel destination"
                                className="w-full h-16 object-cover rounded-lg cursor-pointer"
                            />
                            <img
                                src="\destination\maldives-tropical-resort-overwater-bungalows.png"
                                alt="Travel destination"
                                className="w-full h-16 object-cover rounded-lg cursor-pointer"
                            />
                            <img
                                src="\destination\philippines-tropical-island-lagoon.png"
                                alt="Travel destination"
                                className="w-full h-16 object-cover rounded-lg cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-16 bg-cover bg-center bg-no-repeat bg-[url('/footer/end.png')] flex flex-col px-58 text-white ">
                    <div className="flex items-center justify-between gap-4 h-full  ">
                        <p className="text-sm ">Copyright by "Lê Bá Trình" - All Rights Reserved.</p>
                        <div className="flex items-center gap-4 justify-between">
                            <span className="text-base">We Accept</span>
                            <div className=" w-52 h-7">
                                <img src="/footer/cards.png" alt="cards" className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
