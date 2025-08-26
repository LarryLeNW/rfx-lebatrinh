import { Button } from "./ui/button"

export default function TripPlan() {
    return (
        <div className="relative ">
            <div className="absolute top-24 left-12 space-y-4 w-30 h-30">
                <img src="/trip-plan/item.png" alt="decor" className=" object-cover" />
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl   mx-auto relative">
                <div className="relative">
                    <img src="/trip-plan/left.png" alt="decor" className=" object-contain h-[600px]" />
                </div>

                <div className="space-y-8">
                    <div className="text-[#113D48]">
                        <p className=" mb-2 italic font-montez text-3xl">Let's Go Together</p>
                        <h1 className="text-4xl font-bold mb-4">
                            Plan Your Trip
                            <br />
                            With us
                        </h1>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            There are many variations of passages of available but the majority have suffered alteration in some
                            form, by injected humour randomised words which don't look even slightly.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-start gap-4 w-3/4">
                            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="72" height="72" rx="36" fill="#1CA8CB" />
                                    <g clip-path="url(#clip0_78_8)">
                                        <g clip-path="url(#clip1_78_8)">
                                            <path d="M44.9581 35.917C44.7012 36.1608 44.3577 36.2969 44.0002 36.2969C43.6428 36.2969 43.2993 36.1608 43.0424 35.917C40.689 33.6725 37.5354 31.165 39.0734 27.5247C39.9049 25.5564 41.901 24.2969 44.0002 24.2969C46.0994 24.2969 48.0954 25.5564 48.927 27.5247C50.463 31.1605 47.3172 33.6802 44.9581 35.917Z" stroke="white" stroke-width="1.5" />
                                            <path d="M44 29.6299H44.012" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M26.6667 50.9629C28.8759 50.9629 30.6668 49.172 30.6668 46.9629C30.6668 44.7538 28.8759 42.9629 26.6667 42.9629C24.4576 42.9629 22.6667 44.7538 22.6667 46.9629C22.6667 49.172 24.4576 50.9629 26.6667 50.9629Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M34.6667 30.9629H32.6667C30.0893 30.9629 28 32.7538 28 34.9629C28 37.1721 30.0893 38.9629 32.6667 38.9629H36.6667C39.244 38.9629 41.3333 40.7537 41.3333 42.9629C41.3333 45.1721 39.244 46.9629 36.6667 46.9629H34.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_78_8">
                                            <rect width="32" height="33" fill="white" transform="translate(20 21.1299)" />
                                        </clipPath>
                                        <clipPath id="clip1_78_8">
                                            <rect width="32" height="33" fill="white" transform="translate(20 21.1299)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Trip</h3>
                                <p className="text-gray-600">There are many variations of passages of available but the majority.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 w-3/4">
                            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="72" height="72" rx="36" fill="#1CA8CB" />
                                    <g clip-path="url(#clip0_78_16)">
                                        <g clip-path="url(#clip1_78_16)">
                                            <path d="M36.0001 50.9629L33.3334 42.9629H22.6667L25.3334 50.9629H36.0001ZM36.0001 50.9629H41.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M35.9999 38.9629V38.2962C35.9999 35.7821 35.9999 34.525 35.2188 33.744C34.4378 32.9629 33.1807 32.9629 30.6666 32.9629C28.1524 32.9629 26.8954 32.9629 26.1143 33.744C25.3333 34.525 25.3333 35.7821 25.3333 38.2962V38.9629" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M45.3333 38.9636C45.3333 40.4364 44.1395 41.6302 42.6667 41.6302C41.1939 41.6302 40 40.4364 40 38.9636C40 37.4908 41.1939 36.2969 42.6667 36.2969C44.1395 36.2969 45.3333 37.4908 45.3333 38.9636Z" stroke="white" stroke-width="1.5" />
                                            <path d="M33.3333 26.9635C33.3333 28.4363 32.1394 29.6302 30.6667 29.6302C29.1939 29.6302 28 28.4363 28 26.9635C28 25.4908 29.1939 24.2969 30.6667 24.2969C32.1394 24.2969 33.3333 25.4908 33.3333 26.9635Z" stroke="white" stroke-width="1.5" />
                                            <path d="M38.6667 44.9629H46.6667C48.1395 44.9629 49.3333 46.1568 49.3333 47.6296V48.2962C49.3333 49.769 48.1395 50.9629 46.6667 50.9629H45.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_78_16">
                                            <rect width="32" height="33" fill="white" transform="translate(20 21.1299)" />
                                        </clipPath>
                                        <clipPath id="clip1_78_16">
                                            <rect width="32" height="33" fill="white" transform="translate(20 21.1299)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Guide</h3>
                                <p className="text-gray-600">There are many variations of passages of available but the majority.</p>
                            </div>
                        </div>
                    </div>

                    <Button className="bg-[#113D48] hover:bg-[#113D48] transition-all duration-500 cursor-pointer rounded-2xl hover:pl-10 px-6 py-6  flex items-center gap-2">
                        Learn More
                        <div
                            className="
      w-4 h-4 bg-white transition-colors 
      [mask-image:url('/arrow.svg')] [mask-size:100%_100%] [mask-repeat:no-repeat] [mask-position:center]
      [-webkit-mask-image:url('/arrow.svg')] [-webkit-mask-size:100%_100%] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]
    "
                        />
                    </Button>
                </div>
                <div className="absolute top-60 right-[-10rem] space-y-4 w-36 h-36 z-1">
                    <img src="/trip-plan/people.png" alt="decor" className=" object-cover" />
                </div>
                <div className="absolute bottom-20 right-[-12rem] space-y-4 w-60 h-60 z-0 rounded-full bg-[#E9F6F9]">
                </div>
            </div>
        </div>
    )
}
