"use client"
import { useSidebar } from "@/providers/sidebarProvider"
import { faServicestack } from "@fortawesome/free-brands-svg-icons"
import { faChartLine, faClipboardList, faClockRotateLeft, faCommentDots, faDashboard, faGlobe, faPlusCircle, faS, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const AdminSidebar = () => {

    const pathname = usePathname()

    const { mobileScreen, openSidebar, setOpenSidebar } = useSidebar()

    return (
        <>
            {openSidebar && <div className="bg-[#1e629a] w-[230px] shrink-0 sticky top-0 h-svh transition duration-1000">
                <div className="p-3 flex flex-col gap-2 text-gray-50 justify-center items-center border-b-2 border-dotted" >
                    <Image src={'/logo.png'} width={500} height={500} alt="Teamac LOGO" className="w-[80px] h-auto bg-white p-2 rounded-lg" />
                </div>

                <div className="flex flex-col gap-3 pl-5 py-5 mt-5 text-sm">
                    <Link onClick={()=>{mobileScreen && setOpenSidebar(false)}} className={`w-full ${pathname == "/admin" ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin'}>
                        <FontAwesomeIcon icon={faDashboard} width={20} height={20} className="text-lg" />
                        <span>Dashboard</span>
                    </Link>
                    <Link onClick={()=>{mobileScreen && setOpenSidebar(false)}} className={`w-full ${pathname == "/admin/services" ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/services'}>
                        <FontAwesomeIcon icon={faServicestack} width={20} height={20} className="text-lg" />
                        <span>Services</span>
                    </Link>
                    <Link onClick={()=>{mobileScreen && setOpenSidebar(false)}} className={`w-full ${pathname == "/admin/offers" ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/offers'}>
                        <FontAwesomeIcon icon={faClipboardList} width={20} height={20} className="text-lg" />
                        <span>Offers</span>
                    </Link>
                    <Link onClick={()=>{mobileScreen && setOpenSidebar(false)}} className={`w-full ${pathname == "/admin/history" ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/history'}>
                        <FontAwesomeIcon icon={faUsers} width={20} height={20} className="text-lg" />
                        <span>Applicants</span>
                    </Link>
                    <Link onClick={()=>{mobileScreen && setOpenSidebar(false)}} className={`w-full ${pathname == "/admin/countries" ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/countries'}>
                        <FontAwesomeIcon icon={faGlobe} width={20} height={20} className="text-lg" />
                        <span>Countries</span>
                    </Link>
                    <Link onClick={()=>{mobileScreen && setOpenSidebar(false)}} className={`w-full ${pathname == "/admin/users" ? "bg-[#f2f2f2] text-gray-800" : "text-gray-50"} rounded-l sm:p-2 p-2 py-4 flex gap-1.5 items-center hover:font-bold`} href={'/admin/users'}>
                        <FontAwesomeIcon icon={faCommentDots} width={20} height={20} className="text-lg" />
                        <span>Feedbacks</span>
                    </Link>
                </div>

                <div className="px-5 absolute bottom-2 w-full left-0">
                    <button className="bg-red-200 rounded p-2 py-4 w-full text-sm flex items-center justify-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>

                        <span>
                            Log Out
                        </span>
                    </button>
                </div>
            </div>}
        </>
    )
}