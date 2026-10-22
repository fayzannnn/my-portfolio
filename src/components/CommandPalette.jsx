import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Cpu, FolderOpen, GraduationCap, Mail, Search, User, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const commands = [
  { name: "View Projects", description: "Explore featured work", icon: FolderOpen, target: "projects", keywords: "work portfolio case studies" },
  { name: "About Me", description: "Developer profile", icon: User, target: "about", keywords: "profile introduction" },
  { name: "Tech Arsenal", description: "Skills and technologies", icon: Cpu, target: "skills", keywords: "stack react javascript" },
  { name: "Journey", description: "Education and experience", icon: GraduationCap, target: "journey", keywords: "timeline internship certification" },
  { name: "Contact", description: "Get in touch", icon: Mail, target: "contact", keywords: "email hire message" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);
  const navigate = useNavigate();

  const filteredCommands = useMemo(
    () => commands.filter((item) =>
      `${item.name} ${item.description} ${item.keywords}`
        .toLowerCase().includes(query.trim().toLowerCase())
    ),
    [query]
  );

  const closePalette = useCallback((restoreFocus = true) => {
    setOpen(false);
    setQuery("");
    if (restoreFocus) requestAnimationFrame(() => previousFocusRef.current?.focus?.());
  }, []);

  const openPalette = useCallback(() => {
    previousFocusRef.current = document.activeElement;
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  }, []);

  const selectCommand = useCallback((command) => {
    closePalette(false);
    const target = document.getElementById(command.target);

    if (target) {
      window.history.replaceState(null, "", `#${command.target}`);
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
      requestAnimationFrame(() => {
        const heading = target.querySelector("h1, h2, h3");
        const destination = heading || target;
        if (!destination.hasAttribute("tabindex")) destination.setAttribute("tabindex", "-1");
        destination.focus({ preventScroll: true });
      });
    } else {
      navigate(`/#${command.target}`);
    }
  }, [closePalette, navigate]);

  useEffect(() => {
    function handleShortcut(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) closePalette();
        else openPalette();
      }
    }
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [open, openPalette, closePalette]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();

    function handleKeys(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        closePalette();
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (!filteredCommands.length) return;
        setActiveIndex((current) => event.key === "ArrowDown"
          ? (current + 1) % filteredCommands.length
          : (current - 1 + filteredCommands.length) % filteredCommands.length
        );
      } else if (event.key === "Enter") {
        const selected = filteredCommands[activeIndex];
        if (selected) {
          event.preventDefault();
          selectCommand(selected);
        }
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'input:not([disabled]), button:not([disabled])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeys);
    return () => document.removeEventListener("keydown", handleKeys);
  }, [open, activeIndex, filteredCommands, closePalette, selectCommand]);

  useEffect(() => setActiveIndex(0), [query]);

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        aria-label="Open command palette"
        className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-xs text-zinc-300 transition hover:border-neon/40 hover:text-neon sm:text-sm"
      >
        <Search size={15} aria-hidden="true" />
        <span className="hidden sm:inline">Quick navigation</span>
        <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px]">Ctrl K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/75 px-4 pb-8 pt-[12vh] backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePalette();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-title"
            aria-describedby="command-help"
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-neon/25 bg-[#0d1015] shadow-neon"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4">
              <Search size={18} className="shrink-0 text-neon" aria-hidden="true" />
              <label htmlFor="command-search" className="sr-only">Search commands</label>
              <input
                ref={inputRef}
                id="command-search"
                type="text"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded="true"
                aria-controls="command-list"
                aria-activedescendant={filteredCommands[activeIndex] ? `command-${filteredCommands[activeIndex].target}` : undefined}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search commands..."
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent py-5 text-sm text-white outline-none placeholder:text-zinc-500"
              />
              <button type="button" onClick={() => closePalette()} aria-label="Close command palette" className="rounded-md p-2 text-zinc-400 hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div className="px-3 pb-3 pt-4">
              <div className="flex items-center justify-between px-2 pb-3">
                <h2 id="command-title" className="font-mono text-xs uppercase tracking-[.2em] text-neon">System commands</h2>
                <span className="font-mono text-xs text-zinc-600">{filteredCommands.length} RESULTS</span>
              </div>
              <p id="command-help" className="sr-only">Use arrow keys to navigate, Enter to select, and Escape to close.</p>

              <div id="command-list" role="listbox" aria-label="Commands">
                {filteredCommands.map((command, index) => {
                  const Icon = command.icon;
                  const selected = index === activeIndex;
                  return (
                    <button
                      key={command.target}
                      id={`command-${command.target}`}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => selectCommand(command)}
                      className={`mb-1 flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${
                        selected ? "border-neon/20 bg-neon/[.08]" : "border-transparent hover:bg-white/[.04]"
                      }`}
                    >
                      <span className={`rounded-lg border p-2 ${selected ? "border-neon/20 text-neon" : "border-white/10 text-zinc-400"}`}>
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block text-sm font-medium ${selected ? "text-neon" : "text-zinc-200"}`}>{command.name}</span>
                        <span className="mt-1 block text-xs text-zinc-500">{command.description}</span>
                      </span>
                      <ArrowUpRight size={15} className={selected ? "text-neon" : "text-zinc-600"} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
              {filteredCommands.length === 0 && <p className="px-3 py-8 text-center text-sm text-zinc-500">No commands found. Try another search.</p>}
            </div>
            <div className="flex flex-wrap gap-4 border-t border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              <span>↑↓ Navigate</span><span>↵ Select</span><span>Esc Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
