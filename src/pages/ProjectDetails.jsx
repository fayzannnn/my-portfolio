import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProjectBySlug } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-void text-white">
        <Navbar />
        <main className="page-shell py-28">
          <p className="eyebrow">// ERROR_404</p>
          <h1 className="section-title">Project not found.</h1>
          <Link to="/#projects" className="neon-button mt-8"><ArrowLeft size={16} /> Back to projects</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-void text-white">
      <Navbar />
      <main className="page-shell py-14 sm:py-20">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-neon"><ArrowLeft size={16} /> Back to projects</Link>
        <div className="mt-10 max-w-4xl">
          <p className="eyebrow">// PROJECT_{project.number} · {project.category}</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">{project.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{project.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.github && !project.github.includes("YOUR_USERNAME") && <a className="outline-button" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>}
            {project.demo && <a className="neon-button" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}
          </div>
        </div>

        <div className="panel mt-12 overflow-hidden">
          {project.image && <img src={project.image} alt={`${project.name} screenshot`} className="max-h-[520px] w-full bg-cyber-grid object-cover" onError={(event) => { event.currentTarget.style.display = "none"; }} />}
          <div className="p-6 sm:p-10">
            <p className="eyebrow">// OVERVIEW</p>
            <p className="mt-4 max-w-4xl leading-8 text-zinc-300">{project.description}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <section className="panel p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">The problem</h2>
            <p className="mt-3 leading-7 text-zinc-400">{project.problem}</p>
          </section>
          <section className="panel p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold">The approach</h2>
            <p className="mt-3 leading-7 text-zinc-400">{project.solution}</p>
          </section>
        </div>

        <section className="mt-8 panel p-6 sm:p-8">
          <p className="eyebrow">// CONTRIBUTION</p>
          <h2 className="mt-3 font-display text-2xl font-semibold">{project.role}</h2>
          <ul className="mt-5 space-y-3">
            {project.highlights.map((highlight) => <li key={highlight} className="flex gap-3 leading-7 text-zinc-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />{highlight}</li>)}
          </ul>
          <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-zinc-300">{item}</span>)}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
