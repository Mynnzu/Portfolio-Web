"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const EMAIL = "muhaiminnabdul@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Message sent. Thanks for reaching out.");
    event.currentTarget.reset();
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <motion.section
      id="contact"
      className="section-container py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 105, damping: 20 }}
    >
      <h2 className="section-title">Contact</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6">
          <label className="mb-1 block text-sm muted-text">Name</label>
          <input
            required
            type="text"
            className="mb-4 w-full rounded-md border bg-transparent px-3 py-2 outline-none transition focus:border-[var(--accent-primary)]"
          />
          <label className="mb-1 block text-sm muted-text">Email</label>
          <input
            required
            type="email"
            className="mb-4 w-full rounded-md border bg-transparent px-3 py-2 outline-none transition focus:border-[var(--accent-primary)]"
          />
          <label className="mb-1 block text-sm muted-text">Message</label>
          <textarea
            required
            rows={5}
            className="mb-5 w-full rounded-md border bg-transparent px-3 py-2 outline-none transition focus:border-[var(--accent-primary)]"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-md bg-[var(--accent-primary)] px-5 py-2 font-medium text-black"
          >
            Send Message
          </motion.button>
        </form>

        <div className="glass-card rounded-2xl p-6">
          <p className="muted-text text-sm">Email</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a href={`mailto:${EMAIL}`} className="text-[var(--text-primary)]">
              {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              className="rounded-md border border-[var(--border)] px-3 py-1 text-xs text-[var(--accent-primary)]"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="mt-8 flex gap-4">
            <SocialLink href="https://github.com" label="GitHub" icon="<>"/>
            <SocialLink href="https://linkedin.com" label="LinkedIn" icon="in"/>
            <SocialLink href="https://x.com" label="Twitter/X" icon="X"/>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
    >
      <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px]">
        {icon}
      </span>
      {label}
    </a>
  );
}
