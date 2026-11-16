"use client";

import Image from "next/image";
import { useState } from "react";
import { NAV, PROFILE } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#3d1317]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 md:px-10">
        <a href="#home" className="flex items-center gap-2.5">
          <Image
            src="/portrait.webp"
            alt=""
            width={64}
            height={80}
            className="size-8 rounded-full object-cover object-[50%_12%]"
          />
          <span className="text-[0.95rem] font-medium">{PROFILE.short}</span>
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-bone/85 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${PROFILE.email}`}
            className="hidden items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-bone sm:flex"
          >
            Let&rsquo;s Talk
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="size-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 12 12 4M5.5 4H12v6.5" />
            </svg>
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-rule px-3 py-2 text-sm md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Sections"
          className="border-t border-rule px-5 pb-5 md:hidden"
        >
          <ul>
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-4 block rounded-md bg-white px-4 py-3 text-center font-semibold text-ink sm:hidden"
          >
            Let&rsquo;s Talk
          </a>
        </nav>
      )}
    </header>
  );
}
