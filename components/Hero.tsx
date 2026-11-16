import Image from "next/image";
import { PROFILE } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative isolate flex min-h-[min(100svh,62rem)] flex-col overflow-hidden pt-16"
    >
      <span
        aria-hidden="true"
        className="sparkle left-[6%] top-[22%] hidden md:block"
        style={{ "--s": "6rem" } as React.CSSProperties}
      />
      <span
        aria-hidden="true"
        className="sparkle right-[7%] top-[20%] hidden md:block"
        style={{ "--s": "5rem" } as React.CSSProperties}
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-5 md:px-10">
        <h1 className="pt-[clamp(2.5rem,7vh,5.5rem)] text-center">
          <span className="hero-kicker block pl-[0.32em]">MOLECULE TO</span>
          <span className="hero-word mt-[0.12em] block">MARGIN</span>
        </h1>
        <div
          aria-hidden="true"
          className="hero-bar mx-auto mt-[clamp(0.4rem,1.2vw,1.1rem)] w-[88%] max-w-[1150px]"
        />

        <div className="relative mx-auto mt-3 aspect-[4/5] w-[min(80vw,24rem)] flex-none overflow-hidden lg:aspect-auto lg:min-h-[24rem] lg:w-[min(38vw,30rem)] lg:flex-1">
          <Image
            src="/portrait.webp"
            alt="Portrait of Itumeleng Kgongwane in a navy suit"
            fill
            priority
            sizes="(min-width: 1024px) 480px, 80vw"
            className="object-cover object-top"
          />
        </div>

        <div className="relative z-20 flex flex-col gap-8 pb-10 pt-8 md:flex-row md:items-end md:justify-between lg:absolute lg:inset-x-10 lg:bottom-12 lg:pb-0 lg:pt-0">
          <div className="max-w-[17rem]">
            <p className="display text-[1.6rem] font-semibold">
              Welcome to My Portfolio
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-rose-grey">
              {PROFILE.intro}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row md:flex-col md:items-stretch">
            <a
              href="#case-studies"
              className="flex items-center justify-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#dc2026]"
            >
              View case studies
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="size-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 2.5v10M3.5 8.5 8 13l4.5-4.5" />
              </svg>
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border border-rule bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2b1c1e]"
            >
              LinkedIn Profile
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="size-3.5"
                fill="currentColor"
              >
                <path d="M3.6 5.9H1.3V14h2.3V5.9ZM2.45 2a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7ZM14.7 9.2c0-2.3-1.2-3.5-2.9-3.5-1.2 0-1.9.6-2.2 1.2V5.9H7.3V14h2.3V9.6c0-1 .5-1.8 1.5-1.8s1.3.8 1.3 1.8V14h2.3V9.2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
