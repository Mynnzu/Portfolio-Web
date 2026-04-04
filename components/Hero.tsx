"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { titleCycle } from "@/lib/data";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const title = useMemo(() => titleCycle[titleIndex], [titleIndex]);

  useEffect(() => {
    const switchTimer = setTimeout(() => {
      setTitleIndex((prev) => (prev + 1) % titleCycle.length);
    }, 2500);

    return () => {
      clearTimeout(switchTimer);
    };
  }, [titleIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="mesh-overlay absolute inset-0 opacity-35" />
      <div className="absolute inset-0">
        {[...Array(14)].map((_, idx) => (
          <span
            key={idx}
            className="absolute h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-primary)]/70"
            style={{
              left: `${(idx * 7) % 100}%`,
              top: `${(idx * 13) % 100}%`,
              animationDelay: `${idx * 0.18}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="mb-3 text-sm uppercase tracking-[0.28em] text-[var(--accent-primary)]"
        >
          Crafting software with precision
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, type: "spring", stiffness: 115, damping: 21 }}
          className="group font-[var(--font-syne)] text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          <span
            className="name-glitch relative inline-block transition-all duration-300 group-hover:[text-shadow:0_0_24px_rgba(0,212,255,0.45)]"
            data-text="Abdul Muhaimin"
          >
            Abdul Muhaimin
          </span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
          className="mt-4 min-h-10 font-[var(--font-syne)] text-2xl text-[var(--accent-primary)] md:text-4xl"
        >
          <TypingText key={title} text={title} />
          <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-[var(--accent-primary)] align-middle" />
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 110, damping: 20 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-md bg-[var(--accent-primary)] px-6 py-3 font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,255,0.35)]"
          >
            View My Work
          </a>
          <a
            href="/cv.pdf"
            className="rounded-md border border-[var(--border)] px-6 py-3 font-medium text-[var(--text-primary)] transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            download
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-[var(--text-muted)]"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
      >
        SCROLL
      </motion.a>
    </section>
  );
}

function TypingText({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typer = setInterval(() => {
      setCount((prev) => {
        if (prev >= text.length) {
          clearInterval(typer);
          return prev;
        }
        return prev + 1;
      });
    }, 75);

    return () => clearInterval(typer);
  }, [text]);

  return <>{text.slice(0, count)}</>;
}
