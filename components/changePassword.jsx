import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { toast } from "react-toastify";

export const ChangePassword = ({ setChangePassword, setFetchAdminData }) => {
    const [loading, setLoading] = useState(false);

    const [showPassword,setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (formData.newPassword !== formData.confirmPassword) {
            toast.error("New password and confirm password do not match!");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/admin", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.msg || "Password update failed");
                setLoading(false);
                return;
            }

            toast.success("Password updated successfully!");
            setFetchAdminData(true);
            setChangePassword(false);
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        }

        setLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center sm:px-4 px-3 sm:pt-12 pt-6">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-y-auto transition-all duration-300">
                
                {/* Header */}
                <div className="flex justify-between items-center md:px-6 px-3 py-4 border-b border-gray-200 sticky top-0 bg-white">
                    <h2 className="text-lg md:text-xl font-bold text-[#0d4785]">
                        Change Password
                    </h2>
                    <button
                        type="button"
                        onClick={() => setChangePassword(false)}
                        title="Close Button"
                        className="text-gray-700 py-1.5 px-2 rounded-full cursor-pointer hover:bg-red-400 hover:text-gray-50"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="md:p-6 p-3 space-y-5">
                    
                    <div className="grid grid-cols-1 gap-4">

                        {/* Current Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">
                                Current Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="currentPassword"
                                required
                                value={formData.currentPassword}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none text-black"
                                placeholder="Enter current password"
                            />
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">
                                New Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="newPassword"
                                required
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none text-black"
                                placeholder="Enter new password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#00B4D8] outline-none text-black"
                                placeholder="Confirm new password"
                            />
                        </div>

                         {/* Show Password Checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="showPasswords"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
          className="w-4 h-4 text-[#00B4D8] border-gray-300 rounded focus:ring-2 focus:ring-[#00B4D8]"
        />
        <label htmlFor="showPasswords" className="text-sm text-gray-700">
          Show passwords
        </label>
      </div>

                    </div>

                    {/* Submit */}
                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-4 bg-[#00B4D8] text-white rounded-md hover:bg-[#0092b3] transition font-medium text-sm flex items-center gap-2 disabled:opacity-30 cursor-pointer"
                        >
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
                                    Processing…
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path
                                            fillRule="evenodd"
                                            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Save Changes</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
