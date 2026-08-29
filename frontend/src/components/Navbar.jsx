import { useState } from "react";

import {
    FiSearch,
    FiShoppingCart,
    FiUser,
    FiMenu,
    FiX,
    FiChevronDown,
} from "react-icons/fi";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">

            {/* Main Navbar */}
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <div className="shrink-0">
                    <a
                        href="/"
                        className="text-2xl font-extrabold tracking-tight text-gray-900"
                    >
                        Shop<span className="text-blue-600">Zone</span>
                    </a>
                </div>

                {/* Search */}
                <div className="hidden flex-1 md:block">
                    <div className="mx-auto flex max-w-xl overflow-hidden rounded-full border border-gray-300 bg-gray-50 focus-within:border-blue-500 focus-within:bg-white">

                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-transparent px-5 py-3 text-sm outline-none"
                        />

                        <button className="flex items-center justify-center bg-blue-600 px-6 text-white transition hover:bg-blue-700">
                            <FiSearch size={20} />
                        </button>

                    </div>
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-5 md:flex">

                    {/* Categories */}
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-blue-600">
                        Categories
                        <FiChevronDown size={16} />
                    </button>

                    {/* Cart */}
                    <button className="relative flex items-center gap-2 text-gray-700 transition hover:text-blue-600">

                        <FiShoppingCart size={23} />

                        <span className="text-sm font-medium">
                            Cart
                        </span>

                        <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                            0
                        </span>

                    </button>

                    {/* Login */}
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-blue-600">
                        <FiUser size={20} />
                        Login
                    </button>

                    {/* Register */}
                    <button className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600">
                        Register
                    </button>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
                >
                    {mobileMenu ? (
                        <FiX size={25} />
                    ) : (
                        <FiMenu size={25} />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="border-t border-gray-200 bg-white px-4 py-5 md:hidden">

                    {/* Mobile Search */}
                    <div className="mb-5 flex overflow-hidden rounded-full border border-gray-300 bg-gray-50">

                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-transparent px-4 py-3 text-sm outline-none"
                        />

                        <button className="bg-blue-600 px-5 text-white">
                            <FiSearch size={19} />
                        </button>

                    </div>

                    {/* Mobile Links */}
                    <div className="flex flex-col gap-2">

                        {/* Categories */}
                        <button className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-100">
                            Categories
                            <FiChevronDown size={17} />
                        </button>

                        {/* Cart */}
                        <button className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100">

                            <FiShoppingCart size={20} />

                            Cart

                            <span className="ml-auto rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">
                                0
                            </span>

                        </button>

                        {/* Login */}
                        <button className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100">
                            <FiUser size={20} />
                            Login
                        </button>

                        {/* Register */}
                        <button className="mt-2 rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600">
                            Register
                        </button>

                    </div>

                </div>
            )}

        </header>
    );
};

export default Navbar;