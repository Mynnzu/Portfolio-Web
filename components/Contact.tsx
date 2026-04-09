"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const EMAIL = "muhaiminnabdul@gmail.com";
const FORMSPREE_URL = "https://formspree.io/f/mgopqqrk";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        // Formspree returns { error: "..." } or { errors: [{message:"..."}] }
        const msg =
          json?.error ||
          json?.errors?.[0]?.message ||
          `Error ${res.status}: ${res.statusText}`;
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error — check your connection.");
      setStatus("error");
    }
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
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-primary)]">
          Let&apos;s talk
        </span>
        <h2 className="section-title">Contact</h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Form */}
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6">
          <div className="mb-4">
            <label className="mb-1 block text-sm text-[var(--text-muted)]">Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none transition placeholder:text-[var(--text-muted)]/50 focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/30"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm text-[var(--text-muted)]">Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none transition placeholder:text-[var(--text-muted)]/50 focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/30"
            />
          </div>

          <div className="mb-5">
            <label className="mb-1 block text-sm text-[var(--text-muted)]">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="What's on your mind?"
              className="w-full resize-none rounded-md border border-[var(--border)] bg-transparent px-3 py-2.5 text-sm outline-none transition placeholder:text-[var(--text-muted)]/50 focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/30"
            />
          </div>

          {/* Feedback messages */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-lg border border-[#7cff6b]/30 bg-[#7cff6b]/10 px-4 py-3 text-sm text-[#7cff6b]"
            >
              ✅ Message sent! I&apos;ll get back to you soon.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
            >
              ❌ {errorMsg || "Something went wrong. Please try again or email me directly."}
            </motion.p>
          )}

          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--accent-primary)] px-5 py-2.5 font-medium text-black transition-opacity disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>

        {/* Contact info */}
        <div className="glass-card rounded-2xl p-6">
          <p className="text-sm text-[var(--text-muted)]">📬 Email me directly</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-[var(--text-primary)] transition hover:text-[var(--accent-primary)]"
            >
              {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              className="rounded-md border border-[var(--border)] px-3 py-1 text-xs text-[var(--accent-primary)] transition hover:border-[var(--accent-primary)]/60"
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>

          <p className="mt-6 text-sm text-[var(--text-muted)]">
            I&apos;m currently{" "}
            <span className="font-medium text-[#7cff6b]">open to internship opportunities</span>.
            Feel free to reach out if you&apos;d like to collaborate or just have a chat!
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <SocialLink href="https://github.com/mynnzu" label="GitHub" icon="<>" />
            <SocialLink href="https://linkedin.com" label="LinkedIn" icon="in" />
            <SocialLink href="https://x.com" label="Twitter/X" icon="X" />
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
