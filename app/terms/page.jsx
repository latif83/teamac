import Footer from "@/components/footer";
import Header from "@/components/header";

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-800">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-12 space-y-6">
                <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
                <p className="text-sm text-gray-600">Effective Date: November 2025</p>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">1. Scope of Services</h2>
                    <p>
                        TEAMAC GLOBAL LTD offers travel bookings, visa advisory services, study/work migration solutions,
                        tour experiences, and logistical support such as accommodation and airport pickup.
                    </p>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">2. Limitation of Liability</h2>
                    <p>
                        We act as facilitators, not decision-makers. Visa approvals are at the sole discretion of
                        immigration authorities, and we are not liable for delays or decisions beyond our control.
                    </p>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">3. Client Responsibilities</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Provide accurate and complete information.</li>
                        <li>Submit required documents on time.</li>
                        <li>Pay service fees as agreed.</li>
                        <li>Comply with immigration laws of destination countries.</li>
                    </ul>
                    <p>
                        We are not responsible for losses resulting from false or incomplete information provided by the
                        client.
                    </p>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">4. Payments & Refunds</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Service fees are non-refundable once processing begins.</li>
                        <li>Third-party fees follow their own refund policies.</li>
                        <li>All payments must be confirmed before services are executed.</li>
                    </ul>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">5. Changes or Cancellation of Services</h2>
                    <p>
                        Changes may incur additional costs and are subject to availability. Cancellations follow supplier
                        policies.
                    </p>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
                    <p>
                        All company materials remain the property of TEAMAC GLOBAL LTD and may not be copied or
                        redistributed without permission.
                    </p>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">7. Governing Law</h2>
                    <p>All transactions are governed by the laws of the operating jurisdiction of TEAMAC GLOBAL LTD.</p>
                </section>


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">8. Contact Information</h2>
                    <p>Email: info@teamacgloballtd.com</p>
                    <p>Phone: +90 533 847 92 00</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}