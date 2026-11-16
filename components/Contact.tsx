import { PROFILE } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="hero">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-24 md:px-10 md:pt-32">
        <h2 className="display text-[clamp(2.5rem,8vw,7rem)]">Hit me up</h2>
        <p className="mt-5 max-w-[32rem] text-lg leading-relaxed text-rose-grey">
          For advisory work, speaking or mentorship, email is the fastest way
          to reach me.
        </p>

        <a
          href={`mailto:${PROFILE.email}`}
          className="display mt-10 inline-block break-all text-[clamp(1.5rem,4.5vw,3.5rem)] underline decoration-signal decoration-4 underline-offset-8 hover:decoration-white"
        >
          {PROFILE.email}
        </a>

        <ul className="mt-10 flex flex-col gap-3 sm:flex-row">
          <li>
            <a
              href={PROFILE.phoneHref}
              className="block rounded-md border border-rule bg-ink px-5 py-3 text-center font-semibold transition-colors hover:bg-[#2b1c1e]"
            >
              Call {PROFILE.phone}
            </a>
          </li>
          <li>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md border border-rule bg-ink px-5 py-3 text-center font-semibold transition-colors hover:bg-[#2b1c1e]"
            >
              Connect on LinkedIn
            </a>
          </li>
        </ul>

        <footer className="mt-24 flex flex-col gap-2 border-t border-rule pt-6 text-sm text-rose-grey sm:flex-row sm:justify-between">
          <p>{PROFILE.name}</p>
          <p>{PROFILE.location}</p>
        </footer>
      </div>
    </section>
  );
}
