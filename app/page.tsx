import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import {
  BadgeCheck,
  Clock3,
  LockKeyhole,
  ShieldCheck,
  Star,
  Users,
  WalletCards,
} from "lucide-react";

const trustStats = [
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Trusted Platform",
    text: "EMPIRE offers a safe and reliable cricket ID experience.",
  },
  {
    icon: Users,
    value: "3M+",
    label: "Users",
    text: "Millions of active users trust EMPIRE for smooth access.",
  },
  {
    icon: WalletCards,
    value: "Fastest",
    label: "Withdrawal",
    text: "Quick payment support with a simple account process.",
  },
  {
    icon: Star,
    value: "Best",
    label: "Platform",
    text: "Designed for cricket, casino, and live gaming fans.",
  },
];

const whyChoose = [
  {
    title: "Instant Cricket ID Creation",
    text: "Get your cricket ID quickly without unnecessary delays.",
  },
  {
    title: "Safe & Secure Betting ID",
    text: "Your account, wallet, and access are protected with trusted support.",
  },
  {
    title: "Fast Login & Smooth Experience",
    text: "Enjoy seamless performance during live matches and casino sessions.",
  },
  {
    title: "All Major Cricket Matches Covered",
    text: "IPL, T20, ODI, Test matches, and more are available in one place.",
  },
  {
    title: "24/7 Customer Support",
    text: "Our team is always available to assist you.",
  },
];

const platformPoints = [
  "Live match updates",
  "Real-time odds",
  "Multiple cricket markets",
  "Smooth and fast interface",
];

const cricketEvents = [
  "Indian Premier League (IPL)",
  "T20 World Cup",
  "ODI and Test Matches",
  "Big Bash League (BBL)",
  "PSL, CPL, and more",
];

const aboutRows = [
  ["Platform Name", "EMPIRE Book ID"],
  ["Service Type", "Online Cricket ID Provider and Sports Access Platform"],
  ["Availability", "India Focused Users"],
  ["Supported Languages", "English, Hindi"],
  ["Registration Process", "Quick and Simple ID Creation"],
  ["Device Compatibility", "Mobile, Tablet, Desktop"],
  ["Sports Coverage", "Cricket, Football, Live Sports"],
  ["Payment Methods", "UPI, Net Banking, Wallet Services"],
  ["User Access", "Instant Login After ID Activation"],
  ["Support Service", "Round the Clock Assistance via WhatsApp and Call"],
];

const faqs = [
  {
    question: "How does one get a EMPIRE Online Cricket ID?",
    answer:
      "Contact the EMPIRE support team and share the required details to start your account setup.",
  },
  {
    question: "Is EMPIRE safe to bet through?",
    answer:
      "EMPIRE focuses on verified account access, secure support, and responsible use for eligible users.",
  },
  {
    question: "Which sports betting is possible on EMPIRE?",
    answer:
      "Users can follow cricket, football, tennis, and other major sports markets depending on availability.",
  },
  {
    question: "Does EMPIRE allow placing online live bets?",
    answer:
      "EMPIRE supports live match access and real-time gaming features through supported platforms.",
  },
];

