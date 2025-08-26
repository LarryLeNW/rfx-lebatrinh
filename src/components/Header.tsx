import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdAccessTime } from 'react-icons/md';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import LogoBg from '../assets/imgs/bg-logo.png'
import Logo from '../assets/imgs/logo.png'
import ArrowIcon from '../assets/arrow.svg'
import { Button } from './ui/button';

export default function Header() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="text-sm flex justify-between py-2 px-20">
                <div className="flex gap-6 items-center">
                    <div className="flex gap-2 items-center">
                        <HiOutlineLocationMarker />
                        <span>
                            45 New Eskaton Road, Austria
                        </span>
                    </div>
                    <div className="h-6 w-[0.5px] bg-gray-400"></div>
                    <div className="flex gap-2 items-center">
                        <span>
                            <MdAccessTime />
                        </span>
                        <span>
                            Sun to Friday: 8.00 am - 7.00 pm, Austria
                        </span>
                    </div>
                </div>
                <div className="flex gap-8 items-center">
                    <Select>
                        <SelectTrigger className="rounded-2xl border">
                            <span className='text-black'>Language</span>
                        </SelectTrigger>
                        <SelectContent >
                            <SelectGroup>
                                <SelectItem value="vi">VI</SelectItem>
                                <SelectItem value="en">EN</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div className="font-medium">Faq</div>
                    <div className="h-6 w-[0.5px] bg-gray-300"></div>
                    <div className=" font-medium">Support</div>
                    <div className="h-6 w-[0.5px] bg-gray-300"></div>
                    <Select>
                        <SelectTrigger className="rounded-2xl border-none outline-none font-medium w-[170px] text-center shadow-none">
                            <span className='text-black'>Sign in / Register</span>
                        </SelectTrigger>
                        <SelectContent className="outline-none border-none text-center">
                            <SelectGroup>
                                <SelectItem value="Sign in">Sign in</SelectItem>
                                <SelectItem value="Register">Register</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="border-t border-gray-200 flex justify-between items-center">
                <div className='flex items-center'>
                    <div className='w-[365px]'>
                        <div className="relative ">
                            <img src={LogoBg} alt="icon" className="w-full h-auto " />
                            <img
                                src={Logo}
                                alt="icon"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[197px] h-[56px]"
                            />
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-base'>
                        <Select>
                            <SelectTrigger className="rounded-2xl border-none outline-none   text-center shadow-none">
                                <span className='text-black text-base'>Home</span>
                            </SelectTrigger>
                            <SelectContent className="outline-none border-none text-center">
                                <SelectGroup>
                                    <SelectItem value="item1">Item 1</SelectItem>
                                    <SelectItem value="item2">Item 2</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className='text-base'>About Us</div>
                        <Select>
                            <SelectTrigger className="rounded-2xl border-none outline-none   text-center shadow-none">
                                <span className='text-black text-base'>Destinations</span>
                            </SelectTrigger>
                            <SelectContent className="outline-none border-none text-center">
                                <SelectGroup>
                                    <SelectItem value="item1">Item 1</SelectItem>
                                    <SelectItem value="item2">Item 2</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className='text-base'>Services</div>
                        <Select>
                            <SelectTrigger className="rounded-2xl border-none outline-none   text-center shadow-none">
                                <span className='text-black text-base'>Trips</span>
                            </SelectTrigger>
                            <SelectContent className="outline-none border-none text-center">
                                <SelectGroup>
                                    <SelectItem value="item1">Item 1</SelectItem>
                                    <SelectItem value="item2">Item 2</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="rounded-2xl border-none outline-none   text-center shadow-none">
                                <span className='text-black text-base'>Pages</span>
                            </SelectTrigger>
                            <SelectContent className="outline-none border-none text-center">
                                <SelectGroup>
                                    <SelectItem value="item1">Item 1</SelectItem>
                                    <SelectItem value="item2">Item 2</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="rounded-2xl border-none outline-none   text-center shadow-none">
                                <span className='text-black text-base'>Blog</span>
                            </SelectTrigger>
                            <SelectContent className="outline-none border-none text-center">
                                <SelectGroup>
                                    <SelectItem value="item1">Item 1</SelectItem>
                                    <SelectItem value="item2">Item 2</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className='text-base'>Contact Us</div>
                    </div>
                </div>
                <Button className="mr-23 bg-[#113D48] rounded-2xl py-6 hover:bg-[#113D48] flex gap-2 group transition-all duration-500 cursor-pointer">
                    <div>Request a quote</div>
                    <div className="group-hover:mr-2 transition-all">
                        <img src={ArrowIcon} alt="icon" className="w-full h-auto" />
                    </div>
                </Button>
            </div>

        </div>
    );
}

