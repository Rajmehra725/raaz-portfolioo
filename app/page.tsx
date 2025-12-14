"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Profile from "@/app/profile.webp";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">

      {/* 🌈 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-gray-900 opacity-90"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* ✨ Floating Glows */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* ✅ Availability Badge */}
      <motion.span
        className="mb-4 inline-block px-4 py-1 text-sm rounded-full bg-green-500/20 text-green-400 border border-green-500/30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ● Available for Freelance & Full-Time
      </motion.span>

      {/* 🖼 Profile */}
      <motion.img
        src={Profile.src}
        alt="Raj Mehra"
        className="w-36 sm:w-40 h-36 sm:h-40 rounded-full border-4 border-blue-400 shadow-xl mb-6 object-cover"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* 👋 Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-white mb-3"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm <span className="text-blue-400">Raj Mehra</span>
      </motion.h1>

      {/* ⌨ Typewriter */}
      <motion.p className="text-lg sm:text-xl text-gray-200 mb-6">
        <Typewriter
          words={[
            "MERN Stack Developer",
            "Software Engineer",
            "Backend Developer",
            "Full Stack Web Developer",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* 🧠 Tech Stack */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-6 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {["React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind"].map(
          (skill) => (
            <span
              key={skill}
              className="px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white/80"
            >
              {skill}
            </span>
          )
        )}
      </motion.div>

      {/* 📊 Stats */}
      <motion.div
        className="grid grid-cols-3 gap-6 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <h3 className="text-2xl font-bold text-blue-400">20+</h3>
          <p className="text-sm text-white/70">Projects</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-400">1.5+</h3>
          <p className="text-sm text-white/70">Years Exp.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-400">10+</h3>
          <p className="text-sm text-white/70">Clients</p>
        </div>
      </motion.div>

      {/* 🔗 Social Icons */}
      <div className="flex gap-6 text-white text-2xl mb-8">
        <motion.a whileHover={{ scale: 1.3 }} href="https://github.com/Rajmehra725">
          <FaGithub />
        </motion.a>
        <motion.a whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/in/raj-mehra-181a80233/">
          <FaLinkedin />
        </motion.a>
        <motion.a whileHover={{ scale: 1.3 }} href="https://www.instagram.com/itzzzme_raazzz/">
          <FaInstagram />
        </motion.a>
      </div>

      {/* 🎯 CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="bg-blue-500 px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-600 transition"
        >
          View My Projects
        </Link>

        <Link
          href="/resume.pdf"
          target="_blank"
          download
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Download Resume
        </Link>
      </div>

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
