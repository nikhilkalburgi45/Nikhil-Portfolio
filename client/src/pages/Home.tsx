import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { 
  ArrowRight, 
  Github, 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Cloud,
  Layers,
  Container,
  GitBranch,
  Cpu,
  Mail,
  Linkedin
} from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";

export default function Home() {
  const submitContact = useSubmitContact();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitContact.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Abstract Background Element */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Work
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Hello, I'm <span className="text-primary">Nikhil Kalburgi</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-mono text-muted-foreground mb-8 h-12">
              Full Stack & DevOps Engineer
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              I build scalable applications, microservices systems, and production-grade cloud deployments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                <Button size="lg" className="text-lg px-8 py-6 rounded-full group">
                  View Projects 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ScrollLink>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full"
                onClick={() => window.open('https://drive.google.com/file/d/1TXza6hkKkbcRu-rOWP_rDsyMt3vKGx5_/view?usp=sharing', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="About Me" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-lg md:text-xl text-muted-foreground leading-loose space-y-6">
                <p>
                  I am a Full Stack & DevOps Engineer focused on <span className="text-foreground font-semibold">microservices architecture</span>, 
                  <span className="text-foreground font-semibold"> containerization</span>, and <span className="text-foreground font-semibold">cloud deployment</span>.
                </p>
                <p>
                  I possess a strong system design mindset and build production-ready applications that solve real-world problems. 
                  My approach combines clean code practices with robust infrastructure automation.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3" />
              <div className="glass-panel p-8 rounded-2xl relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold font-mono text-primary">5+</h4>
                    <p className="text-sm text-muted-foreground">Major Projects</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold font-mono text-primary">10+</h4>
                    <p className="text-sm text-muted-foreground">Technologies</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold font-mono text-primary">100%</h4>
                    <p className="text-sm text-muted-foreground">Commitment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Technical Arsenal" subtitle="Tools and technologies I use to build robust systems." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              title="Frontend Development" 
              skills={['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']}
              icon={<Code2 className="w-6 h-6" />}
              delay={0}
            />
            <SkillCard 
              title="Backend Development" 
              skills={['Node.js', 'REST APIs','Express.Js','JWT']}
              icon={<Server className="w-6 h-6" />}
              delay={0.1}
            />
            <SkillCard 
              title="DevOps & Cloud" 
              skills={['Docker', 'Kubernetes', 'AWS (EKS)', 'CI/CD', 'GitHub Actions']}
              icon={<Cloud className="w-6 h-6" />}
              delay={0.2}
            />
            <SkillCard 
              title="Databases" 
              skills={['MySQL', 'MongoDB', 'PostgreSQL']}
              icon={<Database className="w-6 h-6" />}
              delay={0.3}
            />
            <SkillCard 
              title="Tools & Environment" 
              skills={['Git', 'GitHub', 'Linux', 'Vercel', 'Postman']}
              icon={<Terminal className="w-6 h-6" />}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Featured Projects" subtitle="A selection of my recent work." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Car Rental Platform"
              description="Responsive vehicle rental platform with booking workflow and modular frontend architecture."
              tags={['React', 'Node', 'UI Architecture']}
              link="https://drive-share-rent.vercel.app/"
              delay={0}
            />
            <ProjectCard 
              title="Airline Management System"
              description="Distributed airline system designed using microservice architecture and service separation principles."
              tags={['Microservices','Node.Js', 'System Design','Rabbit-MQ']}
              link="https://github.com/nikhilkalburgi45/Airline-Management-System"
              delay={0.1}
              isGithub={true}
            />
            <ProjectCard 
              title="DocRAG Chatbot"
              description="Retrieval-augmented generation chatbot using semantic document retrieval and context injection pipeline."
              tags={['RAG', 'NLP', 'AI Systems', 'Python']}
              link="https://github.com/Arraj2611/doc_RAG"
              delay={0.2}
              isGithub={true}
            />
            <ProjectCard 
              title="Zomato DevSecOps"
              description="DevSecOps pipeline case study with CI/CD, container security scanning, and deployment automation."
              tags={['DevSecOps', 'CI/CD', 'Docker', 'Security']}
              link="https://github.com/nikhilkalburgi45/Zomato-Devops"
              delay={0.3}
              isGithub={true}
            />
            <ProjectCard 
              title="Production AWS EKS"
              description="Enterprise-style Kubernetes deployment patterns on AWS EKS with production infrastructure design."
              tags={['AWS', 'Kubernetes', 'EKS', 'Infrastructure']}
              isPrivate={true}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Experience" />
          
          <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-[41px] md:-left-[59px] top-0 p-2 bg-background border-2 border-primary rounded-full text-primary">
                <Layers className="w-4 h-4" />
              </span>
              
              <h3 className="text-2xl font-bold font-mono">Hands-on Engineering & DevOps</h3>
              <p className="text-primary font-medium mb-4">Project Experience</p>
              
              <div className="prose prose-gray dark:prose-invert max-w-none text-muted-foreground">
                <p className="mb-4">
                  Focused practical work applying engineering principles to solve infrastructure and application challenges.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Designed and implemented microservices architectures using Spring Boot, ensuring loose coupling and high scalability.</li>
                  <li>Constructed automated CI/CD pipelines using GitHub Actions to streamline deployment processes and reduce manual errors.</li>
                  <li>Orchestrated containerized deployments using Docker and Kubernetes, managing stateful and stateless applications.</li>
                  <li>Executed cloud infrastructure labs on AWS, configuring EKS clusters, VPC networking, and IAM security policies.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Github CTA */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Github className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-4 font-mono">Check out my code</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Explore my repositories, contributions, and coding style on GitHub.
          </p>
          <Button 
            size="lg" 
            className="rounded-full px-8"
            onClick={() => window.open('https://www.linkedin.com/in/nikhil-kalburgi/', '_blank')}
          >
            Visit GitHub Profile
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold font-mono text-primary mb-2">Nikhil Kalburgi</h3>
            <p className="text-muted-foreground">Full Stack & DevOps Engineer</p>
          </div>
          
          <div className="flex justify-center items-center gap-6 mb-8">
            <a 
              href="https://github.com/nikhilkalburgi45" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nikhilkalburgi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:nikhilkalburgi45@gmail.com" 
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground border-t border-border/50 pt-8">
            © 2025 Nikhil Kalburgi. Designed & Built with a focus on System Architecture.
          </div>
        </div>
      </footer>
    </div>
  );
}
