import { motion } from "framer-motion";

const experiences = [
  {
    type: "Education",
    title: "Master of Computer Applications",
    organization: "SB Jain Institute, Nagpur",
    period: "2025 — Present",
    description:
      "Pursuing MCA with a focus on software development, cloud technologies, databases and modern computing concepts.",
  },
  {
    type: "Experience",
    title: "Full Stack Developer",
    organization: "Aditva Technologies",
    period: "Sep 2024 — May 2025",
    description:
      "Worked on developing and maintaining web applications across frontend and backend components, implementing responsive interfaces, integrating APIs and working with databases and modern development tools.",
  },
  {
    type: "Focus",
    title: "Cloud & DevOps",
    organization: "Continuous Learning",
    period: "Present",
    description:
      "Building hands-on experience with AWS, Terraform, CI/CD, cloud networking, infrastructure as code and reliable cloud architecture.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[var(--text)] sm:text-4xl">
            My journey so far.
          </h2>
        </motion.div>

        <div className="relative">

          {/* Timeline */}
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-[var(--border)]" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg)]">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:-translate-y-1 hover:border-[var(--accent)]/30">

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {item.type}
                    </span>

                    <span className="text-sm text-[var(--text-muted)]">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-[var(--text)]">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-medium text-[var(--text-secondary)]">
                    {item.organization}
                  </p>

                  <p className="mt-4 leading-7 text-[var(--text-muted)]">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}