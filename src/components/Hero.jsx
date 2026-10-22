import { ArrowDown, ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="grid-overlay pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-neon/10 blur-[110px]" />
      <div className="page-shell grid min-h-[calc(90vh-72px)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/[.06] px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-neon">
            <span className="glow-dot h-2 w-2 rounded-full bg-neon" />
            Open to full-stack opportunities
          </div>
          <p className="eyebrow">MERN full-stack developer</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[.98] tracking-[-.055em] text-white sm:text-7xl xl:text-8xl">
            I BUILD
            <br />
            DIGITAL
            <br />
            <span className="shimmer-text">EXPERIENCES.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build responsive, accessible web applications with MongoDB, Express, React and Node.js, and I am exploring how to bring ML into them.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="neon-button" href="#projects">Explore my work <ArrowRight size={16} /></a>
            <a className="outline-button" href="/resume.pdf" download><Download size={16} /> Download resume</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-zinc-500">
            <span className="font-mono text-xs uppercase tracking-wider">Connect</span>
            <a aria-label="GitHub profile" href="https://github.com/fayzannnn" target="_blank" rel="noreferrer" className="transition hover:text-neon"><Github size={18} /></a>
            <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/fayzan-shikalgar/" target="_blank" rel="noreferrer" className="transition hover:text-neon"><Linkedin size={18} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }} className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-3xl border border-neon/10" />
          <div className="panel float relative overflow-hidden shadow-neon">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-magenta/80" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-neon/80" /></div>
              <span className="font-mono text-[10px] tracking-wider text-zinc-500">developer.profile</span>
              <span className="font-mono text-[10px] text-neon">LIVE</span>
            </div>
            <div className="scanline space-y-5 p-5 sm:p-7">
              <p className="font-mono text-xs text-zinc-500">{"// system profile"}</p>
              <div className="font-mono text-sm leading-7">
                <p><span className="text-magenta">const</span> <span className="text-cyber">developer</span> = {"{"}</p>
                <p className="pl-4 text-zinc-300">role: <span className="text-neon">"<Typewriter words={["Full Stack Developer", "MERN Developer", "ML Enthusiast"]} />"</span>,</p>
                <p className="pl-4 text-zinc-300">focus: <span className="text-neon">"MERN & AI/ML"</span>,</p>
                <p className="pl-4 text-zinc-300">mindset: <span className="text-neon">"Always learning"</span>,</p>
                <p className="pl-4 text-zinc-300">status: <span className="text-neon">"Building"</span></p>
                <p>{"};"}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="mb-3 flex items-center justify-between"><span className="font-mono text-xs text-zinc-400">CURRENT STACK</span><span className="text-xs text-cyber">04 MODULES</span></div>
                <div className="flex flex-wrap gap-2">{["MongoDB", "Express", "React", "Node.js"].map((tag) => <span key={tag} className="rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-xs text-zinc-300">{tag}</span>)}</div>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-500"><ArrowDown size={14} className="text-neon" /> scroll to inspect projects</div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-cyber/20 bg-[#0b1118] px-4 py-3 font-mono text-xs text-cyber sm:block">{"<code />"} clean & purposeful</div>
        </motion.div>
      </div>
    </section>
  );
}
