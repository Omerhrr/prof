"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus({ type: "success", message: data.message });
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-charity-light/10 to-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charity/10 border border-charity/20 text-charity-dark text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Join Our Mission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or simply learn more about our work,
            we would love to hear from you. Together we can do more.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Reach Out to Us
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              PROF Charity &amp; Care Foundation is always open to partnerships,
              donations, and volunteers who share our vision of a better Northern
              Nigeria. Every act of kindness, no matter how small, creates ripples of
              change that transform entire communities.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  detail: "Kano State, Northern Nigeria",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  detail: "+234 (0) 800 PROF CARE",
                },
                {
                  icon: Mail,
                  title: "Email",
                  detail: "info@profcharity.org",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-charity/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-charity" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="mt-8 bg-gradient-to-br from-charity to-charity-dark rounded-2xl p-6 text-white shadow-xl shadow-charity/25">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 fill-white" />
                <h4 className="text-lg font-bold">Make a Difference Today</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Your support — whether through donations, volunteering, or spreading
                the word — directly impacts the lives of thousands of families across
                Northern Nigeria. Every contribution counts.
              </p>
              <Button
                className="bg-white text-charity-dark hover:bg-white/90 shadow-lg rounded-xl font-semibold"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Send className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div
              id="contact-form"
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-charity/5"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>

              {/* Success / Error Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 flex items-center gap-3 p-4 rounded-xl text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  {submitStatus.message}
                </motion.div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-charity/30 focus:border-charity transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-charity/30 focus:border-charity transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-charity/30 focus:border-charity transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-charity/30 focus:border-charity transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="Donation Inquiry">Donation Inquiry</option>
                    <option value="Volunteer Opportunity">Volunteer Opportunity</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us how you would like to help..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-charity/30 focus:border-charity transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-charity hover:bg-charity-dark text-white shadow-lg shadow-charity/25 hover:shadow-charity/40 rounded-xl font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
