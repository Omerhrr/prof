"use client";

import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charity-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <span className="text-lg font-bold">PROF</span>
                <span className="text-xs block text-white/70 -mt-1">
                  Charity &amp; Care Foundation
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Dedicated to bringing hope, relief, and sustainable support to underserved
              communities across Northern Nigeria, one act of kindness at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Photo Gallery", href: "#gallery" },
                { name: "Our Impact", href: "#impact" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white/80">
              Contact Info
            </h4>
            <ul className="space-y-2.5 text-white/60 text-sm">
              <li>Kano State, Northern Nigeria</li>
              <li>+234 (0) 800 PROF CARE</li>
              <li>info@profcharity.org</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} PROF Charity &amp; Care Foundation.
            All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-xl"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
