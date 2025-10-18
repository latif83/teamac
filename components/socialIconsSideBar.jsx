"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneAlt,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialSidebar = () => {
    return (
        <div className="fixed top-1/2 right-0 bg-[#00B4D8] pl-3 pr-1 py-4 rounded-l-xl transform -translate-y-1/2 z-50 md:flex hidden flex-col gap-6 text-lg">
            {/* Call */}
            <Link
                href="tel:+905338479200"
                className="text-white hover:translate-x-[-6px] transition-all duration-300 flex items-center justify-center"
                title="Call Us"
            >
                <FontAwesomeIcon icon={faPhoneAlt} width={25} height={25} />
            </Link>

            {/* Facebook */}
            <Link
                href="https://www.facebook.com/teamacglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:translate-x-[-6px] transition-all duration-300 flex items-center justify-center"
                title="Facebook"
            >
                <FontAwesomeIcon icon={faFacebookF} width={25} height={25} />
            </Link>

            {/* Instagram */}

            <Link
                href="https://www.instagram.com/teamacglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:translate-x-[-6px] transition-all duration-300 flex items-center justify-center"
                title="Instagram"
            >
                <FontAwesomeIcon icon={faInstagram} width={25} height={25} />
            </Link>

            {/* LinkedIn */}
            <Link
                href="https://www.linkedin.com/company/teamacglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:translate-x-[-6px] transition-all duration-300 flex items-center justify-center"
                title="LinkedIn"
            >
                <FontAwesomeIcon icon={faLinkedinIn} width={25} height={25} />
            </Link>

            {/* WhatsApp */}
            <Link
                href="https://wa.me/905338479200"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:translate-x-[-6px] transition-all duration-300 flex items-center justify-center"
                title="WhatsApp"
            >
                <FontAwesomeIcon icon={faWhatsapp} width={25} height={25} />
            </Link>
        </div>
    );
};

export default SocialSidebar;
