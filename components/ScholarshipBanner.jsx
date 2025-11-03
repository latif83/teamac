"use client";

export default function ScholarshipBanner() {
  return (
    <section className="bg-[url('/scholarship-bg.jpg')] bg-fixed bg-cover bg-center text-white py-24 px-3 md:px-12 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
          Explore Global Scholarship Opportunities
        </h2>
        <p className="text-lg text-white/90 mb-6">
          Secure up to <span className="font-bold text-[#00B4D8]">60%–80%</span> 
          and even <span className="font-bold text-[#FF6F61]">100%</span> 
          scholarships in top destinations like North Cyprus, the United States, and beyond.
        </p>

        <a
          href="/offers?type=Scholarship"
          className="inline-block bg-[#00B4D8] hover:bg-[#0092b3] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
        >
          View Scholarship Offers
        </a>
      </div>
    </section>
  );
}
