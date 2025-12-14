"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaServer,
  FaRocket,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiBootstrap,
} from "react-icons/si";
import Link from "next/link";

export default function About() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">

      {/* 🌈 Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-gray-900 opacity-90"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* ✨ Glow */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
      <div className="absolute w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>

      {/* 🧊 Main Card */}
      <motion.div
        className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 sm:p-12 border border-white/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          About Me
        </h1>

        <p className="text-center text-blue-400 mb-8">
          Turning ideas into scalable & elegant web solutions 🚀
        </p>

        {/* Intro */}
        <p className="text-lg text-gray-200 mb-4 leading-relaxed">
          I'm <span className="text-blue-400 font-semibold">Raj Mehra</span>, a
          MERN Stack Developer & Software Engineer passionate about building fast,
          scalable and user-centric web applications. I focus on writing clean,
          maintainable code while delivering visually appealing interfaces.
        </p>

        <p className="text-lg text-gray-200 mb-4 leading-relaxed">
          From frontend interactions to backend architecture, I enjoy solving
          real-world problems using modern JavaScript frameworks and best
          development practices.
        </p>

        <p className="text-lg text-gray-200 leading-relaxed">
          My core expertise includes React, Next.js, Node.js, Express, MongoDB,
          TailwindCSS and REST API development.
        </p>

        {/* 📊 Experience Timeline */}
        <h2 className="text-2xl text-white font-semibold mt-10 mb-4">
          Experience & Journey
        </h2>

        <ul className="space-y-4 text-gray-200">
          <li className="border-l-2 border-blue-400 pl-4">
            <span className="text-blue-400 font-medium">2024 – Present:</span>{" "}
            Building full-stack MERN applications & freelance projects
          </li>
          <li className="border-l-2 border-blue-400 pl-4">
            <span className="text-blue-400 font-medium">2023:</span> Advanced
            React, backend APIs & performance optimization
          </li>
          <li className="border-l-2 border-blue-400 pl-4">
            <span className="text-blue-400 font-medium">2022:</span> Programming
            foundation with C, C++ & JavaScript
          </li>
        </ul>

        {/* 🛠 Skills */}
        <h2 className="text-2xl text-white font-semibold mt-10 mb-6">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-white text-center">
          {[ 
            { icon: <SiC size={40} />, label: "C" },
            { icon: <SiCplusplus size={40} />, label: "C++" },
            { icon: <FaReact size={40} className="text-blue-400" />, label: "React" },
            { icon: <SiNextdotjs size={40} />, label: "Next.js" },
            { icon: <FaNodeJs size={40} className="text-green-400" />, label: "Node.js" },
            { icon: <SiExpress size={40} />, label: "Express" },
            { icon: <SiMongodb size={40} className="text-green-500" />, label: "MongoDB" },
            { icon: <SiTailwindcss size={40} className="text-blue-300" />, label: "Tailwind" },
            { icon: <SiBootstrap size={40} className="text-purple-500" />, label: "Bootstrap" },
          ].map((skill) => (
            <motion.div
              key={skill.label}
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center gap-1"
            >
              {skill.icon}
              <p>{skill.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 💼 What I Do */}
        <h2 className="text-2xl text-white font-semibold mt-12 mb-6">
          What I Do
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 text-gray-200">
          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <FaLaptopCode className="text-blue-400 text-2xl mb-2" />
            <h3 className="font-semibold mb-1">Frontend Development</h3>
            <p className="text-sm">
              Clean, responsive & animated UI using React, Next.js & Tailwind
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <FaServer className="text-blue-400 text-2xl mb-2" />
            <h3 className="font-semibold mb-1">Backend Development</h3>
            <p className="text-sm">
              Secure APIs, authentication & databases using Node & MongoDB
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <FaRocket className="text-blue-400 text-2xl mb-2" />
            <h3 className="font-semibold mb-1">Performance & Growth</h3>
            <p className="text-sm">
              SEO, optimization & scalable architecture
            </p>
          </div>
        </div>

        {/* 🎯 CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-500 px-8 py-3 rounded-lg text-white font-medium hover:bg-blue-600 transition"
          >
            Let’s Work Together
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
