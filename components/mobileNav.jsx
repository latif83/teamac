import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

export const MobileNav = ({ setViewMNav }) => {
    return (
        <div className="fixed bg-cover bg-center top-0 left-0 bg-white h-svh w-full z-50 transition-all duration-500 px-3">

            <div className="absolute top-0 left-0 w-full h-full z-10 bg-[url('/dots.png')] bg-cover bg-center opacity-30"></div>

            <div className="relative z-50">

                <div className="flex items-center py-5 justify-between">
                    <div className="flex justify-center items-center flex-col">
                        <Image src="/logo.png" alt="Teamac Logo" className="w-[70px] h-auto" width={500} height={500} />
                        <div className="uppercase text-center flex flex-col items-center justify-center gap-0 w-full mt-1">
                        <span className="text-[#00B4D8] font-extrabold text-xl m-0 p-0 leading-none">Teamac</span>
                        <span className="text-xs text-[#FF6F61] font-semibold m-0 p-0 leading-none">
                            Global LTD
                        </span>
                    </div>
                    </div>
                    <button onClick={() => { setViewMNav(false) }} type="button" className="text-red-600">
                        <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                    </button>
                </div>

                <nav className="flex flex-col mt-5 text-gray-600 items-center gap-6 font-semibold text-sm">

                    <Link href="/">
                        HOME</Link>
                    <Link href="/services">
                        OUR SERVICES</Link>
                    <Link href="/about-us">
                        ABOUT US</Link>
                    <Link href="/contact">
                        CONTACT US</Link>
                    <Link href="/testimonials">
                        TESTIMONIALS</Link>

                </nav>

                <div className="mt-5">
                     <Link href={'/offers'} className="bg-[#FF6F61] hover:bg-black cursor-pointer transition duration-2000 text-sm rounded-md shadow-lg text-white p-3 px-6 md:flex hidden items-center justify-center gap-2" type="button">
                    <span>View Offers</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </Link>
                </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full px-3 py-5 text-center flex flex-col items-center justify-center gap-2">
                <p className="text-sm">
                    &copy; 2025 All rights reserved.
                </p>
                <p className="font-bold">
                    TEAMAC Global LTD.
                </p>
            </div>

        </div>
    )
}