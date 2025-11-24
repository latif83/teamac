import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { EditAdminProfile } from "./editAdminProfile";
import { ChangePassword } from "./changePassword";

export const AdminProfile = ({ user, setViewAdminProfile }) => {

    const [editProfile, setEditProfile] = useState(false)

    const [changePassword, setChangePassword] = useState(false)

    const [adminData, setAdminData] = useState({
        name: user.name,
        email: user.email
    })

    const [fetchAdminData, setFetchAdminData] = useState(false)

    // Load current admin profile when modal opens
    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const res = await fetch("/api/admin"); // endpoint you already have
                const data = await res.json();

                if (res.ok) {
                    setAdminData({
                        name: data.admin.name,
                        email: data.admin.email,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchAdminData && fetchAdmin() && setFetchAdminData(false);
    }, [fetchAdminData]);

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center sm:px-4 sm:pt-12 pt-6">

            {editProfile && <EditAdminProfile setEditProfile={setEditProfile} setFetchAdminData={setFetchAdminData} data={adminData} />}

            {changePassword && <ChangePassword setChangePassword={setChangePassword} setFetchAdminData={setFetchAdminData} />}

            <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-y-auto h-full sm:h-auto transition-all duration-300">

                {/* Close Button */}
                <button
                    onClick={() => setViewAdminProfile(false)}
                    className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Header */}
                <div className="border-b px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-800">Admin Profile</h2>
                    <p className="text-sm text-gray-500">Manage your profile and other admins</p>
                </div>

                {/* Logged-in Admin Section */}
                <div className="px-6 py-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Details</h3>

                    <div className="bg-gray-50 border rounded-lg p-4 flex flex-col gap-2 text-sm text-black">
                        <p><span className="font-medium">Name:</span> {adminData?.name || "—"}</p>
                        <p><span className="font-medium">Email:</span> {adminData?.email || "—"}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 cursor-pointer"
                            onClick={() => setEditProfile(true)}
                        >
                            Edit Profile
                        </button>

                        <button
                            className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:opacity-90 cursor-pointer"
                            onClick={() => setChangePassword(true)}
                        >
                            Change Password
                        </button>
                    </div>
                </div>

                {/* Other Admins */}
                {/* <div className="px-6 pb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Other Admins</h3>

                    <div className="overflow-x-auto border rounded-lg">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-100 text-left text-black">
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {otherAdmins.length === 0 ? (
                                    <tr>
                                        <td colSpan={2} className="text-center py-4 text-gray-400">
                                            No other admins found
                                        </td>
                                    </tr>
                                ) : (
                                    otherAdmins.map((adm) => (
                                        <tr key={adm.id} className="border-t">
                                            <td className="px-4 py-2">{adm.name}</td>
                                            <td className="px-4 py-2">{adm.email}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div> */}

            </div>
        </div>
    );
};
