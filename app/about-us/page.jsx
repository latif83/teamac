import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative bg-[url('/bg4.jpg')] bg-cover bg-center py-12 md:px-12 px-3">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative w-full">
                    <h1 className="text-white text-xl uppercase md:text-3xl font-extrabold">
                        About Us
                    </h1>
                    <div className="w-16 relative mt-4">
                        <hr className="w-16 h-1 rounded-md bg-gradient-to-r from-[#fff] to-[#00B4D8] border-none" />
                        <span className="bg-gradient-to-r from-[#fff] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
                    </div>
                    <p className="mt-2 text-gray-200 uppercase text-sm md:text-lg mt-4">
                        Who We Are & Why We Exist
                    </p>
                </div>

            </section>

            {/* Company Story */}
            <section className="py-16 px-6 md:px-12 bg-white">
                <div className="">
                    <h2 className="md:text-xl uppercase font-bold text-[#0d4785]">
                        Our Story
                    </h2>
                    <div className="w-16 relative mt-4">
                        <hr className="w-16 h-1 rounded-md bg-gradient-to-r from-[#fff] to-[#00B4D8] border-none" />
                        <span className="bg-gradient-to-r from-[#fff] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
                    </div>
                    <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                        Teamac was founded to simplify the journey of studying, working, and
                        living abroad. We realized that thousands of students and
                        professionals dream of global opportunities but are held back by
                        complicated processes, lack of guidance, and misinformation.
                        <br /><br />
                        Our mission is simple — to provide clear, reliable, and personalized
                        support for every step of your international journey. Today, Teamac
                        proudly connects people to global education, travel, accommodation,
                        and consultation services with honesty and excellence.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-6 md:px-16 bg-[#f8f8f8]">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

                    {/* Mission */}
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#00B4D8]">
                            Our Mission
                        </h3>
                        <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
                            We exist to make global opportunities accessible to students and
                            professionals worldwide — by providing trusted guidance, verified
                            information, and seamless support.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#FF6F61]">
                            Our Vision
                        </h3>
                        <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
                            To become the number one platform for global education and travel
                            services, empowering millions to explore new horizons with confidence.
                        </p>
                    </div>
                </div>
            </section>


            {/* Optional: Team Introduction */}
            <div className="mt-5 md:px-12 px-3 text-center">
                <h2 className="text-lg font-bold text-[#0d4785]">Meet Our Team</h2>
                <p className="text-gray-700 text-sm mt-2 max-w-xl mx-auto">
                    Our dedicated team of consultants, travel experts, and global
                    education advisors work tirelessly to ensure your journey abroad is
                    smooth, informed, and successful.
                </p>

                {/* Placeholder team cards (you can replace with real team data later) */}
                <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center"
                    >
                        <div className="w-24 h-24 rounded-full border mb-4"><Image src={'/woman_avatar.png'} width={500} height={500} className="w-full h-full" alt="Avatar Image" /></div>
                        <h3 className="font-semibold text-[#0d4785]">Testimony Chukwu
                        </h3>
                        <p className="text-lg text-gray-900 font-bold">CEO</p>

                        <Link
                            href="tel:+905338479200" // Use the 'tel:' protocol for clicking to call
                            className="text-sm text-gray-600 flex items-center gap-2 hover:text-blue-600 transition" // Added hover effect for UX
                            title="Call now"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                            <span>+90533 847 92 00</span>
                        </Link>

                        <Link
                            href="mailto:testimonychukwu199@gmail.com" // Use the 'mailto:' protocol for clicking to email
                            className="text-sm text-gray-600 flex items-center gap-2 hover:text-blue-600 transition"
                            title="Send email"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <span>testimonychukwu199@gmail.com</span>
                        </Link>

                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center"
                    >
                        <div className="w-24 h-24 rounded-full border mb-4"><Image src={'/woman_avatar.png'} width={500} height={500} className="w-full h-full" alt="Avatar Image" /></div>
                        <h3 className="font-semibold text-[#0d4785]">Winifred Azuaru
                        </h3>
                        <p className="text-lg text-gray-900 font-bold">Creative Manager</p>

                        <Link
                            href="tel:+905338665214" // Use the 'tel:' protocol for clicking to call
                            className="text-sm text-gray-600 flex items-center gap-2 hover:text-blue-600 transition" // Added hover effect for UX
                            title="Call now"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                            <span>+90 533 866 5214</span>
                        </Link>

                        <Link
                            href="mailto:winifredc64@gmail.com" // Use the 'mailto:' protocol for clicking to email
                            className="text-sm text-gray-600 flex items-center gap-2 hover:text-blue-600 transition"
                            title="Send email"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <span>winifredc64@gmail.com</span>
                        </Link>

                    </div>

                    <div
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center"
                    >
                        <div className="w-24 h-24 rounded-full border mb-4"><Image src={'/woman_avatar.png'} width={500} height={500} className="w-full h-full" alt="Avatar Image" /></div>
                        <h3 className="font-semibold text-[#0d4785]">Mrs Gibson Ime
                        </h3>
                        <p className="text-lg text-gray-900 font-bold">Recruitment Consultant</p>

                        <Link
                            href="tel:+905338665214" // Use the 'tel:' protocol for clicking to call
                            className="text-sm text-gray-600 flex items-center gap-2 hover:text-blue-600 transition" // Added hover effect for UX
                            title="Call now"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                            <span>+90 533 866 5214</span>
                        </Link>

                        <Link
                            href="mailto:gibsonime@teamacgloballtd.com" // Use the 'mailto:' protocol for clicking to email
                            className="text-sm text-gray-600 flex items-center gap-2 hover:text-blue-600 transition"
                            title="Send email"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <span>gibsonime@teamacgloballtd.com</span>
                        </Link>

                    </div>

                </div>
            </div>

            {/* Partner Logos */}
            <div className="my-20 md:px-12 px-3">
                <h2 className="text-lg font-bold text-[#0d4785] text-center">
                    Our Partners
                </h2>
                <p className="text-gray-700 text-sm mt-2 text-center">
                    We collaborate with globally recognized institutions and service
                    providers to deliver trusted results.
                </p>

                <div className="mt-8 bg-white py-6 gap-10 rounded-lg items-center grid md:grid-cols-4 grid-cols-2">
                    <Image
                        src="/qatar.png"
                        alt="Qatar Airways"
                        width={1000}
                        height={1000}
                        className="w-full h-[100px] object-contain"
                    />

                    <Image
                        src="/gau.png"
                        alt="Girne American University"
                        width={1000}
                        height={1000}
                        className="w-full h-[150px] object-contain"
                    />

                    <Image
                        src="/teknik.png"
                        alt="Teknik"
                        width={1000}
                        height={1000}
                        className="w-full h-[150px] object-contain"
                    />
                    <Image
                        src="/lefke.png"
                        alt="Lefke"
                        width={1000}
                        height={1000}
                        className="w-full h-[100px] object-contain"
                    />
                </div>
            </div>

            <Footer />
        </>
    );
}
