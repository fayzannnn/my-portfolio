import { ArrowUp, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-7">
      <div className="page-shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-sm font-semibold text-neon">FAYZAN SHIKALGAR<span className="text-white">//DEV</span></p>
          <p className="mt-1 text-xs text-zinc-600">Designed and built with React.</p>
        </div>
        <div className="flex items-center gap-4 text-zinc-500">
          <a href="https://github.com/fayzannnn" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-neon"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/fayzan-shikalgar/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-neon"><Linkedin size={17} /></a>
          <span className="text-xs">© {new Date().getFullYear()}</span>
          <a href="#top" aria-label="Back to top" className="rounded-lg border border-white/10 p-2 hover:border-neon/40 hover:text-neon"><ArrowUp size={15} /></a>
        </div>
      </div>
    </footer>
  );
}
