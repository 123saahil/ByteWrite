import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Appbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [open, setOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);

    function handleLogout() {
        if (token) {
            localStorage.removeItem("token");
            setShowToast(true);

            // Hide toast + navigate after delay
            setTimeout(() => {
                setShowToast(false);
                navigate("/signin");
            }, 1500);
        }
    }

    return (
        <div className="border-b flex justify-between px-10 py-4 relative">
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                ByteWrite
            </Link>
            <div className="flex items-center">
                <Link to={`/publish`}>
                    <button
                        type="button"
                        className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        New
                    </button>
                </Link>

                {/* Avatar with dropdown */}
                <div className="relative">
                    <div
                        onClick={() => setOpen(!open)}
                        className="cursor-pointer"
                    >
                        <Avatar size={"big"} name="S" />
                    </div>

                    {open && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                            <Link
                                to="/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                Profile
                            </Link>
                            <Link
                                to="/settings"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                Settings
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Toast */}
            {showToast && (
                <div className="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500">
                    Logging out…
                </div>
            )}
        </div>
    );
};
