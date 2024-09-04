import { useState } from "react";
import PadiUmkmLogo from "../assets/padi-umkm.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = sessionStorage.getItem("login") === "true";

  const handleLogout = () => {
    sessionStorage.removeItem("login");
    window.location.reload();
  };

  return (
    <nav className="bg-gray-100 dark:bg-black">
      <div className="container mx-auto md:flex items-center py-3 px-4">
        <div className="flex justify-between">
          <div className="dark:bg-white p-2 border rounded-xl">
            <Link className="text-teal-600 font-bold" to="/">
              <img src={PadiUmkmLogo} alt="padi-umkm-logo" />
            </Link>
          </div>
          <button
            className="text-gray-600 md:hidden focus:outline-none"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto md:ml-8`}
          id="navbarNav"
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <li>
              <Link
                className="block text-gray-800 dark:text-white font-semibold hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-800 dark:text-white font-semibold hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/tentang-kami"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-800 dark:text-white font-semibold hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/bantuan"
              >
                Bantuan
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-800 dark:text-white font-semibold hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/media"
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-800 dark:text-white font-semibold hover:text-teal-600 px-4 py-2 rounded md:inline-block"
                to="/kontak"
              >
                Kontak
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <button
                  onClick={handleLogout}
                  className="block bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 transition md:inline-block"
                >
                  Logout
                </button>
              </li>
            )}
            <div className="flex items-center mt-4 md:mt-0">
              <label
                htmlFor="theme-toggle"
                className="relative inline-flex items-center cursor-pointer"
              >
                <input
                  id="theme-toggle"
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  className="sr-only"
                />
                <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <span
                  className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    isDarkMode ? "translate-x-5" : ""
                  }`}
                />
              </label>
              <span className="ml-2 text-gray-700 font-semibold dark:text-gray-300">
                {isDarkMode ? "Dark Mode" : "Light Mode"}
              </span>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
