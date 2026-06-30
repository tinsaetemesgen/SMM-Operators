const teamMembers = [
  {
    name: "Tinsae Temesgen",
    role: "Website Developer",
    bio: "Blah blah blah.",
  },
  {
    name: "Gemechis Dejene",
    role: "Graphics Designer",
    bio: "Blah blah blah.",
  },
  {
    name: "Netsanet Fikadu",
    role: "Digital Marketing",
    bio: "Blah blah blah.",
  },
];

const Team = () => {
  return (
    <section id="team" className="w-full scroll-mt-28 bg-slate-100 px-4 py-20 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Team
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            A focused group covering strategy, content, and operations.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Meet the people behind the planning, creative direction, and
            performance checks that keep every campaign moving.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-bold text-slate-950">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-amber-600">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
