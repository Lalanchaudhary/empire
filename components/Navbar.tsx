"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="empire-navbar sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-yellow-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex h-24 items-center justify-between lg:h-28">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/asset/logo.png"
              alt="EMPIRE"
              width={300}
              height={96}
              className="h-20 w-auto lg:h-36"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">

            <Link
              href="/"
              className="text-slate-200 hover:text-yellow-500 transition duration-300 font-medium"
            >
              Home
            </Link>

            <Link
              href="/sports"
              className="text-slate-200 hover:text-yellow-500 transition duration-300 font-medium"
            >
              Sports
            </Link>

            <Link
              href="/casino"
              className="text-slate-200 hover:text-yellow-500 transition duration-300 font-medium"
            >
              Casino
            </Link>

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 text-slate-200 hover:text-yellow-500 transition"
              >
                More
                <ChevronDown size={18} />
              </button>

              <div className="absolute top-10 hidden group-hover:block min-w-[180px] bg-[#090909] border border-yellow-950 rounded-xl overflow-hidden shadow-2xl shadow-yellow-900/20">

                <Link
                  href="/cricket-id"
                  className="block px-5 py-3 text-slate-300 hover:bg-yellow-950/40 hover:text-yellow-400"
                >
                  Cricket ID
                </Link>

                <Link
                  href="/online-cricket-id"
                  className="block px-5 py-3 text-slate-300 hover:bg-yellow-950/40 hover:text-yellow-400"
                >
                  Online Cricket ID
                </Link>

                <Link
                  href="/casino-id"
                  className="block px-5 py-3 text-slate-300 hover:bg-yellow-950/40 hover:text-yellow-400"
                >
                  Casino ID
                </Link>

              </div>
            </div>

            <a
              href="https://wa.me/919315852784?text=I%20WANT%20ID%20HERE.."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-yellow-700 to-yellow-500 text-black font-semibold shadow-lg shadow-yellow-700/40 hover:scale-105 transition"
            >
              Contact Us
            </a>

          </div>

          {/* Mobile Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-200"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden lg:hidden transition-all duration-300 ${
            open ? "max-h-[400px] pb-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4">

            <Link href="/" onClick={() => setOpen(false)} className="text-slate-300 hover:text-yellow-500">
              Home
            </Link>

            <Link href="/sports" onClick={() => setOpen(false)} className="text-slate-300 hover:text-yellow-500">
              Sports
            </Link>

            <Link href="/casino" onClick={() => setOpen(false)} className="text-slate-300 hover:text-yellow-500">
              Casino
            </Link>

            <Link
              href="/#about"
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-yellow-500"
            >
              Online Cricket ID
            </Link>

            <a
              href="https://wa.me/919315852784?text=I%20WANT%20ID%20HERE.."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-yellow-600 text-black text-center py-3 rounded-full"
            >
              Contact Us
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}
