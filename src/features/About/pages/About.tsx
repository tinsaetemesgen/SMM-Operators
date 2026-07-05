import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

const values = [
  {
    title: "Consistency",
    text: "Steady publishing and reporting, every week, without surprises.",
  },
  {
    title: "Clarity",
    text: "Plain-language strategy and reports that are easy to act on.",
  },
  {
    title: "Craft",
    text: "Content built with attention to detail and brand voice.",
  },
];

const About = () => {
  return (
    <div>
      <main className="flex w-full min-h-screen flex-col items-center bg-gray-100 dark:bg-slate-950">
        <Navbar />

        <section className="w-full bg-slate-950 px-4 pt-40 pb-20 text-white sm:px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="bb-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              About Us
            </p>
            <h1 className="bb-fade-up mt-3 text-4xl font-bold sm:text-5xl">
              Built to handle social media, end to end.
            </h1>
            <p className="bb-fade-up mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              SMM Operators started with a simple idea: businesses shouldn&apos;t
              have to juggle strategy, content, and reporting on their own.
              We act as an extension of your team—handling the day-to-day
              work of growing your social presence with consistency and clarity.
            </p>

            <div className="bb-float mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="inline-flex w-fit items-center justify-center rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900 dark:hover:bg-slate-800"
              >
                Talk to us
              </a>
              <p className="text-sm text-slate-300">
                Fast turnaround • Clear reporting • Practical strategy
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-16 dark:bg-slate-900">
          <div className="mx-auto max-w-7xl">
            <h2 className="bb-fade-up text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
              What we stand for
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {values.map((value, idx) => (
                <div
                  key={value.title}
                  className="bb-fade-up rounded-lg bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-white/10"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-slate-50 px-4 py-20 sm:px-6 lg:px-16 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div className="bb-fade-up rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                  Our process
                </p>
                <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                  Simple steps, real momentum
                </h3>

                <ol className="mt-6 space-y-5 text-slate-700 dark:text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Strategy
                      </p>
                      <p className="mt-1 text-sm">
                        We align goals, platforms, and timelines so every post has a reason.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Execution
                      </p>
                      <p className="mt-1 text-sm">
                        Content creation, scheduling, and quick community responses.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Reporting
                      </p>
                      <p className="mt-1 text-sm">
                        Monthly notes on what worked, what didn&apos;t, and what comes next.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bb-fade-up rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-white/10">
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                  Quick FAQs
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="bb-shimmer-border rounded-xl border border-slate-200 p-4 dark:border-white/10">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Do you post every day?
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                      We recommend a calendar based on your capacity and audience.
                      Sometimes daily posting makes sense; other times campaigns perform better.
                    </p>
                  </div>

                  <div className="bb-shimmer-border rounded-xl border border-slate-200 p-4 dark:border-white/10">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Can we request edits or approvals?
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                      Yes. We can match your approval workflow—drafts for review, then publishing once confirmed.
                    </p>
                  </div>

                  <div className="bb-shimmer-border rounded-xl border border-slate-200 p-4 dark:border-white/10">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      What do you deliver monthly?
                    </p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                      Performance highlights, top posts, and practical recommendations for next month.
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default About;
