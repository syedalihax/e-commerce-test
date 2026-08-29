import React, { useState } from "react";
import { Search, ShoppingBag, Menu, X, ChevronDown, User } from "lucide-react";

export default function GlassNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 mx-auto w-[92%] max-w-7xl rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/15">
      <div className="flex items-center justify-between gap-4">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-extrabold tracking-wide text-white">
          <span className="rounded-xl bg-white/20 p-2 backdrop-blur-sm">🛍️</span>
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            StoreGlass
          </span>
        </a>

        {/* Search Bar (Desktop) */}
        <div className="relative hidden flex-1 max-w-md md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 pl-10 text-sm text-white placeholder-white/60 outline-none backdrop-blur-sm transition-all focus:border-white/40 focus:bg-white/20 focus:ring-2 focus:ring-white/30"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 h-4 w-4" />
        </div>

        {/* Categories Dropdown (Desktop) */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition"
            >
              Categories
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`} />
            </button>

            {isCategoryOpen && (
              <div className="absolute left-0 top-full mt-3 w-48 rounded-xl border border-white/20 bg-slate-900/60 p-2 backdrop-blur-xl shadow-2xl z-50">
                <a href="#" className="block rounded-lg px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition">
                  Electronics
                </a>
                <a href="#" className="block rounded-lg px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition">
                  Fashion
                </a>
                <a href="#" className="block rounded-lg px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white transition">
                  Home & Living
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Actions (Cart & Auth) */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <a
            href="#"
            className="relative rounded-xl border border-white/10 bg-white/10 p-2.5 text-white hover:bg-white/20 transition backdrop-blur-sm"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white shadow-md">
              3
            </span>
          </a>

          {/* Login / Register Buttons */}
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="#"
              className="rounded-xl px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Login
            </a>
            <a
              href="#"
              className="rounded-xl border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-white/30 transition backdrop-blur-sm"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl border border-white/10 bg-white/10 p-2.5 text-white md:hidden hover:bg-white/20 transition"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden">
          {/* Search Bar (Mobile) */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 pl-10 text-sm text-white placeholder-white/60 outline-none backdrop-blur-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 h-4 w-4" />
          </div>

          {/* Categories Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-white/50 uppercase tracking-wider px-2">Categories</span>
            <a href="#" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">Electronics</a>
            <a href="#" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">Fashion</a>
            <a href="#" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">Home & Living</a>
          </div>

          {/* Login / Register (Mobile) */}
          <div className="flex gap-2 pt-2 border-t border-white/10">
            <a
              href="#"
              className="flex-1 text-center rounded-xl border border-white/20 bg-white/10 py-2 text-sm font-medium text-white hover:bg-white/20"
            >
              Login
            </a>
            <a
              href="#"
              className="flex-1 text-center rounded-xl border border-white/30 bg-white/20 py-2 text-sm font-medium text-white hover:bg-white/30"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}