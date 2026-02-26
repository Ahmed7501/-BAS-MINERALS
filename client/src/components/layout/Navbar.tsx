import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/new_logo.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/mineral-supply", label: "Mineral Supply" },
  { href: "/processing", label: "Processing & Engineering" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="relative h-14 w-14 flex items-center justify-center rounded-full shadow-md border border-white/10"
            style={{ backgroundColor: '#230c38' }}
          >
            <img
              src={logoImg}
              alt="BAS Minerals Logo"
              className="w-[85%] h-auto object-contain"
            />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-foreground md:text-white'} transition-colors`}>
            BAS MINERALS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent relative py-2 ${location === link.href
                ? "text-accent"
                : isScrolled ? "text-foreground/80" : "text-foreground/80 md:text-white/90"
                }`}
            >
              {link.label}
              {location === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </Link>
          ))}
          <Button asChild className="rounded-full px-6 bg-accent hover:bg-accent/90 text-white border-0">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 -mr-2 ${isScrolled ? 'text-foreground' : 'text-foreground md:text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium p-2 rounded-md transition-colors ${location === link.href ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
