import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
  Pickaxe, Truck, FileSearch, ArrowRight, CheckCircle2,
  Construction, Droplets, Eye, Factory, Boxes
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function MineralSupply() {
  const [location] = useLocation();

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

  return (
    <PageWrapper>
      {/* SECTION 1 - PREMIUM GRADE MINERALS (INTRO) */}
      {/* raw minerals and rocks closeup */}
      <HeroHeader
        title="Premium Grade Minerals"
        subtitle="Uncompromising quality in raw material sourcing for advanced industrial applications."
        imageUrl="https://images.unsplash.com/photo-1587304561081-37d40eb8ce38?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Intro Description */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Industrial Raw Materials</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sourced from the most reliable deposits globally, BAS Minerals delivers industrial-grade raw materials processed according to precise technical and industrial requirements. Our supply chain integrates sourcing, beneficiation, quality verification, and logistics coordination to ensure consistent material performance across industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - COPPER ORE & CONCENTRATES */}
      <section id="copper-specifications" className="py-24 bg-muted/20 border-b border-border scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1647153980948-489442cd45b7?auto=format&fit=crop&q=80&w=1000"
                alt="High-Grade Copper Ore"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">High-Grade Copper Ore & Concentrates</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our copper ore undergoes advanced flotation and beneficiation processes to achieve maximum concentrate grades and superior conductivity performance. Through partnerships with reliable mining sources, BAS Minerals ensures stable long-term supply for electronics, automotive, energy, and construction industries.
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Key Specifications</h4>
                    <ul className="space-y-3">
                      {["Purity > 99.9% available", "High conductivity performance", "Consistent monthly supply volumes", "Customized sizing and packing options"].map((spec, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Industrial Applications</h4>
                    <ul className="space-y-3">
                      {["Electrical components", "Industrial wiring", "Construction materials", "Automotive manufacturing"].map((app, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - INDUSTRIAL QUARTZ & SILICA */}
      <section id="quartz-specifications" className="py-24 bg-background border-b border-border scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Industrial Quartz & Silica</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Essential for advanced manufacturing, our high-purity quartz and silica sand meet strict industrial standards required by glass production, foundry operations, and semiconductor applications. Dedicated crushing and screening processes allow precise particle size control.
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Key Specifications</h4>
                    <ul className="space-y-3">
                      {["Low iron content (<0.01%)", "Strict particle size distribution", "Thermal shock resistance", "High chemical purity"].map((spec, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Industrial Applications</h4>
                    <ul className="space-y-3">
                      {["Glass manufacturing", "Ceramics production", "Semiconductor industry", "Foundry casting"].map((app, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1692253143469-dc85e684ff41?auto=format&fit=crop&q=80&w=1000"
                alt="Quartz processing and crystals"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 4 - ADVANCED PROCESSING FACILITY */}
      <section id="processing-specifications" className="py-24 bg-muted/20 border-b border-border scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1661933050836-3f9e3d7eda61?auto=format&fit=crop&q=80&w=1000"
                alt="Advanced Mineral Processing Facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">State-of-the-Art Processing & Refining</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  BAS Minerals operates advanced mineral processing systems including rotary kilns, magnetic separators, and automated packaging lines. Our engineering approach transforms raw materials into market-ready industrial products while maintaining safety, efficiency, and sustainability standards.
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Key Features</h4>
                    <ul className="space-y-3">
                      {["ISO-certified facilities", "Automated quality analytics", "Zero-waste processing initiatives", "Continuous performance optimization"].map((spec, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Industrial Applications</h4>
                    <ul className="space-y-3">
                      {["Industrial mineral refinement", "Beneficiation processes", "Material upgrading", "Custom processing solutions"].map((app, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - GLOBAL MINERAL SOURCING NETWORK */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Global Mineral Sourcing & Supply Network</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  BAS Minerals maintains strategic sourcing relationships with reliable mineral deposits and mining partners to ensure consistent availability of industrial-grade raw materials. Our sourcing approach focuses on geological quality, supply continuity, and strict material verification standards before processing and delivery.
                </p>

                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Key Sourcing Advantages</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {["Verified mineral deposits", "Stable long-term sourcing", "Quality inspection at origin", "Reliable logistics coordination"].map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"
                alt="Quarry extraction and stockpiles"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION - QUALITY CONTROL & MATERIAL TESTING */}
      <section className="py-24 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop"
                alt="Laboratory mineral testing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Quality Assurance & Material Testing</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Every mineral supplied by BAS Minerals undergoes systematic quality evaluation to meet industrial performance standards. Testing procedures verify chemical composition, particle distribution, and material consistency to ensure optimal application performance.
                </p>

                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Testing Specifications</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {["Chemical composition analysis", "Particle size distribution testing", "Moisture and density verification", "Industrial-grade quality standards"].map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - CUSTOM PROCESSING CAPABILITIES */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Custom Processing & Material Preparation</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  BAS Minerals offers customized mineral processing solutions tailored to specific industrial requirements. Through crushing, screening, grinding, and beneficiation processes, materials are prepared to precise technical specifications.
                </p>

                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Our Capabilities</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {["Custom sizing and grading", "Dry and wet processing", "Beneficiation upgrades", "Packaging customization"].map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                alt="Mineral crushing and screening plant"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION - INDUSTRIAL APPLICATIONS */}
      <section className="py-24 bg-secondary/30 border-b border-border">
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

      {/* SECTION - LOGISTICS & DELIVERY */}
      <section className="py-24 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=1000&auto=format&fit=crop"
                alt="Industrial shipping and logistics"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Efficient Logistics & Delivery Management</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our integrated logistics system ensures safe handling, packaging, and timely delivery of minerals to industrial clients. BAS Minerals supports both bulk shipments and customized packaging solutions based on operational needs.
                </p>

                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Highlights</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {["Bulk transport solutions", "Export-ready packaging", "Reliable delivery scheduling", "Supply chain coordination"].map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - TECHNICAL SUPPORT */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Technical Support & Client Collaboration</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Beyond supply, BAS Minerals works closely with clients to optimize material selection and processing performance. Our technical team assists in achieving efficiency improvements and cost-effective production outcomes.
                </p>

                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Our Focus Areas</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {["Technical consultation", "Material optimization guidance", "Long-term supply partnerships", "Performance improvement support"].map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
                alt="Engineers evaluating industrial operations"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Need custom material specifications?</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          <Button size="lg" asChild className="rounded-full bg-primary hover:bg-primary/90 px-8 text-base shadow-lg hover:-translate-y-1 transition-transform">
            <Link href="/contact">
              Request a Technical Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
