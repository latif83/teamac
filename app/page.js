import SlidingBanner from "@/components/slidingBanner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-[#f2f2f2] flex flex-col">
        <header className="topBar bg-white flex justify-between items-center relative z-10 px-12 pt-5">
          <div className="bg-[#fff] relative">
            <Image
              src={"/logo.png"}
              className="w-[80px] h-auto relative z-10"
              width={100}
              height={100}
              alt="Logo Image"
            />
            <div className="absolute -bottom-6 border-b-3 border-[#FF6F61] bg-white z-0 -left-4 w-[110px] h-[30px] shadow-lg shadow-[#FF6F61]"></div>
          </div>
          <nav className="text-gray-500 flex gap-5 text-sm font-medium">
            <Link className="" href={"#"}>
              HOME
            </Link>

            <Link href={"#"}>ABOUT US</Link>

            <Link href={"#"}>SERVICES</Link>

            <Link href={"#"}>TESTIMONIALS</Link>
          </nav>

          <button
            type="button"
            className="text-sm px-3 py-5 rounded-lg border border-[#FF6F61] text-[#FF6F61] cursor-pointer hover:bg-[#FF6F61] hover:text-white shadow-md transition duration-1000 ease-in-out shadow-[#FF6F61] flex gap-2 items-center hover:scale-x-105"
          >
            <span>Book a Consultation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </header>

        <SlidingBanner />

        
      </div>

    </>
  );
}
