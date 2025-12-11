"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <motion.div
      className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg p-5 hover:shadow-blue-500/40 transition-all cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden rounded-xl">
        <motion.img
          src={image}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <h2 className="text-2xl font-semibold mt-4 text-white">{title}</h2>
      <p className="text-gray-300 mt-2">{description}</p>

      <div className="flex items-center gap-5 mt-4">
        <motion.a
          href={liveLink}
          target="_blank"
          className="text-blue-400 flex items-center gap-2 hover:text-blue-300"
          whileHover={{ scale: 1.1 }}
        >
          <FiExternalLink /> Live
        </motion.a>

        <motion.a
          href={githubLink}
          target="_blank"
          className="text-gray-300 flex items-center gap-2 hover:text-white"
          whileHover={{ scale: 1.1 }}
        >
          <FiGithub /> Code
        </motion.a>
      </div>
    </motion.div>
  );
}
