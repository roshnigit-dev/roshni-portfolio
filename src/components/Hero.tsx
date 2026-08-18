import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-24 pt-32"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-32 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Cloud • DevOps • Development
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-[var(--accent)]">Roshni</span>.
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-[var(--text-secondary)] sm:text-3xl">
            Cloud & DevOps Enthusiast
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            I build reliable cloud infrastructure and modern web applications
            using AWS, Terraform, React and CI/CD. I'm passionate about
            turning ideas into scalable, real-world solutions.
          </p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-[var(--accent-hover)]"
            >
              View My Work
            </a>

            <a
              href="/Roshni_Pandey_Resume.pdf"
              download="Roshni_Pandey_Resume.pdf"
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-semibold text-[var(--text)] transition hover:-translate-y-1 hover:bg-[var(--surface-hover)]"
            >
              Download Resume ↓
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {["AWS", "Terraform", "React", "TypeScript", "CI/CD"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-muted)]"
                >
                  {tech}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        {/* RIGHT CLOUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-80 w-80 items-center justify-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5"
          >
            <div className="absolute h-64 w-64 rounded-full border border-[var(--accent)]/10" />

            <div className="relative z-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center shadow-2xl">
              <div className="text-6xl">☁️</div>

              <h3 className="mt-4 text-lg font-bold text-[var(--text)]">
                Cloud Infrastructure
              </h3>

              <p className="mt-2 text-sm text-[var(--accent)]">
                AWS • Terraform • DevOps
              </p>
            </div>

            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-0 top-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-lg"
            >
              AWS
            </motion.span>

            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute right-0 top-20 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-lg"
            >
              Terraform
            </motion.span>

            <span className="absolute bottom-10 left-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-lg">
              CI/CD
            </span>

            <span className="absolute bottom-4 right-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] shadow-lg">
              React
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}