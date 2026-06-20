"use client";

import { motion } from "framer-motion";
import { Heart, ArrowDown, HandHeart, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border-2 border-dashed border-charity/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 md:w-80 md:h-80 rounded-full border border-dashed border-warm/15"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-charity/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 left-1/5 w-3 h-3 bg-warm/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-charity/10 rounded-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charity/10 border border-charity/20 text-charity-dark text-sm font-medium mb-6"
            >
              <MapPin className="w-4 h-4" />
              Serving Northern Nigeria Since Inception
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="text-foreground">Transforming</span>
              <br />
              <span className="text-gradient">Lives with</span>
              <br />
              <span className="text-foreground">Compassion</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              PROF Charity &amp; Care Foundation brings hope, relief, and essential
              supplies to underserved communities across Kano and Northern Nigeria.
              Together, we can make a lasting difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-charity hover:bg-charity-dark text-white px-8 py-6 text-base shadow-xl shadow-charity/25 hover:shadow-charity/40 hover:scale-105 transition-all duration-300 rounded-xl"
              >
                <a href="#gallery">
                  <Heart className="w-5 h-5 mr-2" />
                  View Our Work
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-charity/30 text-charity-dark hover:bg-charity-light/30 px-8 py-6 text-base rounded-xl"
              >
                <a href="#about">
                  Learn More
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { icon: Users, value: "5,000+", label: "Lives Impacted" },
                { icon: HandHeart, value: "40+", label: "Outreaches" },
                { icon: MapPin, value: "Kano", label: "Primary Focus" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <stat.icon className="w-5 h-5 text-charity mx-auto lg:mx-0 mb-1" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Founder Photo & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-charity/20 via-warm/10 to-transparent rounded-3xl blur-3xl scale-110" />

              {/* Main Photo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60"
              >
                <Image
                  src="/images/team/handler.jpg"
                  alt="The Professor - Founder and Funder of PROF Charity & Care Foundation"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 320px, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charity-dark/30 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-xl p-3 md:p-4 border border-charity-light/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-charity rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base text-foreground">The Professor</p>
                    <p className="text-xs text-muted-foreground">Founder & Funder</p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-2xl shadow-xl p-3 md:p-4 border border-warm-light/40"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-warm rounded-xl flex items-center justify-center">
                    <HandHeart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base text-foreground">Dedicated</p>
                    <p className="text-xs text-muted-foreground">To Giving Back</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-charity transition-colors"
        >
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
