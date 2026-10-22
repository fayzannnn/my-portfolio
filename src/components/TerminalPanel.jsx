import { Terminal } from "lucide-react";

export default function TerminalPanel() {
  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <Terminal size={16} className="text-neon" />
        <span className="font-mono text-xs text-zinc-400">about.sh</span>
        <span className="ml-auto font-mono text-[10px] text-zinc-600">READ ONLY</span>
      </div>
      <div className="space-y-3 p-5 font-mono text-sm leading-6">
        <p><span className="text-neon">$</span> whoami</p>
        <p className="pl-4 text-zinc-400">A developer who enjoys solving problems and crafting useful interfaces.</p>
        <p><span className="text-neon">$</span> cat principles.txt</p>
        <ul className="space-y-1 pl-4 text-zinc-400">
          <li>→ Make it usable.</li>
          <li>→ Keep it accessible.</li>
          <li>→ Learn by building.</li>
        </ul>
        <p><span className="text-neon">$</span> <span className="animate-pulse text-cyber">_</span></p>
      </div>
    </div>
  );
}
