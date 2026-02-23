import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Factory, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* abstract industrial geometric dark texture */}
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop" 
            alt="Industrial Background" 
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Global Industrial Excellence
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance"
            >
              Powering Industry with Premium Minerals
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed"
            >
              BAS Minerals delivers high-grade industrial resources and cutting-edge processing engineering. We build the foundation for tomorrow's infrastructure.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild className="rounded-full bg-accent hover:bg-accent/90 text-white px-8 h-14 text-base">
                <Link href="/minerals">Explore Minerals</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/40 h-14 px-8 text-base backdrop-blur-sm">
                <Link href="/processing">Our Processing Facilities</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="bg-primary-foreground dark:bg-card py-12 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x border-border">
            {[
              { label: "Years Experience", value: "25+" },
              { label: "Global Partners", value: "150+" },
              { label: "Tons Processed", value: "2M+" },
              { label: "Active Facilities", value: "12" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Core Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              End-to-end solutions from resource extraction to refined industrial application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mountain,
                title: "Mineral Supply",
                desc: "High-purity raw materials sourced responsibly from world-class global deposits.",
                link: "/minerals"
              },
              {
                icon: Factory,
                title: "Processing & Engineering",
                desc: "State-of-the-art refinement facilities engineered for maximum efficiency and yield.",
                link: "/processing"
              },
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                desc: "Rigorous testing protocols ensuring all materials exceed industrial standards.",
                link: "/about"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link href={service.link} className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        {/* abstract network connections mapping overlay */}
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
          alt="Global Network" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay z-0"
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Globe className="w-16 h-16 text-accent mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 max-w-2xl mx-auto text-balance">
            Ready to secure your industrial supply chain?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Contact our engineering and logistics specialists today to discuss your specific operational requirements.
          </p>
          <Button size="lg" asChild className="rounded-full bg-white text-primary hover:bg-white/90 px-10 h-14 text-lg shadow-xl shadow-black/10">
            <Link href="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
