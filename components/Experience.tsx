import {
  CASES,
  MARGIN_TRACK,
  MOLECULE_TRACK,
  type TimelineEntry,
} from "@/data/content";

function Track({
  heading,
  blurb,
  entries,
}: {
  heading: string;
  blurb: string;
  entries: TimelineEntry[];
}) {
  return (
    <div>
      <h3 className="display text-4xl">{heading}</h3>
      <p className="mt-2 text-rose-grey">{blurb}</p>
      <ol className="mt-8 border-l border-rule">
        {entries.map((e) => (
          <li key={e.title} className="relative pb-9 pl-6 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1.5 size-[9px] rounded-full bg-signal"
            />
            <p className="figure text-sm text-rose-grey">{e.period}</p>
            <h4 className="mt-1 text-xl font-semibold">{e.title}</h4>
            <p className="text-sm text-rose-grey">{e.org}</p>
            <p className="mt-3 max-w-[34rem] leading-relaxed">{e.summary}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {e.metrics.map((m) => (
                <li
                  key={m}
                  className="rounded-full bg-maroon px-3 py-1 text-sm font-semibold"
                >
                  {m}
                </li>
              ))}
            </ul>
            <details className="mt-3">
              <summary className="inline-flex items-center gap-1.5 text-sm text-rose-grey underline-offset-4 hover:text-white hover:underline">
                <span className="chev inline-block transition-transform">+</span>
                Details
              </summary>
              <ul className="mt-2 max-w-[34rem] list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-rose-grey">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-wine">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <h2 className="display max-w-[20ch] text-[clamp(2.1rem,4.5vw,3.75rem)]">
          Two careers, run in parallel
        </h2>

        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Track
            heading="Molecule"
            blurb="Process and product engineering, 2005 to today."
            entries={MOLECULE_TRACK}
          />
          <Track
            heading="Margin"
            blurb="Finance, strategy and business development, 2023 to today."
            entries={MARGIN_TRACK}
          />
        </div>

        <div id="case-studies" className="mt-28 scroll-mt-20">
          <h2 className="display text-[clamp(2.1rem,4.5vw,3.75rem)]">
            Case studies
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {CASES.map((c) => (
              <li
                key={c.id}
                className="flex flex-col rounded-xl border border-rule bg-oxblood/60 p-6 md:p-8"
              >
                <p className="text-sm text-rose-grey">
                  {c.sector}, {c.years}
                </p>
                <h3 className="display mt-2 text-2xl">{c.title}</h3>
                <p className="mt-4 leading-relaxed text-rose-grey">
                  {c.problem}
                </p>
                <p className="mt-3 pb-7 leading-relaxed">{c.outcome}</p>
                <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-rule pt-5">
                  {c.stats.map((s) => (
                    <div key={s.l} className="flex flex-col-reverse">
                      <dt className="text-sm text-rose-grey">{s.l}</dt>
                      <dd className="figure text-3xl">{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
