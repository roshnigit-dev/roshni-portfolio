import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Cloud",
    description: "Building and managing cloud infrastructure.",
    skills: ["AWS", "EC2", "S3", "VPC", "CloudWatch", "IAM"],
  },
  {
    title: "DevOps",
    description: "Automating deployments and infrastructure.",
    skills: ["Terraform", "Git", "GitHub", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Development",
    description: "Creating modern and responsive applications.",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Database & Tools",
    description: "Working with data and developer tooling.",
    skills: ["MySQL", "PostgreSQL", "Python", "VS Code", "REST APIs"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[var(--text)] sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">
            A growing toolkit focused on cloud infrastructure, automation,
            modern development and reliable systems.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7"
            >
              <h3 className="text-xl font-semibold text-[var(--text)]">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--text-secondary)] transition group-hover:border-[var(--accent)]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}