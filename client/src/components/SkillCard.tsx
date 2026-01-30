import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  delay?: number;
}

export function SkillCard({ title, skills, icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card hover:bg-secondary/50 border border-border rounded-xl p-6 transition-colors duration-300 shadow-sm hover:shadow-md group h-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold font-mono">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium border border-border/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
