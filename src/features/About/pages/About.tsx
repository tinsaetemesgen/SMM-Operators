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
      <main className="flex w-full min-h-screen flex-col items-center bg-gray-100">
        <Navbar />

        <section className="w-full bg-slate-950 px-4 pt-40 pb-20 text-white sm:px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              Built to handle social media, end to end.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              SMM Operators started with a simple idea: businesses shouldn't
              have to juggle strategy, content, and reporting on their own.
              We act as an extension of your team, handling the day-to-day
              work of growing your social presence.
            </p>
          </div>
        </section>

        <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
              What we stand for
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-lg bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-lg font-bold text-slate-950">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default About;
