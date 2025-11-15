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
                    <Image src="/logo.png" alt="Teamac Logo" className="w-[70px] h-auto" width={500} height={500} />
                    <button onClick={() => { setViewMNav(false) }} type="button" className="text-red-600">
                        <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                    </button>
                </div>

                <nav className="flex flex-col mt-5 text-gray-600 items-center gap-6 font-semibold text-sm">

                    <Link href="/">
                        HOME</Link>
                    <Link href="/our-services">
                        OUR SERVICES</Link>
                    <Link href="/about-us">
                        ABOUT US</Link>
                    <Link href="/contact-us">
                        CONTACT US</Link>
                    <Link href="/testimonials">
                        TESTIMONIALS</Link>

                </nav>

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