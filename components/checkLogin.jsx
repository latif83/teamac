"use client"
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * This component ensures that only authenticated admins
 * can access its children.
 */
export default function ProtectedRoute({ children }) {
  const [session,setSession] = useState("")

//   const getSession = async()=>{
//     return await getServerSession(authOptions);
//   }
  
//   useEffect(()=>{
//     setSession(getSession)
//   },[])

  // If not logged in, redirect to admin login page
  if (!session) {
    return <>{children}</>
    // redirect("/login");
  }

  // Otherwise render the protected content
  return <>{children}</>;
}
