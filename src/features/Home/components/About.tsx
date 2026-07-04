import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="w-full scroll-mt-28 bg-white dark:bg-slate-950 px-4 py-20 transition-colors sm:px-6 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
            We turn social media activity into organized growth work.
          </h2>
          <Link
            to="/about"
            className="mt-5 inline-block text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300"
          >
            Learn more about us &rarr;
          </Link>
        </div>

        <div className="grid gap-5 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
          <p className="leading-7">
            SMM Operators supports businesses with practical strategy, campaign
            calendars, content direction, and day-to-day social media execution.
          </p>
          <p className="leading-7">
            Our focus is simple: consistent publishing, clear reporting, and
            creative decisions shaped by audience behavior.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;