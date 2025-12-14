"use client";

import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Raaz Universe",
    description: "A futuristic multi-feature universe website.",
    image:
      "https://raaz-universe.vercel.app/static/media/RaazUniverse.1dccccd885161f410ead.png",
    liveLink: "https://raaz-universe.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/raaz-universe",
    category: "Next.js",
    featured: true,
  },
  {
    title: "Ajax Form",
    description: "A complete AJAX based form system with live todos.",
    image: "/images/Ajax.png",
    liveLink: "https://ajax-form.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/Ajax-Form-",
    category: "JavaScript",
  },
  {
    title: "Todos System",
    description: "Complete Todos management tool built with MERN.",
    image: "/images/Todos.png",
    liveLink: "https://to-do-frontend-olive.vercel.app/todos",
    githubLink: "https://github.com/Rajmehra725/ToDo-Frontend",
    category: "MERN",
  },
  {
    title: "Raaz Gatex",
    description: "Creative project management system.",
    image: "/images/Gatex.png",
    liveLink: "https://raazgatex.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/blogwithraaz",
    category: "Next.js",
  },
  {
    title: "GIAR Website",
    description: "Goldsmith Institute of Advanced Research official website.",
    image:
      "https://raaz-universe.vercel.app/static/media/OfficialGiar.558827572cebcec31d9c.png",
    liveLink: "https://giar.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/giar",
    category: "Next.js",
    featured: true,
  },
  {
    title: "Lyf",
    description: "Love Your Life – Next.js based lifestyle platform.",
    image: "/images/Lyf.png",
    liveLink: "https://lyf-fv59.onrender.com/",
    githubLink: "https://github.com/Rajmehra725/lyf",
    category: "Next.js",
  },
  {
    title: "Radharani",
    description: "Radharani Barsana Wali – devotional site.",
    image: "/images/Radharani.png",
    liveLink: "https://radharani.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/Radharani",
    category: "Next.js",
  },
  {
    title: "Roomy",
    description: "Animated real-estate platform built with Next.js.",
    image:
      "https://raaz-universe.vercel.app/static/media/Roomy.4ee493dfd8fd3c85f276.png",
    liveLink: "https://roomy-ghar.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/Roomy",
    category: "Next.js",
    featured: true,
  },
];

const categories = ["All", "Next.js", "MERN", "JavaScript"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="relative px-4 py-20 min-h-screen overflow-hidden">

      {/* 🌈 Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-gray-900 opacity-90"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-6 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        My Projects
      </motion.h1>

      <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
        A selection of my recent work showcasing MERN stack, Next.js,
        animations and scalable architecture.
      </p>

      {/* 🔘 Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🧱 Project Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* 🚀 CTA */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Interested in Working Together?
        </h2>
        <p className="text-white/70 mb-6">
          I’m available for freelance projects & full-time opportunities.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-500 px-8 py-3 rounded-lg text-white font-medium hover:bg-blue-600 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </main>
  );
}
