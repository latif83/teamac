import { AdminHeader } from "@/components/adminHeader";
import { AdminSidebar } from "@/components/adminSidebar";
import { SidebarProvider } from "@/providers/sidebarProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import ProtectedRoute from "@/components/checkLogin";

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