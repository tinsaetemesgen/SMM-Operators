import HeroImg from "../../../assets/images/ourTeamm.png";
import { useSectionLink } from "../../../shared/hooks/useSectionLink";

const Hero = () => {
  const goToSection = useSectionLink();

  return (
    <section className="relative isolate flex min-h-screen w-full scroll-mt-28 items-center overflow-visible bg-slate-950 px-4 pt-32 text-white sm:px-6 lg:px-16" id="hero">
      <div className="absolute inset-0 -z-20 bg-linear-to-r from-yellow-800 to-indigo-800" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-linear-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="md:text-3xl lg:text-4xl font-semibold uppercase text-amber-600">
            SMM Operators
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Social media operators ready to be your digital voice
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg md:text-xl">
            We plan, create, publish, and optimize social media campaigns for
            brands that need consistent execution and measurable momentum.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={() => goToSection("about")}
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
            >
              About us
            </button>
            <button
              type="button"
              onClick={() => goToSection("team")}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Meet the team
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-xl items-end justify-center self-end">
          <div className="absolute inset-x-8 bottom-0 h-3/4 rounded-t-full bg-white/10 blur-3xl" />
          <img
            src={HeroImg}
            alt="SMM Operators team members holding certificates"
            className="relative z-10 max-h-[64vh] w-full max-w-130 object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
