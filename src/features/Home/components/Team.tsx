// Inside Team.tsx inside the teamDetail card, add four social media icons for each member.Telegram, Email, Facebook, and LinkedIn.For the web developers also add a github one. 
// Then make the about page better by adding content.and make every page responsive to the dark mode. 
// Add some tiny but interesting animations in all pages.Make the contact form send emails to "smmoperators.contact@gmail.com".Make the loading screen show for everypage reload and page change but make it have no background for that.



import "../styles/Team.css";
import { useMemo, useState } from "react";
import { Mail, Send, Globe } from "lucide-react";

import Photo from "../../../assets/operators.jpg";
import Tinsae from "../../../assets/images/Tinsae Temesgen.png";
import Ruth from "../../../assets/images/Ruth Shewaferaw.png";
import Netsanet from "../../../assets/images/Netsanet Fikadu.png";
import Iman from "../../../assets/images/Iman Ymer.png";

const teamMembers = [
  {
    id: 0,
    name: "Tinsae Temesgen",
    role: "Team Leader and Website Developer",
    bio: "Responsible for developing and maintaining websites and web applications.",
    image: Tinsae,
  },
  {
    id: 1,
    name: "Gemechis Dejene",
    role: "CEO & Founder",
    bio: "Leads the company, builds client relationships, and oversees strategy.",
    image: Photo,
  },
  {
    id: 2,
    name: "Netsanet Fikadu",
    role: "Digital Marketer",
    bio: "Responsible for branding, creative concepts and visual identity.",
    image: Netsanet,
  },
  {
    id: 3,
    name: "Fasika Tesfaye",
    role: "Graphics Designer",
    bio: "Designs graphics, banners and social media posts",
    image: Photo,
  },
  {
    id: 4,
    name: "Ruth Shewaferaw",
    role: "Digital marketer and Graphic Designer",
    bio: "Designs graphics, banners and social media posts.",
    image: Ruth,
  },
  {
    id: 5,
    name: "Samson Tadesse",
    role: "Web Developer",
    bio: "Develops and maintains websites and web applications.",
    image: Photo,
  },
  {
    id: 6,
    name: "Iman Ymer",
    role: "Video Editor",
    bio: "Creates and edits video content for various platforms.",
    image: Iman,
  },
];



function Team() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  const selectMember = (memberIndex: number) => {
    setSelectedMember(teamMembers[memberIndex]);
  };

  const showGithub = useMemo(() => {
    const role = selectedMember.role.toLowerCase();
    return role.includes("developer") || role.includes("website");
  }, [selectedMember.role]);

  const socialLinks = useMemo(() => {
    const base = [
      {
        label: "Telegram",
        href: "https://t.me/SMM9D",
        Icon: Send,
      },
      {
        label: "Email",
        href: "mailto:smmoperators.contact@gmail.com",
        Icon: Mail,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61589973457423",
        Icon: Globe,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/smm-operators/",
        Icon: Globe,
      },
    ];

    if (showGithub) {
      base.push({
        label: "GitHub",
        href: "https://github.com/",
        Icon: Globe,
      });
    }

    return base;
  }, [showGithub]);

  return (
    <section
      id="teamSection"
      className="w-full flex scroll-mt-28 px-4 py-20 sm:px-6 lg:px-16 rounded-b-[2.5rem] sm:rounded-b-[4rem] overflow-hidden bg-linear-to-r from-yellow-900 to-indigo-900 dark:from-slate-900 dark:to-slate-800"
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

        <div className="team-members mt-10 flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="team-orbit-shell">
            <div className="team-orbit">
              <div
                className="member top"
                onMouseEnter={() => selectMember(6)}
                onClick={() => selectMember(6)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${teamMembers[6].name}`}
              >
                <img src={teamMembers[6].image} alt="" />
              </div>

              <div
                className="member top-left"
                onMouseEnter={() => selectMember(1)}
                onClick={() => selectMember(1)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${teamMembers[1].name}`}
              >
                <img src={teamMembers[1].image} alt="" />
              </div>

              <div
                className="member top-right"
                onMouseEnter={() => selectMember(2)}
                onClick={() => selectMember(2)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${teamMembers[2].name}`}
              >
                <img src={teamMembers[2].image} alt="" />
              </div>

              <div
                className="member bottom-left"
                onMouseEnter={() => selectMember(3)}
                onClick={() => selectMember(3)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${teamMembers[3].name}`}
              >
                <img src={teamMembers[3].image} alt="" />
              </div>

              <div
                className="member bottom-right"
                onMouseEnter={() => selectMember(4)}
                onClick={() => selectMember(4)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${teamMembers[4].name}`}
              >
                <img src={teamMembers[4].image} alt="" />
              </div>

              <div
                className="member bottom"
                onMouseEnter={() => selectMember(5)}
                onClick={() => selectMember(5)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${teamMembers[5].name}`}
              >
                <img src={teamMembers[5].image} alt="" />
              </div>
            </div>

            <div
              className="center-member"
              onMouseEnter={() => selectMember(0)}
              onClick={() => selectMember(0)}
              role="button"
              tabIndex={0}
              aria-label={`Select ${teamMembers[0].name}`}
            >
              <img src={teamMembers[0].image} alt="" />
            </div>
          </div>

          <div className="teamDetail">
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="detail-image"
            />
            <h2>{selectedMember.name}</h2>
            <h4>{selectedMember.role}</h4>
            <p>{selectedMember.bio}</p>

            <div
              className="member-socials"
              aria-label="Member social links"
            >
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-pill"
                >
                  <Icon className="social-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
