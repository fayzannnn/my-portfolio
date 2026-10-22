import { Code2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TerminalPanel from "../components/TerminalPanel";
import ProjectCard from "../components/ProjectCard";
import SkillsGrid from "../components/SkillsGrid";
import JourneyTimeline from "../components/JourneyTimeline";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-clip bg-void text-white">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="section-space scroll-mt-24 border-t border-white/[.06]">
          <div className="page-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">// SYSTEM_PROFILE</p>
              <h2 className="section-title">Curious mind.<br /><span className="text-neon">Practical builder.</span></h2>
              <p className="muted-copy mt-5 max-w-xl">I'm Fayzan, a Mumbai-based MERN full-stack developer who recently completed a Bachelor of Computer Science. I like building complete applications, from the React interface to the Express API and the MongoDB data behind it, and I care about readable code and interfaces that help people get things done.</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-zinc-300"><Code2 size={17} className="text-neon" /> Currently completing a Full Stack Development certification at Techpatshala.</div>
            </div>
            <TerminalPanel />
          </div>
        </section>

        <section id="projects" className="section-space scroll-mt-24 border-t border-white/[.06]">
          <div className="page-shell">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="eyebrow">// MISSION_ARCHIVE</p><h2 className="section-title">Selected <span className="text-neon">projects.</span></h2><p className="muted-copy mt-4 max-w-xl">A few projects that demonstrate my approach to interfaces, APIs, and solving practical problems.</p></div>
              <span className="font-mono text-xs text-zinc-600">{String(projects.length).padStart(2, "0")} PROJECTS LOADED</span>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section id="skills" className="section-space scroll-mt-24 border-t border-white/[.06]">
          <div className="page-shell">
            <p className="eyebrow">// TECH_ARSENAL</p>
            <h2 className="section-title">Tools I use to <span className="text-neon">build.</span></h2>
            <p className="muted-copy mt-4 max-w-xl">A practical toolkit for building interfaces, connecting services, and managing application data.</p>
            <div className="mt-10"><SkillsGrid /></div>
          </div>
        </section>

        <section id="journey" className="section-space scroll-mt-24 border-t border-white/[.06]">
          <div className="page-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div><p className="eyebrow">// BUILD_HISTORY</p><h2 className="section-title">The journey <span className="text-neon">so far.</span></h2><p className="muted-copy mt-4 max-w-md">A timeline of learning, experience, and the things I build along the way.</p></div>
            <JourneyTimeline />
          </div>
        </section>

        <section id="contact" className="section-space scroll-mt-24 border-t border-white/[.06]">
          <div className="page-shell">
            <p className="eyebrow">// ESTABLISH_CONNECTION</p>
            <h2 className="section-title mb-10">Have a good <span className="text-neon">challenge?</span></h2>
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
