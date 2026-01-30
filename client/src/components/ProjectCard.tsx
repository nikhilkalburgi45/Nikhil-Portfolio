import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  isPrivate?: boolean;
  delay?: number;
}

export function ProjectCard({ title, description, tags, link, isPrivate = false, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-mono group-hover:text-primary transition-colors">
            {title}
          </h3>
          {isPrivate ? (
             <Badge variant="outline" className="border-amber-500/50 text-amber-600 bg-amber-500/10 gap-1.5">
               <Lock className="w-3 h-3" /> Private
             </Badge>
          ) : (
            link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )
          )}
        </div>
        
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-mono font-medium text-primary bg-primary/5 px-2.5 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="pt-4 border-t border-border flex gap-3">
            {link && !isPrivate && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full gap-2 font-mono"
                onClick={() => window.open(link, '_blank')}
              >
                <ExternalLink className="w-4 h-4" /> View Live
              </Button>
            )}
            
            {/* If there was a distinct github link, we'd add it here, 
                for now utilizing the main link as per requirements or generic placeholder */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
