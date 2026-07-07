import { useState } from "react";
import { teamMembers } from "./teamService";
import TeamCard from "./teamCard";

export default function Orbit() {
    const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

    const selectMember = (memberIndex: number) => {
        setSelectedMember(teamMembers[memberIndex]);
    };

    return (
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
                        <img src={teamMembers[6].image} alt="" loading="lazy" />
                    </div>

                    <div
                        className="member top-left"
                        onMouseEnter={() => selectMember(1)}
                        onClick={() => selectMember(1)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${teamMembers[1].name}`}
                    >
                        <img src={teamMembers[1].image} alt="" loading="lazy" />
                    </div>

                    <div
                        className="member top-right"
                        onMouseEnter={() => selectMember(2)}
                        onClick={() => selectMember(2)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${teamMembers[2].name}`}
                    >
                        <img src={teamMembers[2].image} alt="" loading="lazy" />
                    </div>

                    <div
                        className="member bottom-left"
                        onMouseEnter={() => selectMember(3)}
                        onClick={() => selectMember(3)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${teamMembers[3].name}`}
                    >
                        <img src={teamMembers[3].image} alt="" loading="lazy" />
                    </div>

                    <div
                        className="member bottom-right"
                        onMouseEnter={() => selectMember(4)}
                        onClick={() => selectMember(4)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${teamMembers[4].name}`}
                    >
                        <img src={teamMembers[4].image} alt="" loading="lazy" />
                    </div>

                    <div
                        className="member bottom"
                        onMouseEnter={() => selectMember(5)}
                        onClick={() => selectMember(5)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${teamMembers[5].name}`}
                    >
                        <img src={teamMembers[5].image} alt="" loading="lazy" />
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
                    <img src={teamMembers[0].image} alt="" loading="lazy" />
                </div>
            </div>

            <TeamCard member={selectedMember} />
        </div>
    );
}

