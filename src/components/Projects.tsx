import { motion } from "framer-motion";

const projects = [
  {
    title: "CloudGuardian AI",
    category: "Cloud & DevOps",
    description:
      "A production-focused cloud infrastructure project built with AWS and Terraform, exploring monitoring, automation, infrastructure as code and reliable cloud deployment practices.",
    technologies: ["AWS", "Terraform", "React", "TypeScript", "CI/CD"],
    github: "https://github.com/roshnigit-dev/CloudGuardian-AI",
    featured: true,
  },
  {
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A modern responsive developer portfolio built to showcase my cloud, DevOps and software development journey, projects and technical skills.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    featured: false,
  },
  {
    title: "CI/CD Pipeline",
    category: "DevOps & Automation",
    description:
      "An automated CI/CD workflow designed to streamline application build, testing and deployment while following modern DevOps practices.",
    technologies: ["GitHub Actions", "Git", "CI/CD", "AWS"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[var(--text)] sm:text-4xl">
            Things I've built.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">
            Practical projects where I've explored cloud infrastructure,
            automation, application development and modern technologies.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-7 ${
                project.featured
                  ? "border-[var(--accent)]/30 bg-[var(--accent)]/5"
                  : "border-[var(--border)] bg-[var(--surface)]"
              }`}
            >
              <div className="absolute left-0 right-0 top-0 h-1 bg-[var(--accent)] opacity-70" />

              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                {project.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-[var(--text)]">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-[var(--text-muted)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-[var(--border)] pt-5">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-hover)]"
                  >
                    View on GitHub
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                ) : (
                  <span className="text-sm font-medium text-[var(--accent)]">
                    View Project →
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}