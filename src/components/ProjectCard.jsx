import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group panel overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-neon/30 hover:shadow-neon"
    >
      <Link to={`/projects/${project.slug}`} className="block focus-visible:outline-none">
        <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-white/10 bg-cyber-grid bg-[length:28px_28px]">
          {project.image && (
            <img
              src={project.image}
              alt={`${project.name} project preview`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded border border-neon/20 bg-void/80 px-2 py-1 font-mono text-[10px] tracking-wider text-neon">{project.category}</span>
          <span className="relative font-mono text-5xl font-bold text-white/15">{project.number}</span>
          <span className="absolute bottom-4 left-5 font-display text-xl font-semibold text-white sm:text-2xl">{project.name}</span>
          <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-void/70 p-2 text-neon transition group-hover:border-neon/40"><ArrowUpRight size={18} /></span>
        </div>
      </Link>
      <div className="p-5 sm:p-6">
        <p className="leading-7 text-zinc-400">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((technology) => (
            <li key={technology} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-zinc-400">{technology}</li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-4 text-sm">
          <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-neon hover:underline">Case study <ArrowUpRight size={14} /></Link>
          {project.github && !project.github.includes("YOUR_USERNAME") && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white"><Github size={14} /> Code</a>}
        </div>
      </div>
    </motion.article>
  );
}
