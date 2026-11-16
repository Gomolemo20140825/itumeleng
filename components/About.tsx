import { AWARDS, LEDGER, PROFILE } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="bg-wine">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h2 className="display text-[clamp(2.1rem,5vw,4.25rem)]">
            {PROFILE.statement}
          </h2>
          <div className="max-w-[38rem] space-y-5 text-[1.05rem] leading-relaxed text-rose-grey">
            {PROFILE.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="flex flex-wrap gap-2 pt-2 text-sm text-bone">
              {PROFILE.credentials.map((c) => (
                <li key={c} className="rounded-full border border-rule px-3.5 py-1.5">
                  {c}
                </li>
              ))}
            </ul>
            <p className="text-sm">
              {PROFILE.role}. Based in {PROFILE.location}.{" "}
              {PROFILE.memberships.join(". ")}.
            </p>
          </div>
        </div>

        <dl className="mt-20 border-t border-rule">
          {LEDGER.map((row) => (
            <div
              key={row.value}
              className="flex flex-col gap-1 border-b border-rule py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
            >
              <dt className="max-w-[34rem] text-rose-grey">{row.label}</dt>
              <dd className="figure text-[clamp(2.5rem,6vw,4.5rem)] leading-none">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h3 className="display text-3xl">Recognition</h3>
          <ul>
            {AWARDS.map((a) => (
              <li
                key={a.title}
                className="grid grid-cols-[4rem_1fr] gap-4 border-b border-rule py-4 first:pt-0"
              >
                <span className="figure text-rose-grey">{a.year}</span>
                <span>
                  <span className="block font-semibold">{a.title}</span>
                  <span className="block text-sm text-rose-grey">{a.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
