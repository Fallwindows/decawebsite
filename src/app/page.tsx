import { CLUSTERS } from "@/data/clusters";
import { EVENTS } from "@/data/events";
import { ClusterPicker } from "@/components/cluster-picker";
import { Icon } from "@/components/icon";

const CONFERENCE_LADDER = [
  {
    name: "Chapter",
    detail: "Practice and local qualifiers. Where most members test an event for the first time.",
  },
  {
    name: "District",
    detail: "Smaller regional conferences. Often the first time you face judges outside your school.",
  },
  {
    name: "State",
    detail: "SCDC. Qualifiers here advance to nationals and earn state titles.",
  },
  {
    name: "Nationals",
    detail: "NCC in the biggest city available to you. International recognition if you place.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(245,197,24,0.16),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-deca-gold text-slate-950">
              <Icon name="trophy" className="h-5 w-5" />
            </span>
            <span className="text-sm font-bold tracking-[0.18em] text-white">MHS DECA</span>
          </div>
          <nav className="flex items-center gap-5 text-sm text-slate-400">
            <a href="#picker" className="transition hover:text-white">
              Find your event
            </a>
            <a href="#clusters" className="hidden transition hover:text-white sm:block">
              Clusters
            </a>
            <a href="#how-it-works" className="hidden transition hover:text-white sm:block">
              How it works
            </a>
          </nav>
        </header>

        <section className="py-16 text-center sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-deca-gold">
            New member guide
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
            You do not have to know which event to join yet.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
            DECA has hundreds of events and it is overwhelming from the start. Answer
            five questions and we will narrow it down to the three that actually fit you.
          </p>
        </section>

        <ClusterPicker />

        <section id="clusters" className="scroll-mt-8 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-white">The seven career clusters</h2>
          <p className="mt-2 max-w-2xl text-slate-400">
            Every DECA event lives inside one of these. If you know your cluster, you
            already know what your job market looks like after graduation.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {CLUSTERS.map((cluster) => {
              const count = EVENTS.filter((event) => event.cluster === cluster.id).length;
              return (
                <div
                  key={cluster.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-deca-gold/10 text-deca-gold">
                      <Icon name={cluster.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white">
                        {cluster.name}
                        <span className="ml-2 text-xs font-normal text-slate-500">
                          {count} event{count === 1 ? "" : "s"}
                        </span>
                      </h3>
                      <p className="mt-1 text-sm font-medium text-deca-gold/90">{cluster.tagline}</p>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                        {cluster.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {cluster.exampleRoles.map((role) => (
                          <span
                            key={role}
                            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-8 pb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white">How competing works</h2>
          <p className="mt-2 max-w-2xl text-slate-400">
            You compete at one conference, then advance if you place. You do not have to
            win at every level to get value out of it.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONFERENCE_LADDER.map((conference, index) => (
              <div
                key={conference.name}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="text-xs font-bold text-deca-gold">0{index + 1}</span>
                <h3 className="mt-1 text-base font-semibold text-white">{conference.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{conference.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-deca-gold/25 bg-deca-gold/[0.06] p-6">
            <h3 className="text-lg font-semibold text-white">New member advice</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
              <li>Written events are the lowest pressure way to try competing for the first time.</li>
              <li>You only need one partner to enter a team event. Officers usually help pair people.</li>
              <li>Ask your advisor what your school actually sends before you fall in love with an event.</li>
              <li>Nobody expects a first-year member to win. They expect preparation.</li>
            </ul>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-slate-500">
          <p>
            MHS DECA event finder. Built for new members deciding where to start.
          </p>
        </footer>
      </div>
    </main>
  );
}