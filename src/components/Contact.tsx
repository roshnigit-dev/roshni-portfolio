import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] p-8 sm:p-12"
        >

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <div className="relative max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[var(--text)] sm:text-5xl">
              Let's build something great.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
              I'm always interested in connecting with people working on
              cloud, technology and innovative projects. If you'd like to
              collaborate or discuss an opportunity, feel free to reach out.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-7"
            >
              <p className="text-sm text-[var(--text-muted)]">
                Email me at
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=roshnipandey8329@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg font-semibold text-[var(--accent)] transition hover:text-[var(--accent-hover)]"
              >
                roshnipandey8329@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=roshnipandey8329@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-[var(--accent-hover)]"
              >
                Email Me →
              </a>

              <a
                href="https://www.linkedin.com/in/roshani-pandey01"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-semibold text-[var(--text)] transition hover:-translate-y-1 hover:bg-[var(--surface-hover)]"
              >
                LinkedIn ↗
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}