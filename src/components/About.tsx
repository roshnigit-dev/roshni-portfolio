export default function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Building with curiosity & purpose.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

          {/* About */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-lg leading-8 text-slate-300">
              I'm an MCA student and aspiring Cloud & DevOps professional
              who enjoys building practical technology solutions.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My journey started with web development and gradually moved
              toward cloud computing, infrastructure automation and
              deployment. I enjoy understanding how applications work
              behind the scenes and how they can be made more reliable,
              scalable and secure.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Currently, I'm focused on strengthening my AWS, Terraform,
              CI/CD and modern React skills while building projects that
              solve real-world problems.
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-slate-500">Currently learning</p>
              <p className="mt-2 font-semibold text-white">
                AWS & Cloud Architecture
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-slate-500">Building</p>
              <p className="mt-2 font-semibold text-white">
                CloudGuardian AI
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-slate-500">Focus</p>
              <p className="mt-2 font-semibold text-white">
                Cloud • DevOps • Automation
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}