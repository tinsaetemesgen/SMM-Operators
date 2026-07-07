import "../styles/Team.css";
import Orbit from "./Team/Orbit";

export default function Team() {
  return (
    <section
      id="teamSection"
      className="w-full flex scroll-mt-28 px-4 py-20 sm:px-6 lg:px-16 rounded-b-[2.5rem] sm:rounded-b-[4rem] overflow-hidden bg-[rgb(199,123,1)] dark:bg-[rgba(249,115,22,0.22)]"
    >
      <div className="team-container mx-auto max-w-7xl">
        <div className="team-header max-w-3xl">
          <p className="text-md font-bold font-serif uppercase tracking-[0.2em] text-amber-600">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl dark:text-white">
            A focused group covering strategy, content, and operations.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/90 sm:text-lg dark:text-slate-300">
            Meet the people behind the planning, creative direction, and
            performance checks that make our clients happy.
          </p>
        </div>

        <Orbit />
      </div>
    </section>
  );
}

