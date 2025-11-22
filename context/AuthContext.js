"use client";
import { useRouter } from "next/navigation";
// contexts/AuthContext.js
import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check if the user is logged in
  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/auth/user", {
        method: "GET",
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        toast.error(data.msg);
        router.push("/login");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const [checkAuth, setCheckAuth] = useState(true);

  // Fetch user data on initial load
  useEffect(() => {
    if (checkAuth) {
      setCheckAuth(false);
      fetchUserData();
    }
  }, [checkAuth]);

  return (
    <AuthContext.Provider value={{ user, authLoading:loading, isAuthenticated, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
