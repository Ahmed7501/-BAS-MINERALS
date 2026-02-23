import { motion } from "framer-motion";
import { Link } from "wouter";
import { Pickaxe, Truck, FileSearch, ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroHeader } from "@/components/ui/HeroHeader";
import { Button } from "@/components/ui/button";

const MINERALS = [
  {
    name: "High-Purity Quartz",
    desc: "Essential for semiconductor manufacturing, specialized glass, and high-tech optics.",
    specs: ["SiO2 > 99.99%", "Low Fe/Al impurities", "Custom particle sizing"]
  },
  {
    name: "Industrial Bauxite",
    desc: "Premium refractory grade material crucial for high-temperature industrial processes.",
    specs: ["Al2O3 > 85%", "High bulk density", "Excellent thermal stability"]
  },
  {
    name: "Calcined Kaolin",
    desc: "Versatile industrial mineral utilized in ceramics, paper coating, and specialized rubbers.",
    specs: ["High brightness", "Controlled rheology", "Low abrasion"]
  },
  {
    name: "Specialty Feldspar",
    desc: "Engineered for advanced ceramics, glass manufacturing, and functional fillers.",
    specs: ["Consistent chemistry", "Low coloring oxides", "Optimized fluxing"]
  }
];

export default function MineralSupply() {
  return (
    <PageWrapper>
      {/* raw minerals and rocks closeup */}
      <HeroHeader 
        title="Mineral Supply"
        subtitle="Uncompromising quality in raw material sourcing for advanced industrial applications."
        imageUrl="https://images.unsplash.com/photo-1616422285623-14bf98a58a74?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              We maintain consistent stockpiles of critical industrial minerals, ensuring uninterrupted supply lines for our partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {MINERALS.map((mineral, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{mineral.name}</h3>
                <p className="text-muted-foreground mb-6 h-12">{mineral.desc}</p>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="font-semibold text-sm text-foreground uppercase tracking-wider mb-3">Key Specifications</h4>
                  <ul className="space-y-2">
                    {mineral.specs.map((spec, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">Supply Chain Integrity</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Pickaxe,
                title: "Ethical Sourcing",
                desc: "We partner exclusively with mines operating under strict environmental and labor standards."
              },
              {
                icon: FileSearch,
                title: "Rigorous Analysis",
                desc: "Every batch undergoes chemical and physical analysis in our advanced laboratories before deployment."
              },
              {
                icon: Truck,
                title: "Global Logistics",
                desc: "Integrated shipping solutions ensuring on-time delivery across continents, via sea, rail, and road."
              }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Need custom material specifications?</h2>
          <Button size="lg" asChild className="rounded-full bg-primary hover:bg-primary/90">
            <Link href="/contact">
              Request a Technical Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
