import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Factory, ShieldCheck, Globe, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout/PageWrapper";
import heroBg from "@/assets/hero-bg.png";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* abstract industrial geometric dark texture */}
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />

          {/* Animated Particles/Orbs background effect */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary-foreground/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-6 shadow-[0_0_20px_rgba(var(--accent),0.2)]"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Global Industrial Excellence
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance drop-shadow-lg"
              >
                Powering Industry with Premium Minerals
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed font-light"
              >
                BAS Minerals delivers high-grade industrial resources and cutting-edge processing engineering. We build the foundation for tomorrow's infrastructure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild className="rounded-full bg-accent hover:bg-accent/90 text-white px-8 h-14 text-base shadow-lg shadow-accent/20 transition-all hover:-translate-y-1">
                  <Link href="/minerals">Explore Minerals</Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/40 h-14 px-8 text-base backdrop-blur-sm transition-all hover:-translate-y-1">
                  <Link href="/processing">Our Processing Facilities</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right Side - Unique Glassmorphic Floating Elements */}
            <div className="hidden lg:flex relative h-[500px] w-full items-center justify-center">

              {/* Central Glowing Shield/Emblem */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10 flex items-center justify-center w-56 h-56 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-full animate-pulse opacity-70" />
                <Award className="w-24 h-24 text-accent relative z-10 drop-shadow-[0_0_15px_rgba(var(--accent),0.6)]" />

                {/* Rotating Text Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-25%] border-[0.5px] border-dashed border-white/20 rounded-full flex items-center justify-center"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-60">
                    <path id="circlePath" d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="transparent" />
                    <text className="text-[10px] uppercase tracking-widest fill-white font-medium font-display">
                      <textPath href="#circlePath" startOffset="0%">
                        • PREMIUM QUALITY • GLOBAL REACH • INDUSTRIAL EXCELLENCE
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </motion.div>

              {/* Orbital Node 1 - Precision */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[12%] -right-6 flex flex-col items-center gap-3 z-20 cursor-default"
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/20 p-5 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:bg-white/10 transition-all duration-300"
                >
                  <Sparkles className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
                </motion.div>
                <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium text-white/90 shadow-2xl">
                  Precision Purity
                </div>
              </motion.div>

              {/* Orbital Node 2 - Network */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-[18%] -left-8 flex flex-col items-center gap-3 z-20 cursor-default"
              >
                <motion.div
                  animate={{ y: [12, -12, 12] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/20 p-5 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:bg-white/10 transition-all duration-300"
                >
                  <Globe className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                </motion.div>
                <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium text-white/90 shadow-2xl">
                  Global Network
                </div>
              </motion.div>

              {/* Orbital Node 3 - Engineering */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute top-[65%] right-2 lg:right-4 flex flex-col items-center gap-3 z-20 cursor-default"
              >
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/20 p-5 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:bg-white/10 transition-all duration-300"
                >
                  <Factory className="w-7 h-7 text-accent/80 group-hover:scale-110 transition-transform" />
                </motion.div>
                <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium text-white/90 shadow-2xl">
                  Advanced Refining
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator Bottom */}
        <button
          onClick={() => document.getElementById('operational-pillars')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60 opacity-90 z-20 hover:text-white hover:opacity-100 transition-all cursor-pointer group"
          aria-label="Scroll down to operational pillars"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold group-hover:text-accent transition-colors">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 group-hover:border-accent/50 rounded-full flex justify-center p-1.5 backdrop-blur-sm transition-colors"
          >
            <motion.div className="w-1 h-2.5 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent),0.8)]" />
          </motion.div>
        </button>
      </section>

      {/* Operational Pillars Section (Replacing Stats) */}
      <section id="operational-pillars" className="bg-primary-foreground dark:bg-card py-16 lg:py-20 border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 tracking-tight">Our Operational Pillars</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Delivering global excellence through sustainable methods, advanced technology, and unwavering quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Sustainable Extraction",
                desc: "Minimizing environmental footprint through conscious mining protocols.",
                img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop&q=80",
                delay: 0.1
              },
              {
                title: "Advanced Refining",
                desc: "Next-generation processing facilities yielding unprecedented purity.",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80",
                delay: 0.2
              },
              {
                title: "Global Supply Chain",
                desc: "Seamless international logistics connecting continents efficiently.",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80",
                delay: 0.3
              },
              {
                title: "Quality Assurance",
                desc: "Rigorous laboratory testing ensuring reliable industrial materials.",
                img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&auto=format&fit=crop&q=80",
                delay: 0.4
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pillar.delay, duration: 0.6, ease: "easeOut" }}
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden shadow-inner ring-4 ring-background group-hover:ring-primary/20 transition-all duration-500 z-10">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 z-10 relative">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed z-10 relative">
                  {pillar.desc}
                </p>

                {/* Decorative dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-6 group-hover:bg-accent group-hover:scale-150 transition-all duration-500 z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Our Core Capabilities</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
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

      {/* Featured Minerals Showcase */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Premium Grade Minerals</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground">
              Sourced from the most reliable deposits globally, processed to specific industrial requirements.
            </p>
          </div>

          {/* Section 1: Copper */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1647153980948-489442cd45b7?auto=format&fit=crop&q=80&w=1000"
                alt="High-grade Copper Ore"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Copper Ore & Concentrates</h3>
                <p className="text-white/80 font-medium">Purity {'>'} 99.9% Available</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">Conductivity and Durability</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our copper ore goes through state-of-the-art flotation techniques to ensure maximum concentrate grades. Partnering directly with tier-1 mines allows us to guarantee long-term supply stability for the electronics, automotive, and construction sectors.
              </p>
              <ul className="space-y-3 mb-8">
                {['High purity benchmarks', 'Consistent monthly volumes', 'Customized sizing & packing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="rounded-full group">
                <Link href="/minerals#copper-specifications">
                  View Specifications <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Section 2: Quartz / Silica */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">Industrial Quartz & Silica</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Essential for advanced manufacturing, our high-purity quartz and silica sand meet the rigorous demands of the glass, foundry, and semiconductor industries. We operate dedicated crushing and screening lines to achieve precise micron distributions.
              </p>
              <ul className="space-y-3 mb-8">
                {['Low iron content (<0.01%)', 'Strict particle size control', 'Thermal shock resistant'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="rounded-full group">
                <Link href="/minerals#quartz-specifications">
                  Explore Quartz Products <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1692253143469-dc85e684ff41?auto=format&fit=crop&q=80&w=1000"
                alt="Quartz and Crystals"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 right-6 text-white text-right">
                <h3 className="text-2xl font-bold mb-1">High-Purity Quartz</h3>
                <p className="text-white/80 font-medium">Engineered for Technology</p>
              </div>
            </motion.div>
          </div>

          {/* Section 3: Processing */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1661933050836-3f9e3d7eda61?auto=format&fit=crop&q=80&w=1000"
                alt="Advanced Processing Facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">State-of-the-Art Processing</h3>
                <p className="text-white/80 font-medium">Automated & Efficient</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">Precision Engineering & Refining</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our operations go far beyond simple extraction. We utilize cutting-edge rotary kilns, magnetic separators, and automated bagging systems to transform raw materials into market-ready industrial assets safely and sustainably.
              </p>
              <ul className="space-y-3 mb-8">
                {['ISO Certified Facilities', 'Automated Quality Analytics', 'Zero-waste initiatives'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="rounded-full group">
                <Link href="/minerals#processing-specifications">
                  Take a Facility Tour <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section >

      {/* Global Reach CTA */}
      < section className="py-24 relative overflow-hidden" >
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
      </section >
    </PageWrapper >
  );
}
