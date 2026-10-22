import { Award, BriefcaseBusiness, GraduationCap, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  { date: "EDUCATION", title: "Bachelor of Computer Science", detail: "Completed my degree in Mumbai, building the computer science foundations behind my full-stack work.", icon: GraduationCap },
  { date: "INTERNSHIP", title: "Intern at Daxy Private Limited", detail: "Worked on a BMC-related digital governance initiative, handling and operating vendors' data accurately.", icon: BriefcaseBusiness },
  { date: "LEADERSHIP", title: "Sports Event Head", detail: "Led the planning and coordination of sports events, working with teams and deadlines.", icon: Users },
  { date: "CERTIFICATION", title: "Full Stack Development at Techpatshala", detail: "Currently deepening my MERN skills with structured, project-based training.", icon: Award },
  { date: "PROJECTS", title: "Building real applications", detail: "Royal Fitness, VisaCheck AI and a set of React mini projects using Context API, Redux and Zustand.", icon: Rocket },
];

export default function JourneyTimeline() {
  return (
    <div className="relative ml-2 sm:ml-4">
      <motion.span
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-y-0 left-0 w-px origin-top bg-gradient-to-b from-neon/60 to-white/10"
      />
      <div className="space-y-8 pl-7 sm:pl-10">
        {milestones.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article key={item.date} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative">
              <span className="absolute -left-[35px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-neon/25 bg-void text-neon sm:-left-[49px]"><Icon size={16} /></span>
              <p className="font-mono text-[10px] tracking-[.2em] text-neon">{item.date}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 max-w-2xl leading-7 text-zinc-400">{item.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
