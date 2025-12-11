"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Profile from "@/app/profile.webp"
export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">

      {/* 🌈 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-gray-900 opacity-90"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* ✨ Floating Glow Circles */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* 🖼 Profile Image with Glow */}
      <motion.img
        src={Profile.src}
        alt="Raj Mehra"
        className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-xl mb-6 object-cover"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* 👋 Big Heading */}
      <motion.h1
        className="text-5xl font-bold text-white mb-3"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-400">Raj Mehra</span>
      </motion.h1>

      {/* ⌨ Typing Roles */}
      <motion.p
        className="text-xl text-gray-200 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Typewriter
          words={[
            "MERN Stack Developer",
            "Software Engineer",
            "Backend Developer",
            "Full Stack Web Developer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* 🔗 Social Icons */}
      <motion.div
        className="flex gap-6 text-white text-2xl mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.a whileHover={{ scale: 1.3 }} href="https://github.com/Rajmehra725">
          <FaGithub />
        </motion.a>
        <motion.a whileHover={{ scale: 1.3 }} href="https://linkedin.com">
          <FaLinkedin />
        </motion.a>
        <motion.a whileHover={{ scale: 1.3 }} href="https://instagram.com">
          <FaInstagram />
        </motion.a>
      </motion.div>

      {/* 🎯 Call To Action Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/projects"
          className="bg-blue-500 px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-600 transition"
        >
          View My Projects
        </Link>

        <Link
          href="/resume"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Download Resume
        </Link>
      </motion.div>

      {/* ⬇ Scroll Indicator */}
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
