import Tinsae from "../../../../assets/images/Tinsae Temesgen.png";
import Ruth from "../../../../assets/images/Ruth Shewaferaw.png";
import Netsanet from "../../../../assets/images/Netsanet Fikadu.png";
import Iman from "../../../../assets/images/Iman Ymer.png";
import Gemechis from "../../../../assets/images/Gemechis Dejene.png";
import Fasika from "../../../../assets/images/Fasika Tesfaye.png";
import Samson from "../../../../assets/images/Samson Tadesse.png";

export type TeamSocial = {
    label: "Telegram" | "Email" | "Facebook" | "LinkedIn" | "GitHub" | string;
    href: string;
};

export type TeamMember = {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    socials?: TeamSocial[];
};

export const teamMembers: TeamMember[] = [
    {
        id: 0,
        name: "Tinsae Temesgen",
        role: "Website Developer",
        bio: "Responsible for developing and maintaining websites and web applications.",
        image: Tinsae,
        socials: [
            { label: "Telegram", href: "https://t.me/TinsaeTemesgen" },
            { label: "Email", href: "mailto:tinsae.temesgen@example.com" },
            { label: "Facebook", href: "https://www.facebook.com/tinsae-temesgen" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/tinsae-temesgen/" },
            { label: "GitHub", href: "https://github.com/tinsae-temesgen" },
        ],
    },
    {
        id: 1,
        name: "Gemechis Dejene",
        role: "CEO & Founder",
        bio: "Leads the company, builds client relationships, and oversees strategy.",
        image: Gemechis,
        socials: [
            { label: "Telegram", href: "https://t.me/GemechisDejene" },
            { label: "Email", href: "mailto:gemechis.dejene@example.com" },
            { label: "Facebook", href: "https://www.facebook.com/gemechis.dejene" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/gemechis-dejene/" },
        ],
    },
    {
        id: 2,
        name: "Netsanet Fikadu",
        role: "Digital Marketer",
        bio: "Responsible for branding, creative concepts and visual identity.",
        image: Netsanet,
        socials: [
            { label: "Telegram", href: "https://t.me/NetsanetFikadu" },
            { label: "Email", href: "mailto:netsanet.fikadu@example.com" },
            { label: "Facebook", href: "https://www.facebook.com/netsanet.fikadu" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/netsanet-fikadu/" },
        ],
    },
    {
        id: 3,
        name: "Fasika Tesfaye",
        role: "Graphics Designer",
        bio: "Designs graphics, banners and social media posts",
        image: Fasika,
        socials: [
            { label: "Telegram", href: "https://t.me/FasikaTesfaye" },
            { label: "Email", href: "mailto:fasika.tesfaye@example.com" },
            { label: "Facebook", href: "https://www.facebook.com/fasika.tesfaye" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/fasika-tesfaye/" },
        ],
    },
    {
        id: 4,
        name: "Ruth Shewaferaw",
        role: "Digital marketer and Graphic Designer",
        bio: "Designs graphics, banners and social media posts.",
        image: Ruth,
        socials: [
            { label: "Telegram", href: "https://t.me/RuthShewaferaw" },
            { label: "Email", href: "mailto:ruth.shewaferaw@example.com" },
            { label: "Facebook", href: "https://www.facebook.com/ruth.shewaferaw" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ruth-shewaferaw/" },
        ],
    },
    {
        id: 5,
        name: "Samson Tadesse",
        role: "Website Developer",
        bio: "Develops and maintains websites and web applications.",
        image: Samson,
        socials: [
            { label: "Telegram", href: "https://t.me/SamsonTadesse" },
            { label: "Email", href: "mailto:samson.tadesse@example.com" },
            { label: "Facebook", href: "https://www.facebook.com/samson.tadesse" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/samson-tadesse/" },
            { label: "GitHub", href: "https://github.com/samson-tadesse" },
        ],
    },
    {
        id: 6,
        name: "Iman Ymer",
        role: "Video Editor",
        bio: "Creates and edits video content for various platforms.",
        image: Iman,
        socials: [
            { label: "Telegram", href: "https://t.me/ImanYmer" },
            { label: "Email", href: "mailto:iman.ymer@example.com" },
            { label: "Facebook", href: "https://www.facebook.com/iman.ymer" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/iman-ymer/" },
        ],
    },
];

