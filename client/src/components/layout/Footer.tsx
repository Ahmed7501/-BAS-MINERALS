import { Link } from "wouter";
import { Gem, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                BAS MINERALS
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Premier supplier of high-grade industrial minerals and leading provider of advanced processing engineering solutions globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Mineral Supply", href: "/minerals" },
                { label: "Processing & Engineering", href: "/processing" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-white transition-colors flex items-center gap-1 group text-sm"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">Solutions</h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70 text-sm">Industrial Minerals</li>
              <li className="text-primary-foreground/70 text-sm">Ore Processing</li>
              <li className="text-primary-foreground/70 text-sm">Logistics & Supply Chain</li>
              <li className="text-primary-foreground/70 text-sm">Facility Engineering</li>
              <li className="text-primary-foreground/70 text-sm">Quality Assurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span>100 Industrial Parkway<br/>Suite 400<br/>Denver, CO 80202</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>+1 (800) 555-MINERAL</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span>info@basminerals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} BAS Minerals. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-primary-foreground/50 hover:text-white cursor-pointer text-sm transition-colors">Privacy Policy</span>
            <span className="text-primary-foreground/50 hover:text-white cursor-pointer text-sm transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
