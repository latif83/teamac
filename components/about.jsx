"use client";

import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const partners = [
    { id: 4, name: "Airline Partner", logo: "/qatar.png" },
    { id: 1, name: "University Partner", logo: "/gau.png" },
    { id: 2, name: "Education Partner", logo: "/teknik.png" },
    { id: 3, name: "Education Partner", logo: "/lefke.png" },
    ,
  ];

  return (
    <section className="py-16 md:px-12 px-4 bg-gradient-bto- from-[#00B4D8] bg-[#FF6F61]">
      {/* Header */}
      {/* <h1 className="text-xl font-bold text-[#0d4785] text-center">ABOUT US</h1>
      <div className="w-16 mx-auto relative">
        <hr className="w-16 h-1 rounded-md mt-2 bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
        <span className="bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
      </div> */}

      {/* Company Story */}
      {/* <div className="mt-10 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 leading-relaxed text-base">
          Founded with a passion for empowering students and professionals,
          <span className="font-semibold text-[#0d4785]"> Teamac </span>
          began as a small travel and education consulting firm helping clients
          navigate the complexities of studying, working, and living abroad.
          Over the years, we’ve grown into a trusted global partner, connecting
          hundreds of individuals with opportunities across education,
          relocation, and travel sectors.
        </p>

        <p className="text-gray-700 leading-relaxed text-base mt-4">
          Our vision is to make global opportunities <span className="font-semibold">accessible and
          seamless</span> for everyone — providing personalized support at every
          stage of your journey.
        </p>
      </div> */}

      {/* Mission Statement */}
      {/* <div className="mt-16 max-w-2xl mx-auto text-center bg-white shadow-md rounded-xl py-8 px-6">
         <h2 className="text-lg font-bold text-[#0d4785]">Our Mission</h2>
        <p className="text-gray-700 italic mt-3">
          “We exist to make global opportunities accessible to students and
          professionals worldwide.”
        </p>
      </div>  */}

      {/* Optional: Team Introduction */}
      <div className="mt-0 text-center">
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
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
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
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
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
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
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
      <div className="mt-20">
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
    </section>
  );
};

export default AboutUs;
