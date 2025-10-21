"use client";

import Image from "next/image";

const AboutUs = () => {
  const partners = [
    { id: 4, name: "Education Partner", logo: "/ges.png" },
    { id: 1, name: "University Partner", logo: "/newcastle.jpg" },
    { id: 2, name: "Airline Partner", logo: "/ethiopia.png" },
    { id: 3, name: "Housing Partner", logo: "/airbnb.png" },
    ,
  ];

  return (
    <section className="py-20 md:px-12 px-4 bg-gradient-to-r from-[#00B4D8]/5 via-white to-[#FF6F61]/5">
      {/* Header */}
      <h1 className="text-xl font-bold text-[#0d4785] text-center">ABOUT US</h1>
      <div className="w-16 mx-auto relative">
        <hr className="w-16 h-1 rounded-md mt-2 bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] border-none" />
        <span className="bg-gradient-to-r from-[#FF6F61] to-[#00B4D8] w-3 h-3 rounded-full absolute left-6 -top-1"></span>
      </div>

      {/* Company Story */}
      <div className="mt-10 max-w-4xl mx-auto text-center">
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
      </div>

      {/* Mission Statement */}
      <div className="mt-16 max-w-2xl mx-auto text-center bg-white shadow-md rounded-xl py-8 px-6">
        <h2 className="text-lg font-bold text-[#0d4785]">Our Mission</h2>
        <p className="text-gray-700 italic mt-3">
          “We exist to make global opportunities accessible to students and
          professionals worldwide.”
        </p>
      </div>

      {/* Optional: Team Introduction */}
      <div className="mt-20 text-center">
        <h2 className="text-lg font-bold text-[#0d4785]">Meet Our Team</h2>
        <p className="text-gray-700 text-sm mt-2 max-w-xl mx-auto">
          Our dedicated team of consultants, travel experts, and global
          education advisors work tirelessly to ensure your journey abroad is
          smooth, informed, and successful.
        </p>

        {/* Placeholder team cards (you can replace with real team data later) */}
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="font-semibold text-[#0d4785]">Team Member {id}</h3>
              <p className="text-sm text-gray-500">Consultant</p>
            </div>
          ))}
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

        <div className="mt-8 flex flex-wrap justify-center items-center gap-10">
          {partners.map((partner) => (
            <div key={partner.id} className="transition-all duration-300">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
