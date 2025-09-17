import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export const Appbar = () => {
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleLogout() {
    if (token) {
      localStorage.removeItem("token");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        window.location.href = "/";
      }, 1500);
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-100 text-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Brand */}
        <Link
          to={"/blogs"}
          className="text-2xl md:text-3xl font-extrabold tracking-tight hover:text-gray-700 transition-colors"
        >
          ByteWrite
        </Link>

        <div className="flex items-center space-x-4">
          {token ? (
            <>
              {/* Publish Button */}
              <Link to={`/publish`}>
                <button
                  type="button"
                  className="hidden sm:inline-block text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-sm px-5 py-2.5 transition"
                >
                  New
                </button>
              </Link>

              {/* Avatar Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer hover:opacity-80 transition"
                >
                  <Avatar size={"big"} name="" />
                </div>

                {open && (
                  <div className="absolute right-0 mt-3 w-44 bg-white text-gray-900 border rounded-xl shadow-lg animate-fade-in">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-t-xl"
                      onClick={() => setOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-b-xl"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Sign In / Sign Up */}
              <Link to="/signin">
                <button className="text-sm text-gray-800 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-full font-semibold transition">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="text-sm text-gray-800 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-full font-semibold transition">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out">
          Logging out...
        </div>
      )}
    </header>
  );
};
