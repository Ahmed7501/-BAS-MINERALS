import { motion } from "framer-motion";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroHeader } from "@/components/ui/HeroHeader";

export default function About() {
  return (
    <PageWrapper>
      {/* industrial facility landscape */}
      <HeroHeader 
        title="About BAS Minerals"
        subtitle="Decades of expertise in industrial mineral supply and processing engineering."
        imageUrl="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000&auto=format&fit=crop"
      />

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
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Our Legacy of Industrial Excellence</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a commitment to unyielding quality, BAS Minerals has grown into a premier global partner for industries requiring precise material specifications and reliable supply chains.
                  </p>
                  <p>
                    We operate at the critical intersection of natural resource extraction and advanced industrial application. Our team of geologists, chemical engineers, and logistics experts work in unison to ensure that the minerals powering your operations are of the highest caliber.
                  </p>
                  <p>
                    From specialized refractory applications to large-scale construction materials, we understand that our products are the foundational elements of your success.
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
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              >
                {/* workers in industrial setting */}
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop" 
                  alt="BAS Minerals Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide industries worldwide with superior mineral products through sustainable extraction and innovative processing technologies."
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be the undisputed leader in industrial mineral engineering, setting the global standard for quality, reliability, and environmental stewardship."
              },
              {
                icon: Award,
                title: "Our Values",
                desc: "Uncompromising integrity, relentless pursuit of operational excellence, and a deep commitment to the safety of our team and partners."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm"
              >
                <item.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Why Choose BAS?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {[
              "Stringent ISO 9001 certified quality control processes",
              "Customized mineral blending to exact client specifications",
              "Robust global supply chain with redundant logistics routing",
              "In-house processing engineering consultation",
              "Commitment to sustainable and ethical sourcing",
              "Dedicated 24/7 technical support team"
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-foreground font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