export default function Home() {
  return (
    <main className="empire-theme min-h-screen bg-black text-white">
      <HeroCarousel />

      <section id="about" className="bg-black px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-yellow-700">
            EMPIRE Cricket ID Kya H?
          </p>
          <h1 className="mt-4 text-3xl font-black uppercase text-white sm:text-5xl">
            Your Trusted Source For EMPIRE Cricket ID
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-zinc-300 sm:text-base">
            Looking for a reliable online cricket ID to enjoy live cricket
            action? You are in the right place. EMPIRE provides fast, secure,
            and hassle-free cricket ID and betting ID services so you never
            miss a moment of the game.
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-zinc-400">
            Whether it is IPL, international matches, or domestic leagues, our
            platform helps you get started instantly with a verified cricket
            betting experience.
          </p>
          <a
            href="https://wa.me/918287832260?text=I%20WANT%20ID%20HERE.."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-md bg-yellow-600 px-7 py-3 text-sm font-black uppercase text-black shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-300"
          >
            Get ID Now
          </a>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white p-5 text-black shadow-2xl shadow-yellow-950/20"
                >
                  <Icon className="mx-auto h-10 w-10" />
                  <p className="mt-3 text-xl font-black uppercase">
                    {item.value}
                  </p>
                  <h2 className="text-sm font-black uppercase">{item.label}</h2>
                  <p className="mt-2 text-xs leading-5 text-zinc-600">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-700">
              Why Choose EMPIRE Cricket ID?
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">
              Fast access, strong support, smooth play
            </h2>
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              EMPIRE is created for players who want quick setup, steady
              service, and trusted support for cricket ID and casino ID access.
            </p>
          </div>

          <div className="space-y-5">
            {whyChoose.map((item) => (
              <article key={item.title} className="border-l-2 border-yellow-700 pl-5">
                <h3 className="text-lg font-black text-yellow-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-lg border border-yellow-500/20 bg-zinc-950 p-6">
          <h2 className="text-2xl font-black text-yellow-700">
            What is a EMPIRE Online Cricket ID?
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            A EMPIRE Online Cricket ID allows users to access live cricket
            platforms where they can follow matches, check odds, and
            participate in cricket-based betting activities. With our trusted
            service, getting a cricket betting ID is simple, quick, and
            reliable.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article>
              <h3 className="font-black text-white">
                How to Get Your Cricket ID
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Contact us via WhatsApp or our website.
              </p>
            </article>
            <article>
              <h3 className="font-black text-white">Share Basic Details</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Receive your cricket ID instantly after setup.
              </p>
            </article>
            <article>
              <h3 className="font-black text-white">
                Start Enjoying Live Cricket Action
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                No complicated process. No long waiting times.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-white sm:text-5xl">
            About <span className="text-yellow-700">EMPIRE Book ID:</span>
          </h2>

          <div className="mt-10 overflow-x-auto rounded-lg border border-yellow-900/60 bg-black shadow-2xl shadow-yellow-950/30">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-yellow-900/70 bg-yellow-950/40">
                  <th className="w-1/2 px-6 py-5 text-center text-base font-black text-yellow-500">
                    Category
                  </th>
                  <th className="w-1/2 px-6 py-5 text-center text-base font-black text-yellow-500">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {aboutRows.map(([category, detail]) => (
                  <tr
                    key={category}
                    className="border-b border-zinc-800 last:border-b-0 odd:bg-zinc-950 even:bg-black"
                  >
                    <td className="border-r border-zinc-800 px-6 py-5 text-center font-black text-white">
                      {category}
                    </td>
                    <td className="px-6 py-5 text-center text-zinc-200">
                      {detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <section id="platform" className="bg-[#151515] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-700">
              Trusted Platform For Betting ID Services
            </p>
            <p className="mt-5 text-sm leading-7 text-zinc-300">
              At EMPIRE, we aim to deliver a smooth and transparent experience.
              Thousands of users trust us for their betting ID needs because of
              our fast service and reliable support.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              If you are searching for a secure way to get a globally available
              online cricket ID, we are here to help. Contact us today and join
              the world of online cricket with confidence.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <ContentBlock
              title="Responsible Gaming Notice"
              text="Cricket betting involves risk. Please play responsibly and only if it is legal in your region. This website is intended for users aged 18+."
            />
            <ContentBlock
              title="Best Platform for Best Online Cricket ID in India"
              text="EMPIRE helps users access online cricket platforms with quick support, practical guidance, and a smooth start-to-finish account process."
            />
            <ListBlock
              title="Play Cricket Anytime, Anywhere"
              items={platformPoints}
            />
            <ListBlock
              title="100% Trusted & Verified Cricket IDs"
              items={[
                "Authentic IDs",
                "Fast setup process",
                "Transparent communication",
                "Dedicated customer support",
              ]}
            />
            <ListBlock
              title="Cricket Leagues You Can Follow"
              items={cricketEvents}
            />
            <ContentBlock
              title="Customer Support You Can Rely On"
              text="We believe great service does not end after providing a betting ID. Our support team is available to help with account setup, login issues, wallet guidance, and general cricket access questions."
            />
          </div>

          <div className="rounded-lg border border-yellow-500/20 bg-black p-6">
            <h2 className="text-2xl font-black text-yellow-700">
              Start Your Cricket Journey Today
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              If you are looking for a trusted cricket ID provider, your search
              ends here. Contact us now and get started within minutes.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-zinc-300 sm:grid-cols-4">
              <span>Easy one-step registration</span>
              <span>Deposit your cricket ID</span>
              <span>Cricket ID access</span>
              <span>Betting ID support</span>
            </div>
            <a
              href="https://wa.me/918287832260?text=I%20WANT%20ID%20HERE.."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-md bg-yellow-700 px-7 py-3 text-sm font-black uppercase text-white hover:bg-yellow-300"
            >
              Get ID Now
            </a>
          </div>

          <div className="border-t border-yellow-500/20 pt-7">
            <h2 className="text-xl font-black text-yellow-700">
              Disclaimer & Responsible Use
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Online cricket betting may be restricted in some regions. Users
              must be 18+ and responsible for checking local laws before using a
              betting ID. Please play responsibly.
            </p>
          </div>
        </div>
      </section>

      <section id="payments" className="bg-black px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black text-white">
            Payment <span className="text-yellow-700">Transactions</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-300">
            Genuine, anonymized payment screenshots — verified by our support
            team to ensure secure, reliable processing you can trust.
          </p>

          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              "payment1.png",
              "payment2.png",
              "payment3.png",
              "payment4.png",
              "payment5.png",
              "payment6.png",
            ].map((file) => (
              <div
                key={file}
                className="rounded border border-zinc-800 bg-zinc-950 p-2 text-center"
              >
                <Image
                  src={`/asset/${file}`}
                  alt={file}
                  width={440}
                  height={280}
                  className="mx-auto h-48 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-black px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-black uppercase text-yellow-700 sm:text-3xl">
            Frequently Asked Question
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="relative min-h-[340px] overflow-hidden rounded-lg border border-yellow-500/20 bg-zinc-950">
              <Image
                src="/asset/bottom.png"
                alt="EMPIRE gaming support"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-2xl font-black uppercase text-white">
                  EMPIRE Online Cricket ID
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-md border border-zinc-700 bg-zinc-950 p-5"
                >
                  <summary className="cursor-pointer list-none text-sm font-black text-yellow-700">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-zinc-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-yellow-500/20 bg-black px-5 py-8 text-center sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5">
          <Image
            src="/asset/logo.png"
            alt="EMPIRE logo"
            width={180}
            height={70}
            className="h-16 w-auto"
          />
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-300">
            <span>BeGambleAware.org</span>
            <span>Privacy Policy</span>
            <span>Terms of services</span>
            <span>Responsible Gaming</span>
            <span className="rounded-full border border-yellow-500 px-3 py-1 text-yellow-400">
              18+
            </span>
          </div>
          <p className="text-xs text-zinc-500">
            Home Info - EMPIRE Online Cricket ID. Powered by EMPIRE.
          </p>
        </div>
      </footer>

    </main>
  );
}

function ContentBlock({ title, text }: { title: string; text: string }) {
  return (
    <article>
      <div className="flex items-center gap-3">
        <BadgeCheck className="h-5 w-5 text-yellow-700" />
        <h2 className="text-xl font-black text-yellow-700">{title}</h2>
      </div>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{text}</p>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <article>
      <div className="flex items-center gap-3">
        <Clock3 className="h-5 w-5 text-yellow-700" />
        <h2 className="text-xl font-black text-yellow-700">{title}</h2>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
