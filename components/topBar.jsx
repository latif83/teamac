"use client"
import { faBarsStaggered, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { MobileNav } from "./mobileNav"
import { useState } from "react"

export const TopBar = ()=>{

    const [viewMNav,setViewMNav] = useState(false)

    return (
         <div className="sm:h-screen flex flex-col relative">

            {viewMNav && <MobileNav setViewMNav={setViewMNav} />}

                <header className="px-3 md:px-6 md:py-0 py-4 lg:px-12 relative z-10 flex justify-between items-center md:h-2/10">

                    <Image className="md:w-[80px] w-[70px] h-auto" src={'/logo.png'} width={200} height={200} alt="Logo" />

                    <nav className="hidden md:flex text-gray-600 items-center gap-6 font-semibold text-sm">

                        <Link href="/">
                            HOME</Link>
                        <Link href="/">
                            OUR SERVICES</Link>
                        <Link href="/">
                            ABOUT US</Link>
                        <Link href="/">
                            CONTACT US</Link>
                        <Link href="/">
                            TESTIMONIALS</Link>

                    </nav>

                    <Link href={'/offers'} className="bg-[#FF6F61] hover:bg-black cursor-pointer transition duration-2000 text-sm rounded-md shadow-lg text-white p-3 px-6 md:flex hidden items-center justify-center gap-2" type="button">
                        <span>View Offers</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </Link>

                    <button onClick={()=>{setViewMNav(true)}} type="button" className="md:hidden block bg-white p-4 rounded-full shadow-md">
                        <FontAwesomeIcon icon={faBarsStaggered} width={25} height={25} className="text-black text-xl m-0 p-0" />
                    </button>

                </header>

                <div className="flex flex-1 px-3 md:px-6 lg:px-12 sm:gap-4 gap-8 relative md:flex-nowrap flex-wrap md:h-8/10">
                    <Image src={'/dots.png'} width={1000} height={1000} alt="Dots" className="absolute md:bottom-0 top-10 left-0 sm:w-[700px] w-full object-cover object-center" />
                    <div className="relative z-10 flex flex-col pt-6 text-gray-600 md:w-2/5 w-full">

                        <div><button type="button" className="bg-white rounded-full shadow-xl text-sm border border-[#00B4D8] text-[#00B4D8] px-5 py-3 my-5">
                            Book With Us!
                        </button></div>

                        <h1 className="text-3xl mb-2 text-black font-bold relative"> <span className="relative z-10">Your Trusted Partner for Travel, Study Abroad & Accommodation Solutions.</span> <span className="absolute top-5 left-20 w-60 bg-[#FF6F61] z-0 h-2"></span> </h1>
                        <p> We help students and professionals achieve their dreams abroad– from consultations to travel,
                            housing, and more. </p>

                        <div className="flex mt-5">
                            <button type="button" className="bg-linear-to-r from-[#FF6F61] to-[#00B4D8] hover:bg-linear-to-l transition duration-2000 w-full rounded-full shadow-lg text-black font-semibold p-3 px-6 mt-5 cursor-pointer">
                                Book a Consultation
                            </button>
                        </div>

                    </div>

                    <div className="relative md:w-3/5 w-full md:h-full h-[400px] flex justify-center items-center flex-wrap">

                        <div className="bg-black w-1/2 h-1/2 rounded-xl border-3 border-[#f2f2f2] overflow-hidden">
                            <Image src={'/bg.jpg'} width={500} height={500} alt="Student" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="bg-black w-1/2 h-1/2 rounded-xl border-3 border-[#f2f2f2] overflow-hidden">
                            <Image src={'/bg3.jpg'} width={500} height={500} alt="Student" className="w-full h-full object-cover object-bottom" />
                        </div>
                        <div className="bg-black w-1/2 h-1/2 rounded-xl border-3 border-[#f2f2f2] overflow-hidden">
                            <Image src={'/grad.jpg'} width={500} height={500} alt="Student" className="w-full h-full object-cover object-bottom" />
                        </div>
                        <div className="bg-black w-1/2 h-1/2 rounded-xl border-3 border-[#f2f2f2] overflow-hidden">
                            <Image src={'/work1.jpg'} width={500} height={500} alt="Student" className="w-full h-full object-cover object-center" />
                        </div>

                        {/* Center Circle */}
                        <div className="absolute md:w-32 md:h-32 w-28 h-28 rounded-full border-4 border-[#f2f2f2] shadow-[0_0_30px_rgba(255,111,97,0.4)] flex flex-col items-center justify-center text-white text-center bg-linear-to-r to-[#00B4D8] from-[#FF6F61]">
                            <h2 className="md:text-2xl text-xl font-bold leading-none">10+</h2>
                            <p className="text-xs font-medium uppercase tracking-wide mt-1">Years Of</p>
                            <p className="text-xs font-medium uppercase tracking-wide -mt-1">Experience</p>
                        </div>


                    </div>

                </div>

                <div className="md:absolute md:-bottom-32 w-full left-0 md:px-12 px-3 mt-8 md:mt-0">

                    <div className="bg-[#f2f2f2]/70 border border-[#FF6F61] md:w-2/3 w-full rounded-md py-4 md:px-10 px-3">
                        <h3 className="font-bold"> Find Available Offers. </h3>

                        <form className="mt-3">
                            <div className="flex gap-4 text-sm">
                                <div className="flex-1">
                                    <select
                                        name="service"
                                        //   value={filters.service}
                                        //   onChange={handleChange}
                                        className="mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B4D8] outline-none block w-full"
                                    >
                                        <option value="">All Services</option>
                                        <option value="study">Study Abroad</option>
                                        <option value="travel">Travel Packages</option>
                                        <option value="accommodation">Accommodation</option>
                                        <option value="consultation">Consultation</option>
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <select
                                        name="service"
                                        //   value={filters.service}
                                        //   onChange={handleChange}
                                        className="mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#00B4D8] outline-none block w-full"
                                    >
                                        <option value="">All Contries</option>
                                        <option value="study">Study Abroad</option>
                                        <option value="travel">Travel Packages</option>
                                        <option value="accommodation">Accommodation</option>
                                        <option value="consultation">Consultation</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end mt-3">
                                <button type="button" className="bg-[#FF6F61] to-[#00B4D8] p-3 px-6 text-sm rounded-md flex items-center gap-2">
                                    <FontAwesomeIcon icon={faSearch} />
                                    
                                    <span>Search</span>
                                </button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
    )
}