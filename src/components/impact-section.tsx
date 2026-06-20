"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Users,
  Package,
  MapPin,
  TrendingUp,
  Award,
  HandHeart,
  Globe,
} from "lucide-react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ElementType;
  duration?: number;
}

function StatCounter({ end, suffix = "", label, icon: Icon, duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="w-16 h-16 bg-charity/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-charity group-hover:shadow-lg group-hover:shadow-charity/25 transition-all duration-500">
        <Icon className="w-7 h-7 text-charity group-hover:text-white transition-colors duration-500" />
      </div>
      <p className="text-4xl md:text-5xl font-extrabold text-foreground">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm md:text-base text-muted-foreground font-medium">{label}</p>
    </div>
  );
}

const stats = [
  { end: 5000, suffix: "+", label: "Lives Impacted", icon: Users },
  { end: 40, suffix: "+", label: "Outreach Programs", icon: Package },
  { end: 25, suffix: "+", label: "Communities Served", icon: MapPin },
  { end: 10000, suffix: "+", label: "Meals Distributed", icon: Heart },
];

const achievements = [
  {
    icon: TrendingUp,
    title: "Growing Impact",
    description:
      "From our first outreach to over 40 programs, our impact continues to grow each year. Every donation extends our reach to more families who need support.",
  },
  {
    icon: Award,
    title: "Community Trust",
    description:
      "Built deep trust within communities across Kano State. Local leaders and residents recognize PROF Charity as a reliable source of aid and support.",
  },
  {
    icon: HandHeart,
    title: "Volunteer Network",
    description:
      "Established a growing network of dedicated volunteers who generously give their time to organize, distribute, and deliver aid to those most in need.",
  },
  {
    icon: Globe,
    title: "Cross-Border Support",
    description:
      "Founded with international backing and local execution, bridging resources from the diaspora directly to the communities that need them in Northern Nigeria.",
  },
];

export function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charity/10 border border-charity/20 text-charity-dark text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Making a Real Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers speak louder than words. Here is the impact we have made together
            across communities in Northern Nigeria through dedicated charity work.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Our Achievements
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="card-hover flex gap-4 p-6 bg-gradient-to-r from-charity-light/10 to-white rounded-2xl border border-charity/5 shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-charity/10 rounded-xl flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-charity" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
