import React from 'react';
import { Package, Globe, Users, Clock, Zap, DollarSign, PhoneCall } from 'lucide-react';

// Define the color palette for easy access
const COLORS = {
    primary: '#00B4D8', // Aqua Blue
    secondary: '#F4E1D2', // Sand Beige
    accent: '#FF6F61',  // Coral
    textDark: '#1E293B',
};

// --- Dashboard Stat Card Component ---

const StatCard = ({ title, value, icon, iconBgClass, valueColorClass }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl transition duration-300 transform hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
                <p className={`text-4xl font-extrabold mt-1 ${valueColorClass || 'text-textDark'}`}>
                    {value}
                </p>
            </div>
            <div className={`p-3 rounded-full ${iconBgClass} bg-opacity-15`}>
                {icon}
            </div>
        </div>
    </div>
);

// --- Main Admin Dashboard Component ---

export default function AdminPage() {
    
    // Placeholder Data: In a real application, these values would be fetched 
    // from Firestore (e.g., counting documents in the 'offers' and 'appointments' collections).
    const dashboardStats = [
        {
            title: "Total Offers Created",
            value: "27", // e.g., total documents in /offers
            icon: <Package size={24} className="text-indigo-100" />,
            iconBgClass: "bg-indigo-600",
            valueColorClass: "text-indigo-600"
        },
        {
            title: "Active Public Listings",
            value: "15", // e.g., documents in /offers where isActive == true
            icon: <Globe size={24} className="text-green-100" />,
            iconBgClass: "bg-green-600",
            valueColorClass: "text-green-600"
        },
        {
            title: "Pending Applicants",
            value: "11", // e.g., documents in /offers where isActive == true
            icon: <Users size={24} className="text-red-100" />,
            iconBgClass: "bg-red-600",
            valueColorClass: "text-red-600"
        },
        {
            title: "Pending Consultations",
            value: "4", // e.g., appointments where status == 'Pending'
            icon: <Clock size={24} className="text-yellow-100" />,
            iconBgClass: "bg-yellow-600",
            valueColorClass: "text-yellow-600"
        },
        {
            title: "Service Categories",
            value: "4", // Fixed number: Travel, Study, Accommodation, Visa
            icon: <Zap size={24} className="text-purple-100" />,
            iconBgClass: "bg-purple-600",
            valueColorClass: "text-purple-600"
        },
        {
            title: "Pending Callback Requests",
            value: "7", // e.g., total callback requests received today/this week
            icon: <PhoneCall size={24} className="text-blue-100" />,
            iconBgClass: "bg-blue-600",
            valueColorClass: "text-blue-600"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-inter">
            {/* Header */}
            <header className="mb-10">
                <h1 className="text-3xl font-extrabold text-textDark mb-2">
                    Agency Dashboard
                </h1>
                <p className="text-gray-500">
                    Quick overview of your active offers, appointments, and performance metrics.
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dashboardStats.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        iconBgClass={stat.iconBgClass}
                        valueColorClass={stat.valueColorClass}
                    />
                ))}
            </div>

            {/* Recent Activity / Quick Actions Section */}
            <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Upcoming Appointments (Left - Wider Column) */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xl">
                    <h2 className="text-2xl font-bold text-textDark mb-4 border-b pb-2">
                        Upcoming Consultations
                    </h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border-l-4 border-accent">
                            <span className="font-semibold">Sarah K.</span>
                            <span className="text-gray-600">Tomorrow at 10:00 AM</span>
                            <button className="text-primary hover:underline">View</button>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border-l-4 border-primary">
                            <span className="font-semibold">John B.</span>
                            <span className="text-gray-600">Monday at 2:00 PM</span>
                            <button className="text-primary hover:underline">View</button>
                        </li>
                    </ul>
                    <div className="text-center mt-6">
                        <a href="#" className="text-sm font-semibold text-primary hover:text-accent transition">
                            View All Appointments &rarr;
                        </a>
                    </div>
                </div>

                {/* Quick Actions (Right - Single Column) */}
                <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-xl">
                    <h2 className="text-2xl font-bold text-textDark mb-4 border-b pb-2">
                        Quick Actions
                    </h2>
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-between p-3 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition duration-150">
                            Create New Offer <Package size={20} />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 bg-accent/10 text-accent rounded-lg font-semibold hover:bg-accent/20 transition duration-150">
                            Review Pending Leads <Users size={20} />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 bg-gray-200 text-textDark rounded-lg font-semibold hover:bg-gray-300 transition duration-150">
                            Check Site Traffic <Globe size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
