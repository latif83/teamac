"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)

      const res = await fetch(`/api/auth/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (!res.ok) {
        return toast.error(data.msg)
      }

      toast.success(data.msg)
      router.push('/admin')


    }
    catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="flex h-svh flex-col justify-center px-6 py-12 bg-indigo-500 lg:px-8">


      <div className="sm:mx-auto sm:w-full sm:max-w-xl py-12 bg-white p-6 shadow-xl rounded-xl">

        <div className="">
          <div className="">
            <img src="/logo.png" alt="Teamac" className="mx-auto h-20 w-auto" />
            <div className="uppercase text-center flex flex-col items-center justify-center gap-0 w-full mt-1">
              <span className="text-[#00B4D8] font-extrabold text-xl m-0 p-0 leading-none">Teamac</span>
              <span className="text-xs text-[#FF6F61] font-semibold m-0 p-0 leading-none">
                Global LTD
              </span>
            </div>
          </div>
          <h2 className="mt-5 text-center font-bold tracking-tight text-gray-600">Sign in to your account</h2>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label for="email" className="block font-medium text-gray-600">Email address</label>
              <div className="mt-2">
                <input id="email" type="email" name="email" required autocomplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outlin`e-offset-2 focus:outline-indigo-500" placeholder="Enter your email address" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block font-medium text-gray-600">Password</label>

              </div>
              <div className="mt-2">
                <input id="password" type="password" name="password" required autocomplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" placeholder="Enter your password" value={form.password} onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} />
              </div>
            </div>

            <div>
              <button type="submit" disabled={loading} className="flex w-full justify-center gap-2 items-center rounded-md bg-indigo-500 px-3 py-4 cursor-pointer font-semibold text-white disabled:opacity-30 hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                {loading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                      ></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  <>

                    <span>
                      Sign In
                    </span></>
                )}
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-cen4 cursor-pointer text-gray-400">
      Not a member?
      <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
    </p> */}
        </div>

      </div>

    </div>

  );
}
