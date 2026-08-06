import { CalendarDays, Radio, ShieldCheck, Trophy } from "lucide-react";

const sports = [
  {
    name: "Cricket",
    description: "Follow major international series, domestic leagues, and live match updates.",
    events: ["IPL & domestic leagues", "International cricket", "T20, ODI & Test matches"],
  },
  {
    name: "Football",
    description: "Keep up with leading football competitions and match-day action from around the world.",
    events: ["Major club leagues", "International fixtures", "Tournament coverage"],
  },
  {
    name: "Tennis",
    description: "Stay connected to year-round tennis events, from Grand Slams to tour matches.",
    events: ["Grand Slam events", "ATP & WTA tours", "Live match schedules"],
  },
];

export default function SportsPage() {
  return (
    <main className="empire-theme min-h-screen text-white">
      <section className="border-b border-yellow-500/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-yellow-500">EMPIRE Sports</p>
          <h1 className="mt-5 text-4xl font-black uppercase sm:text-6xl">
            Every Match. <span className="text-yellow-700">One Empire.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
            Discover sports coverage built for fans who want a smooth, reliable way to follow the action.
          </p>
          <a
            href="https://wa.me/918287832260?text=I%20WANT%20ID%20HERE.."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-md bg-yellow-700 px-7 py-3 text-sm font-black uppercase text-black shadow-lg shadow-yellow-950/30 transition hover:bg-yellow-300"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [Trophy, "Major Sports", "Cricket, football, tennis, and more in one place."],
              [Radio, "Live Focus", "Stay close to live fixtures and current sporting action."],
              [ShieldCheck, "Reliable Support", "Clear guidance from a team that is here to help."],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof Trophy;
              return (
                <article key={title as string} className="rounded-xl border border-yellow-500/20 bg-zinc-950 p-6">
                  <FeatureIcon className="h-7 w-7 text-yellow-500" />
                  <h2 className="mt-5 text-lg font-black uppercase text-white">{title as string}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{text as string}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">Sports Coverage</p>
              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Choose your game</h2>
            </div>
            <CalendarDays className="hidden h-10 w-10 text-yellow-500 sm:block" />
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {sports.map((sport, index) => (
              <article key={sport.name} className="rounded-xl border border-yellow-500/20 bg-black p-6 shadow-2xl shadow-yellow-950/20">
                <p className="text-sm font-black text-yellow-500">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-black uppercase text-white">{sport.name}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{sport.description}</p>
                <ul className="mt-6 space-y-3 border-t border-yellow-500/20 pt-5 text-sm text-zinc-300">
                  {sport.events.map((event) => <li key={event}>{event}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-yellow-500/20 bg-zinc-950 p-7 text-center sm:p-10">
            <h2 className="text-2xl font-black uppercase text-white sm:text-3xl">Ready for the next match?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Contact the EMPIRE support team for account and platform guidance. Please participate responsibly and only where permitted by local law.
            </p>
            <a href="https://wa.me/918287832260?text=I%20WANT%20ID%20HERE.." target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-md bg-yellow-700 px-7 py-3 text-sm font-black uppercase text-black transition hover:bg-yellow-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
