import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
  Pickaxe, Truck, FileSearch, ArrowRight, CheckCircle2,
  Construction, Droplets, Eye, Factory, Boxes
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

// Asset Imports
import imgCopperOre from "@/assets/High-Grade Copper Ore & Concentrates.jpg";
import imgQuartzSilica from "@/assets/Industrial Quartz & Silica.jpg";
import imgAdvancedProcessing from "@/assets/Advanced Processing & Refining.jpg";
import imgGlobalSourcing from "@/assets/Global Mineral Sourcing Network.jpg";

// Story Sections Data
const STORY_SECTIONS = [
  {
    id: "section-intro",
    title: "Premium Grade Minerals",
    subtitle: "Industrial Raw Materials",
    description: "Sourced from the most reliable deposits globally, BAS Minerals delivers industrial-grade raw materials processed according to precise technical and industrial requirements. Our supply chain integrates sourcing, beneficiation, quality verification, and logistics coordination to ensure consistent material performance across industrial applications.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000",
    features: []
  },
  {
    id: "copper-specifications",
    title: "High-Grade Copper Ore & Concentrates",
    subtitle: "Conductivity and Durability",
    description: "Our copper ore undergoes advanced flotation and beneficiation processes to achieve maximum concentrate grades and superior conductivity performance. Through partnerships with reliable mining sources, BAS Minerals ensures stable long-term supply for electronics, automotive, energy, and construction industries.",
    image: imgCopperOre,
    features: [
      { title: "Key Specifications", items: ["Purity > 99.9% available", "High conductivity performance", "Consistent monthly supply volumes", "Customized sizing and packing"] },
      { title: "Applications", items: ["Electrical components", "Industrial wiring", "Construction materials", "Automotive manufacturing"] }
    ]
  },
  {
    id: "quartz-specifications",
    title: "Industrial Quartz & Silica",
    subtitle: "Engineered for Technology",
    description: "Essential for advanced manufacturing, our high-purity quartz and silica sand meet strict industrial standards required by glass production, foundry operations, and semiconductor applications. Dedicated crushing and screening processes allow precise particle size control.",
    image: imgQuartzSilica,
    features: [
      { title: "Key Specifications", items: ["Low iron content (<0.01%)", "Strict particle size distribution", "Thermal shock resistance", "High chemical purity"] },
      { title: "Applications", items: ["Glass manufacturing", "Ceramics production", "Semiconductor industry", "Foundry casting"] }
    ]
  },
  {
    id: "processing-specifications",
    title: "Advanced Processing & Refining",
    subtitle: "State-of-the-Art Operations",
    description: "BAS Minerals operates advanced mineral processing systems including rotary kilns, magnetic separators, and automated packaging lines. Our engineering approach transforms raw materials into market-ready industrial products while maintaining safety, efficiency, and sustainability standards.",
    image: imgAdvancedProcessing,
    features: [
      { title: "Key Features", items: ["ISO-certified facilities", "Automated quality analytics", "Zero-waste processing initiatives", "Continuous performance optimization"] },
      { title: "Applications", items: ["Industrial mineral refinement", "Beneficiation processes", "Material upgrading", "Custom processing solutions"] }
    ]
  },
  {
    id: "section-sourcing",
    title: "Global Mineral Sourcing Network",
    subtitle: "Reliable Supply Chain",
    description: "BAS Minerals maintains strategic sourcing relationships with reliable mineral deposits and mining partners to ensure consistent availability of industrial-grade raw materials. Our sourcing approach focuses on geological quality, supply continuity, and strict material verification standards before processing and delivery.",
    image: imgGlobalSourcing,
    features: [
      { title: "Sourcing Advantages", items: ["Verified mineral deposits", "Stable long-term sourcing", "Quality inspection at origin", "Reliable logistics coordination"] }
    ]
  },
  {
    id: "section-quality",
    title: "Quality Control & Material Testing",
    subtitle: "Performance Verification",
    description: "Every mineral supplied by BAS Minerals undergoes systematic quality evaluation to meet industrial performance standards. Testing procedures verify chemical composition, particle distribution, and material consistency to ensure optimal application performance.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000",
    features: [
      { title: "Testing Specifications", items: ["Chemical composition analysis", "Particle size distribution testing", "Moisture and density verification", "Industrial-grade quality standards"] }
    ]
  },
  {
    id: "section-logistics",
    title: "Logistics & Delivery Solutions",
    subtitle: "Efficient Supply Workflow",
    description: "Our integrated logistics system ensures safe handling, packaging, and timely delivery of minerals to industrial clients. BAS Minerals supports both bulk shipments and customized packaging solutions based on operational needs.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1000",
    features: [
      { title: "Logistics Highlights", items: ["Bulk transport solutions", "Export-ready packaging", "Reliable delivery scheduling", "Supply chain coordination"] }
    ]
  }
];

