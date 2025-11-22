import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PrivacyPolicyPage() {

    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-800">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-12 space-y-6">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-sm text-gray-600">Last Updated: November 2025</p>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Full name, date of birth & personal identifiers.</li>
                        <li>Contact details (email, phone number, address).</li>
                        <li>Passport and travel-related information.</li>
                        <li>Academic and employment records (for visa services).</li>
                        <li>Payment information.</li>
                    </ul>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>To provide travel and visa services.</li>
                        <li>To book flights, accommodation, and tours.</li>
                        <li>To process school and work visa applications.</li>
                        <li>To communicate updates regarding your application.</li>
                        <li>To comply with legal and regulatory requirements.</li>
                    </ul>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">3. Data Protection & Security</h2>
                    <p>
                        We implement administrative and technical safeguards to secure your information against loss,
                        misuse, or unauthorized access.
                    </p>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">4. Data Sharing</h2>
                    <p>We may share your information with:</p>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Immigration authorities and embassies.</li>
                        <li>Partner schools and accommodation providers.</li>
                        <li>Airlines, tour operators, and airport transfer companies.</li>
                        <li>Authorized legal or government bodies when required by law.</li>
                    </ul>
                    <p>We do not sell personal data to third parties.</p>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">5. Consent</h2>
                    <p>By using our services, you consent to the collection and use of your information as described.</p>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">6. Your Rights</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Request access to your personal data.</li>
                        <li>Request correction or deletion where permitted.</li>
                        <li>Withdraw consent at any time.</li>
                    </ul>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">7. Contact Us</h2>
                    <p>Email: info@teamacgloballtd.com</p>
                    <p>Phone: +90 533 847 92 00</p>
                </section>
            </main>
            <Footer />
        </div>
    )

}