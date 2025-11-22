"use client";
import React, { useEffect, useState } from 'react';
import { Package, Globe, Users, Clock, Zap, DollarSign, PhoneCall } from 'lucide-react';
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';
import { UpcomingAppointments } from '@/components/upcomingAppointments';

// Define the color palette for easy access
const COLORS = {
    primary: '#00B4D8', // Aqua Blue
    secondary: '#F4E1D2', // Sand Beige
    accent: '#FF6F61',  // Coral
    textDark: '#1E293B',
};

// --- Dashboard Stat Card Component ---

const StatCard = ({ title, value, icon, iconBgClass, valueColorClass, loading }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl transition duration-300 transform hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
                <p className={`text-4xl font-extrabold mt-1 ${valueColorClass || 'text-textDark'} ${loading && 'bg-gray-200 animate-pulse w-24 h-6 rounded-lg'}`}>
                    {loading ? '' : value}
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

    const [stats, setStats] = useState(null)

    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const getStats = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/admin/stats')
            const data = await res.json()
            if (!res.ok) {
                return toast.error("Error fetching stats:", data.msg)
            }
            setStats(data.stats)
        } catch (err) {
            console.error("Failed to fetch stats:", err)
            toast.error("Failed to fetch stats!")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getStats()
    }, [])


    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-inter">
            {/* Header */}
            <header className="mb-10">
                <h1 className="md:text-3xl text-xl font-extrabold text-textDark mb-2">
                    Agency Dashboard
                </h1>
                <p className="text-gray-500 text-sm">
                    Quick overview of your active offers, appointments, and performance metrics.
                </p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    title="Total Offers Created"
                    value={stats?.offers}
                    icon={<Package size={24} className="text-indigo-100" />}
                    iconBgClass="bg-indigo-600"
                    valueColorClass="text-indigo-600"
                    loading={loading}
                />

                <StatCard
                    title="Active Public Listings"
                    value={stats?.activeOffers}
                    icon={<Globe size={24} className="text-green-100" />}
                    iconBgClass="bg-green-600"
                    valueColorClass="text-green-600"
                    loading={loading}
                />

                <StatCard
                    title="Pending Applicants"
                    value={stats?.applicants}
                    icon={<Users size={24} className="text-red-100" />}
                    iconBgClass="bg-red-600"
                    valueColorClass="text-red-600"
                    loading={loading}
                />

                <StatCard
                    title="Pending Consultations"
                    value={stats?.consultations}
                    icon={<Clock size={24} className="text-yellow-100" />}
                    iconBgClass="bg-yellow-600"
                    valueColorClass="text-yellow-600"
                    loading={loading}
                />

                <StatCard
                    title="Service Categories"
                    value={stats?.services}
                    icon={<Zap size={24} className="text-purple-100" />}
                    iconBgClass="bg-purple-600"
                    valueColorClass="purple-blue-600"
                    loading={loading}
                />

                {/* <StatCard
                    title="Pending Callback Requests"
                    value="7"
                    icon={<PhoneCall size={24} className="text-blue-100" />}
                    iconBgClass="bg-blue-600"
                    valueColorClass="text-blue-600"
                    loading={loading}
                /> */}


            </div>

            {/* Recent Activity / Quick Actions Section */}
            <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
<UpcomingAppointments />

                {/* Quick Actions (Right - Single Column) */}
                <div className="lg:col-span-1 bg-white md:p-6 p-3 rounded-xl shadow-xl">
                    <h2 className="md:text-2xl font-bold text-textDark mb-4 border-b pb-2">
                        Quick Actions
                    </h2>
                    <div className="space-y-3">
                        {/* Create New Offer — redirects with modal trigger param */}
                        <button
                            type='button'
                            onClick={() => router.push("/admin/offers?add=true")}
                            className="w-full flex items-center justify-between p-3 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary/20 transition duration-150 cursor-pointer"
                        >
                            Create New Offer <Package size={20} />
                        </button>

                        {/* Replace “Review Pending Leads” with something more relevant */}
                        <button
                            type='button'
                            onClick={() => router.push("/admin/applicants")}
                            className="w-full flex items-center justify-between p-3 bg-purple-100 text-purple-700 rounded-lg font-semibold hover:bg-purple-200 transition duration-150 cursor-pointer"
                        >
                            Manage Applicants <Users size={20} />
                        </button>

                        {/* Check Site Traffic → Google Analytics */}
                        <button
                            type='button'
                            onClick={() => window.open("https://analytics.google.com", "_blank")}
                            className="w-full flex items-center justify-between p-3 bg-gray-200 text-textDark rounded-lg font-semibold hover:bg-gray-300 transition duration-150 cursor-pointer"
                        >
                            Check Site Traffic <Globe size={20} />
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
}
