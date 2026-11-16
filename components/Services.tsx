import { ADVISORY_AREAS, PROFILE } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="bg-oxblood">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <h2 className="display text-[clamp(2.1rem,4.5vw,3.75rem)]">
              Advisory
            </h2>
            <p className="mt-5 max-w-[26rem] leading-relaxed text-rose-grey">
              Five areas where plant-floor experience and a finance toolkit
              answer the same question: is this worth funding?
            </p>
            <a
              href={`mailto:${PROFILE.email}?subject=Advisory%20call`}
              className="mt-8 inline-flex rounded-md bg-signal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#dc2026]"
            >
              Schedule an advisory call
            </a>
          </div>

          <ul className="border-t border-rule">
            {ADVISORY_AREAS.map((area) => (
              <li
                key={area.title}
                className="grid gap-2 border-b border-rule py-7 md:grid-cols-[1fr_1.2fr] md:gap-10"
              >
                <h3 className="display text-2xl">{area.title}</h3>
                <p className="leading-relaxed text-rose-grey">{area.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
