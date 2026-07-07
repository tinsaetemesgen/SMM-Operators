import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";
import { Mail, Phone } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

const Contact = () => {
  const { formData, submitted, isSending, handleChange, handleSubmit } = useContactForm();

  return (
    <div>
      <main className="flex w-full min-h-screen flex-col items-center bg-[rgba(255,247,237,0.7)] dark:bg-[rgba(51,16,7,0.55)]">
        <Navbar />

        <section className="w-full bg-slate-950 px-4 pt-28 pb-16 text-white sm:px-6 sm:pt-40 sm:pb-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
              Let's talk about your social media.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Send us a message and we'll get back to you within a day.
            </p>
          </div>
        </section>

        <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-20 dark:bg-slate-950">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <a
                href="mailto:smmoperators.contact@gmail.com"
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition"
              >
                <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                smmoperators.contact@gmail.com
              </a>

              <a
                href="tel:+251911123456"
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition"
              >
                <Phone className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                +251911123456
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 bb-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900 dark:text-slate-100"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900 dark:text-slate-100"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-900 dark:text-slate-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="relative rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-slate-900 dark:hover:bg-slate-800 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className={isSending ? "opacity-0" : "opacity-100 transition-opacity"}>Send message</span>
                <span
                  className={
                    "absolute inset-0 flex items-center justify-center transition-opacity " +
                    (isSending ? "opacity-100" : "opacity-0")
                  }
                >
                  <span className="mr-2 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
                  Sending...
                </span>
              </button>

              {submitted && (
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  Thanks! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Contact;
