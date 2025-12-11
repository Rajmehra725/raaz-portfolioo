
"use client";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="bg-gray-900 text-white p-5 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    &copy; {new Date().getFullYear()} Raj Mehra. All rights reserved.
  </motion.footer>
);

export default Footer;
