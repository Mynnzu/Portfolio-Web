"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { skills } from "@/lib/data";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "2+", label: "Years Learning" },
  { value: "12+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 } as any,
  },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0.6, 0]);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden py-28 md:py-36">
      {/* Animated background glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full"
        style={{
          y: bgY,
          opacity: glowOpacity,
          background:
            "radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, rgba(124,58,237,0.04) 50%, transparent 80%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-primary)]">
            Get to know me
          </span>
          <h2 className="section-title">About</h2>
        </motion.div>

        {/* Two‑column layout */}
        <div className="grid items-start gap-14 lg:grid-cols-5">
          {/* Left – narrative */}
          <div className="lg:col-span-2">
            <motion.p
              className="text-base leading-8 text-[var(--text-muted)]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
            >
              I&apos;m a passionate junior software developer from Malaysia who
              thrives on turning complex problems into elegant, user-friendly
              digital experiences. I care deeply about clean architecture, real
              user impact, and shipping products that genuinely help people.
            </motion.p>

            <motion.p
              className="mt-5 text-base leading-8 text-[var(--text-muted)]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 90, damping: 18 }}
            >
              When I&apos;m not coding, you&apos;ll find me exploring AI tools,
              contributing to open-source, or designing intuitive interfaces
              that bridge technology and everyday life.
            </motion.p>

            {/* Accent callout */}
            <motion.div
              className="mt-8 rounded-xl border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/5 px-5 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 18 }}
            >
              <p className="text-sm font-medium text-[var(--accent-primary)]">
                🚀 Currently building: AI-powered apps that solve real problems
                for the Malaysian community.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="group rounded-xl border border-[var(--border)] bg-white/[0.02] px-4 py-5 text-center backdrop-blur-sm transition-colors duration-300 hover:border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/5"
                  variants={skillVariants}
                  whileHover={{ y: -3 }}
                >
                  <span className="block font-[var(--font-syne)] text-2xl font-bold text-[var(--accent-primary)]">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right – skills grid */}
          <div className="lg:col-span-3">
            <motion.h3
              className="mb-6 font-[var(--font-syne)] text-lg font-semibold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
            >
              Tech Stack
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:border-transparent"
                  variants={skillVariants}
                  whileHover={{ y: -4, scale: 1.03 }}
                  style={
                    {
                      "--skill-color": skill.color,
                    } as React.CSSProperties
                  }
                >
                  {/* Hover glow background */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${skill.color}15, transparent 70%)`,
                      border: `1px solid ${skill.color}40`,
                      borderRadius: "0.75rem",
                    }}
                  />

                  <div className="relative z-10 flex items-center gap-3">
                    {/* Icon circle */}
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm transition-shadow duration-300 group-hover:shadow-lg"
                      style={{
                        backgroundColor: `${skill.color}18`,
                        color: skill.color,
                        boxShadow: "none",
                      }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Extra note */}
            <motion.p
              className="mt-6 text-xs text-[var(--text-muted)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              …and always picking up new tools along the way.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
