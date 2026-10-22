import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CommandPalette from "./CommandPalette";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(links.map((link) => link.id));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    } else if (pathname !== "/") {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/[.08] bg-void/85 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="page-shell flex min-h-[72px] items-center justify-between gap-4">
        <Link to="/" className="shrink-0 font-mono text-lg font-bold tracking-tight text-neon" aria-label="Fayzan Shikalgar home">
          FAYZAN SHIKALGAR <span className="text-white">// DEV</span><span className="ml-1 animate-pulse text-cyber">_</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goToSection(link.id)}
              aria-current={active === link.id ? "location" : undefined}
              className={`relative py-1 text-sm transition hover:text-neon ${active === link.id ? "text-neon" : "text-zinc-400"}`}
            >
              {link.label}
              {active === link.id && <motion.span layoutId="nav-underline" className="absolute inset-x-0 -bottom-0.5 h-px bg-neon" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block"><CommandPalette /></div>
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-zinc-300 hover:text-neon lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/10 bg-void px-5 py-4 lg:hidden">
          <div className="mb-4 sm:hidden"><CommandPalette /></div>
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <button key={link.id} type="button" onClick={() => goToSection(link.id)} className="rounded-lg px-3 py-3 text-left text-sm text-zinc-300 hover:bg-white/5 hover:text-neon">
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
