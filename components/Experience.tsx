"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 30%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <section ref={sectionRef} id="experience" className="section-container py-24">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 110, damping: 20 }}
      >
        Experience
      </motion.h2>

      <div className="relative mt-12 pl-8">
        <div className="absolute left-2 top-0 h-full w-[2px] bg-[var(--border)]" />
        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className="absolute left-2 top-0 h-full w-[2px] bg-[var(--accent-primary)]"
        />

        <div className="space-y-10">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 100, damping: 18 }}
            >
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-[var(--accent-primary)]" />
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-[var(--font-syne)] text-2xl">{item.role}</h3>
                <p className="mt-1 text-sm text-[var(--accent-primary)]">
                  {item.company} • {item.dates}
                </p>
                <ul className="muted-text mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
