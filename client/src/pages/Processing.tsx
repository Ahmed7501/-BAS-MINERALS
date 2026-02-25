import { motion } from "framer-motion";
import { Link } from "wouter";
import { Settings, Zap, Database, BarChart3 } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { Button } from "@/components/ui/button";

export default function Processing() {
  return (
    <PageWrapper>
      {/* Heavy machinery, gears, factory interior */}
      <HeroHeader
        title="Processing & Engineering"
        subtitle="Advanced refinement technologies and bespoke facility engineering."
        imageUrl="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">State-of-the-Art Refinement</h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                BAS Minerals doesn't just supply raw materials; we transform them. Our processing facilities utilize the latest in comminution, separation, and thermal treatment technologies to achieve unparalleled purity and consistency.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you require ultra-fine grinding, magnetic separation, or complex chemical washing, our engineers optimize the flowsheet to meet your precise requirements efficiently and sustainably.
              </p>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <img src="https://pixabay.com/get/g804f4f1a189e0704c416b7745c1030efa72ddebd0437987a58d570119aab1aa546d88d867c6b116792a00579f4067034dd3d61a5a8b2bb4e8e603f4f39d08dd7_1280.jpg" alt="Processing Tech 1" className="rounded-xl object-cover h-64 w-full shadow-lg" />
              <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop" alt="Processing Tech 2" className="rounded-xl object-cover h-64 w-full shadow-lg mt-8" />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Engineering Capabilities</h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Settings,
                title: "Comminution",
                desc: "Precision crushing and ultra-fine milling to exact micron specifications."
              },
              {
                icon: Zap,
                title: "Beneficiation",
                desc: "Advanced gravity, magnetic, and electrostatic separation techniques."
              },
              {
                icon: Database,
                title: "Thermal Processing",
                desc: "Controlled calcination and drying for structural and chemical stability."
              },
              {
                icon: BarChart3,
                title: "Plant Design",
                desc: "Full-scale facility engineering and flowsheet optimization consulting."
              }
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/30 p-8 rounded-2xl border border-border/50 text-center hover:bg-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-6 shadow-md shadow-primary/20">
                  <cap.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Optimize Your Operations</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Leverage our processing engineering expertise to improve your yields and reduce operational costs.
          </p>
          <Button size="lg" asChild className="rounded-full bg-accent hover:bg-accent/90 text-white px-8">
            <Link href="/contact">Talk to an Engineer</Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
