import { AdminHeader } from "@/components/adminHeader";
import { AdminSidebar } from "@/components/adminSidebar";
import { SidebarProvider } from "@/providers/sidebarProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import ProtectedRoute from "@/components/checkLogin";

export const metadata = {
  title: {
    default: "Teamac Admin Dashboard",
    template: "%s | Teamac Admin",
  },
  description:
    "Manage offers, services, countries, and scholarship listings from the Teamac Admin Dashboard. Empowering administrators to streamline global travel and study operations.",
  keywords: [
    "Teamac Admin",
    "Dashboard",
    "Offers Management",
    "Travel Agency Admin",
    "Education Agency CMS",
    "Teamac Management Panel",
  ],
  authors: [{ name: "Teamac Admin" }],
  creator: "Teamac Global",
  metadataBase: new URL("https://teamac.com"), // update with your live URL

  openGraph: {
    title: "Teamac Admin Dashboard",
    description:
      "Efficiently manage study abroad offers, travel packages, and client requests in the Teamac Admin Panel.",
    url: "https://teamac.com/admin",
    siteName: "Teamac Admin",
    type: "website",
    images: [
      {
        url: "/logo.png", // place in /public/meta/
        width: 1200,
        height: 630,
        alt: "Teamac Admin Dashboard Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Teamac Admin Dashboard",
    description:
      "Teamac Admin Panel — manage offers, services, and global opportunities efficiently.",
    images: ["/meta/og-admin.jpg"],
  },

  robots: {
    index: false, // prevent Google from indexing admin routes
    follow: false,
  },
};


export default function RootLayout({ children }) {

    return (
        // <ProtectedRoute>
        <SidebarProvider>
            <div className="flex h-svh gap-1.5 w-full relative overflow-hidden">

                <AdminSidebar />

                <div className="sm:flex-1 w-full shrink-0 relative flex flex-col h-svh">
                    <AdminHeader />
                    <div className="overflow-y-auto flex-1">
                        {children}
                    </div>
                </div>

            </div>
        </SidebarProvider>
        // </ProtectedRoute>
    )
}