export default function MineralSupply() {
  const [location] = useLocation();
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle hash scrolling when the component mounts or location changes
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    // Intersection Observer to detect active story section and update sticky image
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveSegmentIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // triggers when element reaches middle 40% of screen
        threshold: 0
      }
    );

    const sectionElements = document.querySelectorAll(".story-trigger");
    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <PageWrapper>
      {/* Intro Hero (Separate from sticky story) */}
      <HeroHeader
        title="Mineral Products & Supply"
        subtitle="Explore our comprehensive industrial mineral catalog and processing capabilities."
        imageUrl="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
      />

      {/* STICKY STORYTELLING LAYOUT SYSTEM */}
      <div
        ref={containerRef}
        className="w-full bg-background relative"
      >
        <div className="flex flex-col lg:flex-row relative">

          {/* LEFT: FIXED VISUAL PANEL (Desktop Only) */}
          <div className="hidden lg:block lg:w-1/2 sticky top-[4rem] h-[calc(100vh-4rem)] overflow-hidden border-r border-border">
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
            <AnimatePresence>
              <motion.img
                key={STORY_SECTIONS[activeSegmentIndex].title} // Ensures proper unmount/mount for animation
                src={STORY_SECTIONS[activeSegmentIndex].image}
                alt={STORY_SECTIONS[activeSegmentIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-colors pointer-events-none" />
          </div>

          {/* RIGHT: SCROLLING NARRATIVE PANEL */}
          <div className="w-full lg:w-1/2 bg-transparent flex flex-col relative">

            {/* INVISIBLE TRACKING LAYER FOR OBSERVER (Fixes sticky intersection on scroll up/down) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col z-0" aria-hidden="true">
              {STORY_SECTIONS.map((_, index) => (
                <div key={index} data-index={index} className="story-trigger flex-1 w-full" />
              ))}
            </div>

            {STORY_SECTIONS.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                data-index={index}
                className="story-section min-h-screen lg:h-screen py-24 px-6 md:px-12 lg:px-20 flex flex-col justify-center scroll-mt-20 lg:sticky lg:top-[4rem]"
                style={{ zIndex: index + 10 }}
              >
                {/* Mobile Fallback Image - Only shows on mobile */}
                <div className="lg:hidden w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-xl relative">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8 }}
                  className="bg-card w-full rounded-[2rem] border border-border/60 shadow-[0_-15px_50px_-15px_rgba(0,0,0,0.1)] p-8 md:p-12 hover:shadow-[0_-15px_60px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-500 relative"
                >
                  <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">{section.subtitle}</p>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                    {section.title}
                  </h2>
                  <div className="w-16 h-1 bg-accent rounded-full mb-8"></div>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
                    {section.description}
                  </p>

                  {/* Feature Grids if available */}
                  {section.features && section.features.length > 0 && (
                    <div className="grid lg:grid-cols-2 gap-8">
                      {section.features.map((featureGroup, fIndex) => (
                        <div key={fIndex} className="bg-background/50 p-6 rounded-2xl border border-border shadow-sm hover:border-accent/40 transition-colors duration-300">
                          <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">{featureGroup.title}</h4>
                          <ul className="space-y-3">
                            {featureGroup.items.map((item, iIndex) => (
                              <li key={iIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* INDUSTRIAL APPLICATIONS STANDALONE GRID (Kept separated from scroll story for better UI fit) */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Industrial Applications of Our Minerals</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Pickaxe, title: "Mining Industry", desc: "Supporting heavy extraction and raw material recovery processes." },
              { icon: Construction, title: "Construction Materials", desc: "Essential aggregates, binders, and fillers for concrete and cement." },
              { icon: Droplets, title: "Ceramics Manufacturing", desc: "High-purity fluxes for specialized tiles, sanitaryware, and refractories." },
              { icon: Eye, title: "Glass Production", desc: "Premium silica tailored for highly transparent optical and industrial glass." },
              { icon: Factory, title: "Metallurgical Processing", desc: "Critical fluxes and slag conditioners for intensive ore smelting." },
              { icon: Boxes, title: "Industrial Fillers", desc: "Performance enhancing bulk minerals for plastics, rubber, and paints." }
            ].map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <app.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{app.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Need custom material specifications?</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-10"></div>
          <Button size="lg" asChild className="rounded-full bg-primary hover:bg-primary/90 px-10 h-14 text-lg shadow-xl hover:-translate-y-1 transition-transform">
            <Link href="/contact">
              Request a Technical Consultation <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
