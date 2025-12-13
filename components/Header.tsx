"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const pages = ["Home", "About", "Projects", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center relative">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">Raj Mehra</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        {pages.map((page) => (
          <motion.span
            key={page}
            whileHover={{ scale: 1.2, color: "#60A5FA" }}
            className="cursor-pointer"
          >
            <Link
              href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
            >
              {page}
            </Link>
          </motion.span>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-6 space-y-4 md:hidden z-50"
          >
            {pages.map((page) => (
              <motion.span
                key={page}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(false)}
                className="text-lg cursor-pointer"
              >
                <Link
                  href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                >
                  {page}
                </Link>
              </motion.span>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
