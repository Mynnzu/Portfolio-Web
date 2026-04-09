"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "start 40%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -40 : 40, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <div ref={cardRef} className="relative">
      {/* Timeline dot with ripple */}
      <motion.span
        className="absolute -left-[31px] top-6 flex h-4 w-4 items-center justify-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, type: "spring", stiffness: 200, damping: 15 }}
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-primary)] opacity-40" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--accent-primary)]" />
      </motion.span>

      {/* Card */}
      <motion.div
        style={{ opacity, x, scale }}
        className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-500 hover:border-[var(--accent-primary)]/30"
      >
        {/* Animated left accent border on hover */}
        <motion.div
          className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-[var(--accent-primary)] to-[#7c3aed] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Glow on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "radial-gradient(ellipse at top left, rgba(0,212,255,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-[var(--font-syne)] text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-[var(--accent-primary)] md:text-2xl">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--accent-primary)]/80">
                {item.company}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)] transition-colors duration-300 group-hover:border-[var(--accent-primary)]/30 group-hover:text-[var(--accent-primary)]">
              {item.dates}
            </span>
          </div>

          {/* Divider */}
          <div className="my-4 h-px w-full bg-gradient-to-r from-[var(--border)] via-[var(--accent-primary)]/20 to-transparent" />

          {/* Achievements */}
          <ul className="space-y-3">
            {item.achievements.map((achievement, i) => (
              <motion.li
                key={achievement}
                className="flex items-start gap-3 text-sm leading-7 text-[var(--text-muted)]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + i * 0.07, type: "spring", stiffness: 120, damping: 18 }}
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]/60" />
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 30%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <section ref={sectionRef} id="experience" className="section-container py-24">
      {/* Section header */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-primary)]">
          Where I&apos;ve been
        </span>
        <h2 className="section-title">Experience</h2>
      </motion.div>

      <div className="relative pl-8">
        {/* Timeline track */}
        <div className="absolute left-2 top-0 h-full w-[2px] rounded-full bg-[var(--border)]" />
        {/* Scroll-driven fill */}
        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className="absolute left-2 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-[var(--accent-primary)] to-[#7c3aed]"
        />

        <div className="space-y-10">
          {experience.map((item, index) => (
            <ExperienceCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
