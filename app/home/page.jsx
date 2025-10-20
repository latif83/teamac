import ServiceCountryFilter from "@/components/filter";
import RecentOffers from "@/components/recentOffers";
import SocialSidebar from "@/components/socialIconsSideBar";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const handleSearch = (filters) => {
        console.log("User selected:", filters);
        // You can later call your API here
        // e.g. fetch(`/api/offers?service=${filters.service}&country=${filters.country}`)
    };
    return (
        <>
            <SocialSidebar />
            <div className="sm:h-screen flex flex-col relative">


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

                    <button className="bg-[#FF6F61] hover:bg-black cursor-pointer transition duration-2000 text-sm rounded-md shadow-lg text-white p-3 px-6 md:flex hidden items-center justify-center gap-2" type="button">
                        <span>View Offers</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>

                    <button type="button" className="md:hidden block bg-white p-4 rounded-full shadow-md">
                        <FontAwesomeIcon icon={faBarsStaggered} width={25} height={25} className="text-black text-xl m-0 p-0" />
                    </button>

                </header>

                <div className="flex flex-1 px-3 md:px-6 lg:px-12 sm:gap-4 gap-8 relative md:flex-nowrap flex-wrap md:h-8/10">
                    <Image src={'/dots.png'} width={1000} height={1000} alt="Dots" className="absolute md:bottom-0 bottom-0 top-5 left-0 sm:w-[700px] w-[600px] object-cover object-center" />
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

                <div className="absolute md:block hidden -bottom-32 w-full left-0 px-12">

                    <div className="bg-[#f2f2f2]/70 border border-[#FF6F61] w-2/3 rounded-md py-4 px-10">
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
                                <button type="button" className="bg-[#FF6F61] to-[#00B4D8] p-3 px-6 text-sm rounded-md">
                                    Search
                                </button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>

            <RecentOffers />

            <section className="bg-black py-12 px-12">

                <h1 className="text-xl font-bold text-white"> OUR SERVICES </h1>
                <div className="w-16 ml-8 relative">
                    <hr className="w-16 h-1 rounded-md mt-2 bg-linear-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
                    <span className="bg-linear-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
                </div>

                <div className="mt-5 grid md:grid-cols-3 grid-cols-1 gap-6">

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="font-bold mt-3 text-black">Study Abroad Consulting</h2>
                        <p className="text-sm text-gray-600 mt-1">Personalized guidance on university selection, application processes, and visa assistance.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="font-bold mt-3 text-black">Travel Packages</h2>
                        <p className="text-sm text-gray-600 mt-1">Customized travel itineraries, flight bookings, and accommodation arrangements.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="font-bold mt-3 text-black">Accommodation Services</h2>
                        <p className="text-sm text-gray-600 mt-1">Assistance in finding suitable housing options, from student dorms to private rentals.</p>
                    </div>
                </div>

            </section>

            <section className="px-12 py-12">

                <h1 className="text-xl font-bold"> WHY CHOOSE US? </h1>
                <div className="w-16 ml-8 relative">
                    <hr className="w-16 h-1 rounded-md mt-2 bg-linear-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
                    <span className="bg-linear-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
                </div>
                <div className="mt-5 grid md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="font-bold mt-3">Expertise & Experience</h2>
                        <p className="text-sm text-gray-600 mt-1">Years of experience in the industry with a deep understanding of global education and travel landscapes.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="font-bold mt-3">Personalized Services</h2>
                        <p className="text-sm text-gray-600 mt-1">Tailored solutions to meet individual needs and preferences.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="font-bold mt-3">Comprehensive Support</h2>
                        <p className="text-sm text-gray-600 mt-1">End-to-end assistance from initial consultation to post-arrival support.</p>
                    </div>
                </div>

            </section>

            {/* CTA Section */}
            <section className="bg-[#00B4D8] py-12 px-12 text-center text-white">
                <h1 className="text-2xl font-bold"> Ready to Explore the World with Us? </h1>
                <p className="mt-4"> Contact us today to start your journey towards studying abroad, traveling the world, or finding the perfect accommodation. </p>
                <button className="bg-white text-[#00B4D8] font-semibold rounded-full shadow-lg p-3 px-6 mt-6" type="button">
                    Contact Us
                </button>
            </section>

            {/* 
            About Us
 Company story (how you started, your vision).
 Mission Statement: “We exist to make global opportunities accessible to students and
 professionals worldwide.”
 Team Introduction (optional).
 Partner logos (universities, airlines, housing providers). section */}

            <section>
                {/* About us */}
                <div className="max-w-5xl mx-auto mt-10 px-4">
                    <h2 className="text-2xl font-bold mb-4 text-[#0d4785]">
                        About Us
                    </h2>
                    <p className="text-gray-700 mb-6">
                        At TeamAC, we are dedicated to bridging the gap between dreams and reality for students and professionals seeking opportunities abroad. Founded with a vision to simplify the complexities of international education and travel, we have grown into a trusted partner for countless individuals worldwide.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Our mission is clear: We exist to make global opportunities accessible to students and professionals worldwide. Whether it's through personalized study abroad consulting, tailored travel packages, or comprehensive accommodation services, we are committed to providing end-to-end support that ensures a seamless experience from start to finish.
                    </p>
                    <p className="text-gray-700">
                        Our team of experienced consultants and industry experts work tirelessly to understand your unique needs and aspirations. We pride ourselves on our personalized approach, ensuring that every service we offer is tailored to help you achieve your goals with confidence and ease.
                    </p>
                </div>
            </section>

            <footer className="bg-gray-800 text-white py-6 px-12 mt-10">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">&copy; 2024 TeamAC. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
                        <Link href="/" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
                        <Link href="/" className="text-gray-400 hover:text-white text-sm">Contact Us</Link>
                    </div>
                </div>
            </footer>



            {/* <div className="max-w-5xl mx-auto mt-10 px-4">
                <h2 className="text-2xl font-bold mb-4 text-[#0d4785]">
                    Find Services by Country
                </h2>
                <ServiceCountryFilter />
            </div> */}
        </>
    )
}