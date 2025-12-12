"use client";

import ProjectCard from "../../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Raaz Universe",
    description: "A futuristic multi-feature universe website.",
    image: "https://raaz-universe.vercel.app/static/media/RaazUniverse.1dccccd885161f410ead.png",
    liveLink: "https://raaz-universe.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/raaz-universe",
  },
  {
    title: "Ajax  Form",
    description: "A complete AJAX based form system with live todos.",
    image: "/images/Ajax.png",
    liveLink: "https://ajax-form.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/Ajax-Form-",
  },
  {
    title: "Todos System",
    description: "Complete Todos management tool built with MERN.",
    image: "/images/Todos.png",
    liveLink: "https://to-do-frontend-olive.vercel.app/todos",
    githubLink: "https://github.com/Rajmehra725/ToDo-Frontend",
  },
  {
    title: "Raaz Gatex Projects",
    description: "Creative project management system.",
    image: "/images/Gatex.png",
    liveLink: "https://raazgatex.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/blogwithraaz",
  },
  {
    title: "GIAR Website",
    description: "Goldsmith Institute of Advanced Research - Full Website.",
    image: "https://raaz-universe.vercel.app/static/media/OfficialGiar.558827572cebcec31d9c.png",
    liveLink: "https://giar.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/giar",
  },
  {
    title: "Lyf",
    description: "Love Your Life Love your feelings Next.js.",
    image: "/images/Lyf.png",
    liveLink: "https://lyf-fv59.onrender.com/",
    githubLink: "https://github.com/Rajmehra725/lyf",
  },
   {
    title: "Radharani",
    description: "Radharani barsana wali using Next.js. 1",
    image: "/images/Radharani.png",
    liveLink: "https://radharani.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/Radharani",
  },
   {
    title: "Roomy",
    description: "My professional animated Apnaghar using Next.js.",
    image: "https://raaz-universe.vercel.app/static/media/Roomy.4ee493dfd8fd3c85f276.png",
    liveLink: "https://roomy-ghar.vercel.app/",
    githubLink: "https://github.com/Rajmehra725/Roomy",
  },
];

export default function Projects() {
  return (
    <main className="p-10 min-h-screen">
      <motion.h1
        className="text-5xl font-bold mb-10 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </motion.div>
    </main>
  );
}
