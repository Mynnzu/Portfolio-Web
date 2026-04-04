"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="section-container py-24">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 110, damping: 20 }}
      >
        Projects
      </motion.h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="group relative rounded-2xl p-[1px]"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 105, damping: 19 }}
            whileHover={{ rotateX: -4, rotateY: 4, y: -5 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/65 via-transparent to-[#7cff6b]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="glass-card relative rounded-2xl p-6">
              <h3 className="font-[var(--font-syne)] text-2xl">{project.name}</h3>
              <p className="muted-text mt-3 text-sm leading-7">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--accent-primary)] hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
