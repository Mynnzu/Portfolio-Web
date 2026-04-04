"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("#about");

  useEffect(() => {
    let lastScrollY = 0;
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      const current = window.scrollY;
      setIsVisible(current < lastScrollY || current < 50);
      lastScrollY = current;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 180) {
          setActiveSection(`#${id}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = useMemo(
    () => (href: string) =>
      `text-sm transition-colors ${
        activeSection === href ? "text-[var(--accent-primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
      }`,
    [activeSection]
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -90, opacity: isVisible ? 1 : 0.85 }}
      transition={{ type: "spring", stiffness: 130, damping: 22 }}
      className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(10,10,15,0.78)] backdrop-blur-xl"
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#home" className="font-[var(--font-syne)] text-lg font-bold tracking-wide">
          AC
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className={linkClass(item.href)} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-[var(--text-primary)]" />
            <span className="block h-0.5 w-6 bg-[var(--text-primary)]" />
            <span className="block h-0.5 w-6 bg-[var(--text-primary)]" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
            className="glass-card absolute right-0 top-16 w-64 rounded-bl-2xl border-l border-t p-6 md:hidden"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={linkClass(item.href)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
