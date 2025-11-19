import AboutUs from "@/components/about";
import WhyChooseUs from "@/components/chooseUs";
import ServiceCountryFilter from "@/components/filter";
import Footer from "@/components/footer";
import QuickServices from "@/components/quickServices";
import RecentOffers from "@/components/recentOffers";
import ScholarshipBanner from "@/components/ScholarshipBanner";
import SocialSidebar from "@/components/socialIconsSideBar";
import Testimonials from "@/components/testimonials";
import { TopBar } from "@/components/topBar";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faBarsStaggered, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
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

            <TopBar />

            <RecentOffers />

            <ScholarshipBanner />

            <QuickServices />

            <WhyChooseUs />

            <Testimonials />

            <section
                className="relative bg-cover bg-center bg-no-repeat text-white bg-fixed py-24 sm:px-6 px-3 md:px-12"
                style={{ backgroundImage: "url('/turkey.jpg')" }}
            >
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-[#00B4D8]/65"></div>

                <div className="relative z-10">
                    <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold">
                        Let’s make your travel and study dreams a reality.
                    </h2>
                    <p className="mb-6 font-medium text-white/90 md:text-lg text-sm leading-relaxed">
                        Whether you’re planning to study abroad, travel for leisure, or find
                        accommodation overseas,{" "}
                        <span className="font-semibold">TEAMAC</span> is here to guide you
                        every step of the way — trusted, transparent, and tailored for you.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/offers"
                        className="inline-flex items-center text-[#00B4D8] bg-white hover:bg-gray-100 focus:ring-4 focus:ring-white/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300"
                    >
                        Get Started
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" />
                    </Link>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-8">
                        <Link
                            href="tel:+905338479200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#00B4D8] transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </Link>
                        <Link
                            href="https://www.facebook.com/share/17dTdp3osn/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#00B4D8] transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link
                            href="https://www.facebook.com/share/17dTdp3osn/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#00B4D8] transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                         <Link
                         href="https://wa.me/905338479200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#00B4D8] transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </Link>
                    </div>
                </div>

            </section>

            <AboutUs />


            <Footer />
        </>
    )
}