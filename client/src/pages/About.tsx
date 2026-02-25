import { motion } from "framer-motion";
import {
  Target, Eye, Award, CheckCircle2,
  Mountain, Construction, Factory, FlaskConical,
  ShieldCheck, Settings, Users, ArrowRight,
  Globe2, Truck, Droplets, HardHat, Pickaxe,
  SearchCheck, Cpu, Anchor
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroHeader } from "@/components/ui/HeroHeader";

export default function About() {
  return (
    <PageWrapper>
      {/* Industrial mining / quarry equipment */}
      <HeroHeader
        title="About BAS Minerals"
        subtitle="Decades of expertise in industrial mineral supply and processing engineering."
        imageUrl="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Company Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Company Overview</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong>BAS Minerals</strong> is a mineral supply and processing company committed to delivering high-quality mineral products and engineering solutions to global and regional markets.
                  </p>
                  <p>
                    With industry knowledge and a strong technical foundation, we help clients improve material quality, optimize production, and achieve cost-effective results.
                  </p>
                  <p>
                    Our operations are powered by deep <strong>industrial mineral expertise</strong>, robust <strong>sourcing networks</strong>, and advanced <strong>processing capabilities</strong>. Backed by dedicated <strong>engineering support</strong> and ensuring absolute <strong>logistics reliability</strong>, we are the trusted backbone for complex industrial supply chains.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
              >
                {/* Mineral processing plant realistic imagery */}
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop"
                  alt="Mineral Processing Plant"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Approach / Integration Section */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Operational Approach</h2>
                <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  BAS Minerals combines industry expertise with practical operational knowledge to deliver dependable mineral supply and processing solutions tailored to modern industrial requirements.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  By understanding the technical characteristics of each mineral and the specific needs of our clients, we ensure optimized material performance, consistent quality standards, and efficient production outcomes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our integrated approach — from sourcing and beneficiation to engineering support and logistics coordination — enables clients to achieve reliable and cost-effective operations across diverse industrial applications.
                </p>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
              >
                {/* Heavy mining / raw mineral processing imagery */}
                <img
                  src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1000&auto=format&fit=crop"
                  alt="Industrial mining and mineral operations"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm group hover:border-accent/50 transition-colors"
            >
              <Target className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To supply and process minerals responsibly while delivering reliable, efficient, and innovative solutions that add value to our clients’ operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm group hover:border-accent/50 transition-colors"
            >
              <Eye className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a preferred partner in mineral supply and processing through quality, trust, and technical excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm group hover:border-accent/50 transition-colors"
            >
              <Award className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-bold text-foreground mb-4">Our Values</h3>
              <ul className="text-muted-foreground leading-relaxed space-y-3 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Quality & consistency</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Safety & sustainability</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Technical integrity</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> Long-term partnerships</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Industries Served</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Pickaxe, name: "Mining" },
              { icon: Construction, name: "Construction Materials" },
              { icon: Droplets, name: "Ceramic Manufacturing" },
              { icon: Eye, name: "Glass Production" },
              { icon: Factory, name: "Metallurgical Processing" }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-accent/50 group transition-all"
              >
                <div className="w-14 h-14 bg-secondary flex items-center justify-center rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h4 className="font-display font-semibold text-foreground text-center text-sm md:text-base">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background dark image overlay - silica/quartz texture */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620603417730-1c0eb2ddcc3c?q=80&w=2000&auto=format&fit=crop"
            alt="Mineral Texture Background"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Technical Expertise</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "Mineral Beneficiation",
                desc: "Advanced knowledge in purifying and separating raw minerals to exact client specifications."
              },
              {
                icon: Settings,
                title: "Processing Optimization",
                desc: "Streamlining flowsheet efficiency to maximize yields and reduce operational waste."
              },
              {
                icon: ShieldCheck,
                title: "Quality Control",
                desc: "Strict adherence to physical and chemical testing standards at every stage."
              },
              {
                icon: HardHat,
                title: "Engineering Solutions",
                desc: "Bespoke facility design and technical troubleshooting for complex material handling."
              }
            ].map((expertise, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <expertise.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold text-white mb-3">{expertise.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{expertise.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow / Approach Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Approach</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground">
              A systematic, transparent process ensuring excellence from extraction to delivery.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-border border-b border-dashed border-muted-foreground/30 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                { icon: Mountain, label: "Mineral Sourcing" },
                { icon: SearchCheck, label: "Material Testing" },
                { icon: Cpu, label: "Processing & Beneficiation" },
                { icon: ShieldCheck, label: "Quality Assurance" },
                { icon: Anchor, label: "Delivery & Client Support" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-2 rounded-full bg-secondary group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">{step.label}</h4>
                  <div className="w-8 h-1 bg-accent/30 rounded-full lg:hidden block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Why Choose BAS Minerals */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Choose BAS?</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {[
              { title: "Consistent Specifications", desc: "Rigorous sorting and blending to guarantee chemical and physical consistency." },
              { title: "Technical Team Expertise", desc: "Our geologists and engineers provide hands-on support for your processing needs." },
              { title: "Reliable Supply Chain", desc: "Robust global sourcing networks and redundant logistics ensuring on-time delivery." },
              { title: "Long-Term Partnerships", desc: "We prioritize trust, transparency, and collaborative success with every client." },
              { title: "Customer-Focused Solutions", desc: "Agile operations allowing for customized mineral formulations." },
              { title: "Sustainable Commitment", desc: "Strict adherence to responsible extraction and ethical environmental standards." }
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-black/20 transition-colors"
              >
                <CheckCircle2 className="w-7 h-7 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg text-foreground font-bold mb-1">{point.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
