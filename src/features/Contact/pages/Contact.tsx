import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";
import { Mail, Phone } from "lucide-react";
import { useContactForm } from "../hooks/useContactForm";

const Contact = () => {
  const { formData, submitted, handleChange, handleSubmit } = useContactForm();

  return (
    <div>
      <main className="flex w-full min-h-screen flex-col items-center bg-gray-100">
        <Navbar />

        <section className="w-full bg-slate-950 px-4 pt-40 pb-20 text-white sm:px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              Let's talk about your social media.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Send us a message and we'll get back to you within a day.
            </p>
          </div>
        </section>

        <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-16">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1fr]">
            <div className="space-y-4 text-slate-600">
              <a href="mailto:smmoperators.contact@gmail.com" className="flex items-center gap-2 hover:text-slate-900">
                <Mail className="h-5 w-5 text-amber-600" />
                smmoperators.contact@gmail.com
              </a>
              <a href="tel:+251911123456" className="flex items-center gap-2 hover:text-slate-900">
                <Phone className="h-5 w-5 text-amber-600" />
                +251911123456
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Send message
              </button>

              {submitted && (
                <p className="text-sm font-medium text-green-600">
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
