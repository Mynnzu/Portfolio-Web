"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-container py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="section-title">About</h2>
          <p className="muted-text mt-5 max-w-xl leading-8">
            I build robust digital products where UX quality meets systems-level thinking. My focus
            is end-to-end delivery: architecture, implementation, observability, and continuous
            improvement through real user feedback.
          </p>
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 110, damping: 19 }}
            className="mt-6 text-sm text-[var(--accent-primary)]"
          >
            Currently building: intelligent developer workflow tools for faster shipping.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card rounded-xl p-3 text-sm"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 110, damping: 18 }}
            >
              <span className="mr-2">{skill.icon}</span>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
