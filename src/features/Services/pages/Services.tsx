import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

const services = [
  {
    title: "Strategy & Planning",
    text: "Monthly content calendars and campaign plans tied to clear goals.",
  },
  {
    title: "Content Creation",
    text: "Graphics, captions, and short-form video made for each platform.",
  },
  {
    title: "Community Management",
    text: "Day-to-day posting, replies, and comment moderation.",
  },
  {
    title: "Performance Reporting",
    text: "Simple monthly reports that show what's working and what's next.",
  },
];

const Services = () => {
  return (
    <div>
      <main className="flex w-full min-h-screen flex-col items-center bg-gray-100">
        <Navbar />

        <section className="w-full bg-slate-950 px-4 pt-40 pb-20 text-white sm:px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Services
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              Everything you need to grow on social media.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Pick a single service or let us run the whole social media
              operation for you.
            </p>
          </div>
        </section>

        <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-lg bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Services;
