// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub ,} from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiC, SiCplusplus ,SiBootstrap } from "react-icons/si";

export default function About() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-10 overflow-hidden">

      {/* 🌈 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-gray-900 opacity-90"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* ✨ Soft Glow Elements */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
      <div className="absolute w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>

      {/* 🧊 Floating Card Box */}
      <motion.div
        className="max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 border border-white/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-white mb-6 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          className="text-lg text-gray-200 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I'm <span className="text-blue-400 font-semibold">Raj Mehra</span>, a MERN Stack Developer and Software Engineer who loves
          transforming ideas into interactive, high-performance web applications.
          I enjoy building clean and efficient code while focusing on user-friendly
          design and modern development practices.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          className="text-lg text-gray-200 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          My work blends creativity and logic — whether I'm designing interfaces,
          writing backend APIs, or optimizing performance. I constantly explore new
          technologies and bring the best modern tools into my development workflow.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          className="text-lg text-gray-200 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          I specialize in building scalable MERN stack applications, using tools like
          JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, and TailwindCSS.
        </motion.p>

        {/* 🚀 Skills Section */}
        <motion.h2
          className="text-2xl text-white font-semibold mt-8 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Skills & Tools
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 gap-6 text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {/* Icons with Hover Animation */}
           <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <SiC size={40}  />
            <p>C</p>
          </motion.div>
 <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <SiCplusplus size={40} />
            <p>C++</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <FaReact size={40} className="text-blue-400" />
            <p>React</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <SiNextdotjs size={40} />
            <p>Next.js</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <FaNodeJs size={40} className="text-green-400" />
            <p>Node.js</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <SiExpress size={40} />
            <p>Express.js</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <SiMongodb size={40} className="text-green-500" />
            <p>MongoDB</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <SiTailwindcss size={40} className="text-blue-300" />
            <p>TailwindCSS</p>
          </motion.div>
          
             <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <SiBootstrap size={40} className="text-purple-600" />
            <p>Bootstrap</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
