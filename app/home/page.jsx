import ServiceCountryFilter from "@/components/filter";
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
            <div className="h-screen flex flex-col relative">


                <header className="px-12 relative z-10 flex justify-between items-center" style={{ height: '20%' }}>

                    <Image className="w-[80px] h-auto" src={'/logo.png'} width={200} height={200} alt="Logo" />

                    <nav className="text-gray-600 flex items-center gap-6 font-semibold text-sm">

                        <Link href="/">
                            HOME</Link>
                        <Link href="/">
                            ABOUT US</Link>
                        <Link href="/">
                            CONTACT US</Link>
                        <Link href="/">
                            TESTIMONIALS</Link>

                    </nav>

                    <button className="bg-[#FF6F61] rounded-md shadow-lg text-white p-3 px-6" type="button">
                        Action Button
                    </button>

                </header>

                <div className="flex flex-1 px-12 gap-4 relative" style={{ height: '80%' }}>
                    <Image src={'/dots.png'} width={1000} height={1000} alt="Dots" className="absolute bottom-0 left-0 sm:w-[700px] w-[600px] object-cover object-center" />
                    <div className="relative z-10 flex flex-col pt-6 text-gray-600 w-2/5">

                        <div><button type="button" className="bg-white rounded-full shadow-xl text-sm border border-[#00B4D8] text-[#00B4D8] px-5 py-3 my-5">
                            Book With Us!
                        </button></div>

                        <h1 className="text-3xl mb-2 text-black font-bold relative"> <span className="relative z-10">Your Trusted Partner for Travel, Study Abroad & Accommodation Solutions.</span> <span className="absolute top-5 left-20 w-60 bg-[#FF6F61] z-0 h-2"></span> </h1>
                        <p> We help students and professionals achieve their dreams abroad– from consultations to travel,
                            housing, and more. </p>

                        <div className="flex mt-5">
                            <button className="bg-[#00B4D8] w-full rounded-full shadow-lg text-white p-3 px-6 mt-5" type="button">
                                Get Started
                            </button>
                            {/* <button className="border-2 border-indigo-600 rounded-md shadow-lg text-indigo-600 p-3 px-6 mt-5 ml-3" type="button">
        Learn More
    </button> */}
                        </div>

                    </div>

                    <div className="relative w-3/5 h-full flex justify-center items-center flex-wrap">

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
                        <div className="absolute w-28 h-28 bg-[#f2f2f2] rounded-full flex items-center justify-center">
                            
                        </div>

                    </div>

                </div>

            </div>

<div className="absolute bottom-0 w-full left-0">

</div>

            <div className="max-w-5xl mx-auto mt-10 px-4">
                <h2 className="text-2xl font-bold mb-4 text-[#0d4785]">
                    Find Services by Country
                </h2>
                <ServiceCountryFilter />
                {/* Search results will go here */}
            </div></>
    )
}