"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Target,
  Eye,
  Users,
  UtensilsCrossed,
  BookOpen,
  Stethoscope,
  Home,
} from "lucide-react";
import Image from "next/image";

const programs = [
  {
    icon: UtensilsCrossed,
    title: "Food Distribution",
    description:
      "Providing essential food supplies and packaged meals to families and individuals in underserved communities across Kano State, ensuring no one goes hungry.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Support",
    description:
      "Supporting community health initiatives and providing medical aid to those who cannot afford proper healthcare in rural areas of Northern Nigeria.",
  },
  {
    icon: BookOpen,
    title: "Educational Aid",
    description:
      "Distributing learning materials, school supplies, and supporting educational opportunities for children from disadvantaged backgrounds in the community.",
  },
  {
    icon: Home,
    title: "Community Relief",
    description:
      "Providing essential household items, clothing, and relief materials to displaced families and vulnerable community members during critical times.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charity/10 border border-charity/20 text-charity-dark text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded by a visionary professor with a deep love for his people, PROF
            Charity &amp; Care Foundation is a beacon of hope for communities in
            Northern Nigeria.
          </p>
        </motion.div>

        {/* About Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Founder & Handler Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Professor (Founder) Card */}
              <div className="bg-gradient-to-br from-charity-light/40 to-white rounded-2xl p-5 border border-charity/10 shadow-sm">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/images/team/handler.jpg"
                    alt="The Professor - Founder and Funder of PROF Charity & Care Foundation"
                    fill
                    className="object-cover object-center"
                    sizes="200px"
                  />
                </div>
                <h3 className="font-bold text-foreground text-base">The Professor</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Founder &amp; Funder
                </p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  A visionary philanthropist whose generosity and dedication to humanitarian causes
                  has touched thousands of lives across Northern Nigeria.
                </p>
              </div>

              {/* Country Coordinator Card */}
              <div className="bg-gradient-to-br from-warm-light/40 to-white rounded-2xl p-5 border border-warm/10 shadow-sm mt-8">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/images/team/founder.jpg"
                    alt="Country Coordinator - PROF Charity Nigeria Operations"
                    fill
                    className="object-cover object-top"
                    sizes="200px"
                  />
                </div>
                <h3 className="font-bold text-foreground text-base">Country Coordinator</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Nigeria Operations Lead
                </p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  The dedicated professional managing all on-ground operations,
                  ensuring every outreach reaches those who need it most across Kano.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-charity/5 to-charity-light/20 rounded-2xl p-6 md:p-8 border border-charity/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-charity rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To alleviate suffering and improve the quality of life for vulnerable
                communities in Northern Nigeria through sustainable charity programs,
                food distribution, healthcare support, and educational empowerment
                initiatives. We believe that every person deserves dignity, hope, and
                the opportunity to thrive regardless of their circumstances.
              </p>
            </div>

            <div className="bg-gradient-to-r from-warm/5 to-warm-light/20 rounded-2xl p-6 md:p-8 border border-warm/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-warm rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A Northern Nigeria where every community has access to basic necessities,
                children can pursue education without barriers, and families are empowered
                to build better futures. We envision a society rooted in compassion,
                self-reliance, and mutual support that extends beyond charity to lasting
                community transformation.
              </p>
            </div>

            <div className="bg-gradient-to-r from-charity/5 to-white rounded-2xl p-6 md:p-8 border border-charity/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-charity-dark rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Values</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  "Compassion",
                  "Integrity",
                  "Transparency",
                  "Community First",
                  "Dignity",
                  "Sustainability",
                ].map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-charity rounded-full flex-shrink-0" />
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            What We Do
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="card-hover bg-gradient-to-b from-white to-charity-light/10 rounded-2xl p-6 border border-charity/5 shadow-sm group"
              >
                <div className="w-12 h-12 bg-charity/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-charity group-hover:shadow-lg group-hover:shadow-charity/20 transition-all duration-300">
                  <program.icon className="w-6 h-6 text-charity group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {program.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
