"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hello Raj, I visited your portfolio and would like to discuss a project."
  );

  const whatsappLink = `https://wa.me/917509291446?text=${whatsappMessage}`;

  return (
    <main className="relative px-4 py-20 min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* 🌈 Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-gray-900 opacity-90"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* ✨ Glow */}
      <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>

      {/* 🔥 Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-4 text-center text-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact <span className="text-blue-400">Me</span>
      </motion.h1>

      <p className="text-white/70 mb-8 text-center max-w-xl">
        Have a project, job opportunity or collaboration in mind?
        Let’s connect and build something impactful together.
      </p>

      {/* 🧊 Card */}
      <motion.div
        className="max-w-xl w-full p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-xl border border-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Availability */}
        <span className="block mb-6 text-center text-green-400 bg-green-500/10 border border-green-500/20 rounded-full py-1 text-sm">
          ● Available for Freelance & Full-Time Opportunities
        </span>

        {/* Info */}
        <div className="space-y-4 text-white/90 text-lg">
          <p><span className="text-blue-300 font-semibold">Name:</span> Raj Mehra</p>
          <p><span className="text-blue-300 font-semibold">Phone:</span> +91 7509291446</p>
          <p>
            <span className="text-blue-300 font-semibold">Email:</span>{" "}
            nagiyaraj.725@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            India (IST Timezone)
          </p>
        </div>

        {/* 💼 Purpose Chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm">
          {["Website Development", "MERN Stack", "UI/UX", "Backend APIs", "Freelance"].map(
            (item) => (
              <span
                key={item}
                className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white/80"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* 🌐 Socials */}
        <div className="flex gap-6 mt-8 text-white text-3xl justify-center">
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Rajmehra725">
            <FaGithub />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/raj-mehra-181a80233/">
            <FaLinkedin />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/itzzzme_raazzz/">
            <FaInstagram />
          </motion.a>
        </div>

        {/* 🚀 CTA Buttons */}
        <div className="mt-8 space-y-4">
          <motion.a
            href={whatsappLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 bg-green-500 text-white py-3 px-6 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-600 transition w-full"
          >
            <FaWhatsapp size={26} />
            Message on WhatsApp
          </motion.a>

          <motion.a
            href="mailto:nagiyaraj.725@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 bg-blue-500 text-white py-3 px-6 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-600 transition w-full"
          >
            <FaEnvelope size={24} />
            Send Email
          </motion.a>
        </div>
      </motion.div>

      {/* ⬇ Scroll */}
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
