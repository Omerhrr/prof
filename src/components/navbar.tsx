"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 border-b border-charity-light/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-charity rounded-xl flex items-center justify-center shadow-lg shadow-charity/20 group-hover:shadow-charity/40 transition-shadow">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-warm rounded-full border-2 border-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-bold text-foreground tracking-tight">
                PROF
              </span>
              <span className="text-xs md:text-sm text-muted-foreground block -mt-1">
                Charity & Care Foundation
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-charity-dark rounded-lg hover:bg-charity-light/40 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="ml-3 bg-charity hover:bg-charity-dark text-white shadow-lg shadow-charity/25 hover:shadow-charity/40 transition-all duration-300"
            >
              <a href="#contact">Donate Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-xl text-foreground hover:bg-charity-light/30 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-charity-light/20"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground hover:text-charity hover:bg-charity-light/30 rounded-xl transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <Button
                asChild
                className="w-full mt-2 bg-charity hover:bg-charity-dark text-white shadow-lg shadow-charity/25"
              >
                <a href="#contact" onClick={() => setIsMobileOpen(false)}>
                  Donate Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
