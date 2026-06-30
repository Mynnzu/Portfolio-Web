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

      <div className="section-container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-2xl">
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
            className="group font-[var(--font-syne)] text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
          >
            <span
              className="name-glitch relative inline-block transition-all duration-300 group-hover:[text-shadow:0_0_24px_rgba(0,212,255,0.45)]"
              data-text="Abdul Muhaimin"
            >
              Abdul Muhaimin
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.02, 1],
              textShadow: [
                "0 0 12px rgba(124,255,107,0.3)",
                "0 0 24px rgba(124,255,107,0.6)",
                "0 0 12px rgba(124,255,107,0.3)"
              ],
              y: 0 
            }}
            transition={{ 
              opacity: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
              scale: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
              textShadow: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
              y: { delay: 0.08, type: "spring", stiffness: 120, damping: 20 }
            }}
            className="mt-3 font-[var(--font-syne)] text-sm font-extrabold uppercase tracking-[0.2em] text-[#7cff6b] md:text-base"
          >
            Seeking internship opportunities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, type: "spring", stiffness: 100, damping: 20 }}
            className="mt-4 min-h-10 font-[var(--font-syne)] text-2xl text-[var(--accent-primary)] md:text-4xl"
          >
            <TypingText key={title} text={title} />
            <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-[var(--accent-primary)] align-middle" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, type: "spring", stiffness: 110, damping: 20 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-md bg-[var(--accent-primary)] px-6 py-3 font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,255,0.35)]"
            >
              View My Work
            </a>
            <a
              href="/my-resume.pdf"
              className="rounded-md border border-[var(--border)] px-6 py-3 font-medium text-[var(--text-primary)] transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              download
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative hidden justify-center lg:flex"
        >
          <div className="relative aspect-square w-full max-w-[390px] overflow-hidden rounded-full border border-[rgba(0,229,255,0.2)] bg-white/[0.03] shadow-xl shadow-black/25">
            {/* Status badge */}
            <div className="absolute top-4 left-4 z-40 inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,255,0.35)] bg-black/55 px-3 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(0,229,255)] opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[rgb(0,229,255)]" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[rgb(204,250,255)]">
                Open to internship · 2025
              </span>
            </div>

            {/* Glossy overlay */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40" />
            
            {/* Profile Image Container */}
            <div className="absolute inset-0 z-10 group/img overflow-hidden">
              <img 
                src="/profile.jpeg" 
                alt="Abdul Muhaimin"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover/img:scale-[1.03]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = parent.querySelector('.fallback-placeholder');
                    if (fallback) fallback.classList.remove('hidden');
                  }
                }}
              />
              
              {/* Inner vignette for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/50 via-transparent to-transparent opacity-60" />
              
              {/* Fallback Placeholder */}
              <div className="fallback-placeholder absolute inset-0 hidden flex-col items-center justify-center bg-[#1a1a24]">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent-primary)]/10">
                  <svg className="h-10 w-10 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="font-[var(--font-syne)] text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  Image Not Found
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)] opacity-60">
                  Save image as public/profile.jpeg
                </p>
              </div>
            </div>

            {/* Frame ring */}
            <div className="pointer-events-none absolute inset-0 z-30 rounded-full ring-1 ring-inset ring-[rgba(0,229,255,0.16)]" />
          </div>

          {/* Decorative ring outside frame */}
          <div className="pointer-events-none absolute -inset-3 z-0 rounded-full border border-[rgba(0,229,255,0.16)]" />

          {/* Background decoration */}
          <div className="absolute -z-10 h-full w-full translate-x-3 translate-y-3 rounded-full bg-[var(--accent-primary)]/5 blur-[1px]" />
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
