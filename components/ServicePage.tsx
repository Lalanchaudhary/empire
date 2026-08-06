import { BadgeCheck, Check, Headphones, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  benefits: string[];
  steps: string[];
  note: string;
};

export default function ServicePage({
  eyebrow,
  title,
  highlight,
  intro,
  benefits,
  steps,
  note,
}: ServicePageProps) {
  return (
    <main className="empire-theme min-h-screen text-white">
      <section className="border-b border-yellow-500/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-yellow-500">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-black uppercase sm:text-6xl">
            {title} <span className="text-yellow-700">{highlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">{intro}</p>
          <a href="https://wa.me/918287832260?text=I%20WANT%20ID%20HERE.." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-md bg-yellow-700 px-7 py-3 text-sm font-black uppercase text-black shadow-lg shadow-yellow-950/30 transition hover:bg-yellow-300">
            Contact Support
          </a>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            <Feature icon={<BadgeCheck className="h-7 w-7 text-yellow-500" />} title="Simple Process" text="Straightforward assistance from your first message through account guidance." />
            <Feature icon={<ShieldCheck className="h-7 w-7 text-yellow-500" />} title="Clear Support" text="A transparent experience with practical answers when you need them." />
            <Feature icon={<Headphones className="h-7 w-7 text-yellow-500" />} title="24/7 Assistance" text="Our support team is available to help with access and general questions." />
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <section className="rounded-xl border border-yellow-500/20 bg-black p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">Why EMPIRE</p>
              <h2 className="mt-3 text-3xl font-black uppercase">Built around your experience</h2>
              <ul className="mt-7 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-6 text-zinc-300">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-yellow-500/20 bg-zinc-950 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">Getting Started</p>
              <h2 className="mt-3 text-3xl font-black uppercase">Three easy steps</h2>
              <ol className="mt-7 space-y-5">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-sm leading-6 text-zinc-300">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-yellow-700 text-xs font-black text-black">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="mt-10 rounded-xl border border-yellow-500/20 bg-zinc-950 p-6 text-center text-sm leading-7 text-zinc-400">
            {note}
          </aside>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-xl border border-yellow-500/20 bg-zinc-950 p-6">
      {icon}
      <h2 className="mt-5 text-lg font-black uppercase text-white">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
    </article>
  );
}
