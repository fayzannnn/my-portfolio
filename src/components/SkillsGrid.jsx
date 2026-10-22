import { Code2, Database, Layers3, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

const icons = [Code2, Layers3, Database, Wrench];

export default function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group, index) => {
        const Icon = icons[index] || Code2;
        return (
          <motion.article key={group.code} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="panel p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3"><span className="rounded-xl border border-neon/20 bg-neon/[.06] p-2.5 text-neon"><Icon size={20} /></span><h3 className="font-display text-lg font-semibold">{group.title}</h3></div>
              <span className="font-mono text-xs text-zinc-600">{group.code}</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => <li key={skill} className="rounded-md border border-white/10 bg-white/[.02] px-3 py-2 text-xs text-zinc-300 transition hover:border-neon/30 hover:text-neon">{skill}</li>)}
            </ul>
          </motion.article>
        );
      })}
    </div>
  );
}
