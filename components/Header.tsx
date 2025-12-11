"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => (
  <header className="bg-gray-900 text-white p-5 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Raj Mehra</h1>
    <nav className="space-x-4">
      {["Home","About","Projects","Contact"].map((page) => (
        <motion.span 
          key={page} 
          whileHover={{ scale: 1.2, color: "#60A5FA" }} 
          className="cursor-pointer"
        >
          <Link href={page.toLowerCase() === "home" ? "/" : `/${page.toLowerCase()}`}>{page}</Link>
        </motion.span>
      ))}
    </nav>
  </header>
);

export default Header;
