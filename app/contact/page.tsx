"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hello Raj, I visited your portfolio and want to contact you!"
  );

  const whatsappLink = `https://wa.me/917509291446?text=${whatsappMessage}`;

  return (
    <main className="relative p-10 min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* 🌈 Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-gray-900 opacity-90"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* ✨ Neon Glow Circles */}
      <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>

      {/* 🔥 Heading */}
      <motion.h1
        className="text-5xl font-bold mb-10 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact <span className="text-blue-400">Me</span>
      </motion.h1>

      {/* 🧊 Glassmorphism Card */}
      <motion.div
        className="max-w-xl w-full p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-xl border border-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <p className="mb-4 text-lg text-white/90">
          <span className="font-bold text-blue-300">Name:</span> Raj Mehra
        </p>

        <p className="mb-4 text-lg text-white/90">
          <span className="font-bold text-blue-300">Phone:</span> 7509291446
        </p>

        <p className="mb-4 text-lg text-white/90">
          <span className="font-bold text-blue-300">Email:</span>{" "}
          nagiyaraj.725@gmail.com
        </p>

        {/* 🌐 Social Links */}
        <div className="flex gap-6 mt-6 text-white text-3xl justify-center">
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Rajmehra725">
            <FaGithub />
          </motion.a>

          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/raj-mehra-181a80233/">
            <FaLinkedin />
          </motion.a>

          <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/itzzzme_raazzz/#">
            <FaInstagram />
          </motion.a>
        </div>

        {/* 🟢 WhatsApp Direct Message */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 flex items-center justify-center gap-3 bg-green-500 text-white py-3 px-6 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-600 transition w-full"
        >
          <FaWhatsapp size={28} />
          Send Message on WhatsApp
        </motion.a>
      </motion.div>

      {/* Down Arrow Floating */}
      <motion.div
        className="mt-10 text-blue-400 text-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓
      </motion.div>
    </main>
  );
}
