import { Headphones, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const categories = [
  {
    name: "Live Casino",
    description: "Explore live-table entertainment with a premium, real-time atmosphere.",
    items: ["Live table games", "Interactive experiences", "Professional hosts"],
  },
  {
    name: "Slots & Instant Games",
    description: "Discover a varied collection of quick-play games and colourful themes.",
    items: ["Classic slots", "Modern game themes", "Quick-play options"],
  },
  {
    name: "Table Games",
    description: "Enjoy familiar table-game formats designed for a smooth online experience.",
    items: ["Card game varieties", "Wheel games", "Premium table selection"],
  },
];

export default function CasinoPage() {
  return (
    <main className="empire-theme min-h-screen text-white">
      <section className="border-b border-yellow-500/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-yellow-500">EMPIRE Casino</p>
          <h1 className="mt-5 text-4xl font-black uppercase sm:text-6xl">
            Enter the <span className="text-yellow-700">Empire.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
            A premium home for casino entertainment, with a polished experience and support when you need it.
          </p>
          <a href="https://wa.me/919315852784?text=I%20WANT%20ID%20HERE.." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-md bg-yellow-700 px-7 py-3 text-sm font-black uppercase text-black shadow-lg shadow-yellow-950/30 transition hover:bg-yellow-300">
            Get Started
          </a>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            <Feature icon={Sparkles} title="Premium Selection" text="A range of casino experiences designed to keep every session engaging." />
            <Feature icon={ShieldCheck} title="Responsible Play" text="Enjoy entertainment responsibly and only where it is legal for you." />
            <Feature icon={Headphones} title="Always Here to Help" text="Reach the EMPIRE team whenever you need practical account guidance." />
          </div>

          <div className="mt-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">Casino Categories</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Find your favourite table</h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {categories.map((category, index) => (
              <article key={category.name} className="rounded-xl border border-yellow-500/20 bg-black p-6 shadow-2xl shadow-yellow-950/20">
                <p className="text-sm font-black text-yellow-500">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-black uppercase text-white">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{category.description}</p>
                <ul className="mt-6 space-y-3 border-t border-yellow-500/20 pt-5 text-sm text-zinc-300">
                  {category.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-yellow-500/20 bg-zinc-950 p-7 text-center sm:p-10">
            <Trophy className="mx-auto h-9 w-9 text-yellow-500" />
            <h2 className="mt-4 text-2xl font-black uppercase text-white sm:text-3xl">Play thoughtfully</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
              Casino entertainment involves risk. You must be 18+ and responsible for ensuring that participation is permitted in your location.
            </p>
            <a href="https://wa.me/919315852784?text=I%20WANT%20ID%20HERE.." target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-md bg-yellow-700 px-7 py-3 text-sm font-black uppercase text-black transition hover:bg-yellow-300">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon: Icon, title, text }: { icon: typeof Sparkles; title: string; text: string }) {
  return (
    <article className="rounded-xl border border-yellow-500/20 bg-zinc-950 p-6">
      <Icon className="h-7 w-7 text-yellow-500" />
      <h2 className="mt-5 text-lg font-black uppercase text-white">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
    </article>
  );
}
