import { useMemo } from "react";
import type { TeamMember } from "./teamService";

type IconProps = {
    className?: string;
};

function MailIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
            <rect
                x="3.5"
                y="5.5"
                width="17"
                height="13"
                rx="2.2"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            <path
                d="M5.5 7.6 12 12.3l6.5-4.7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function TelegramIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
            <path
                d="m4.2 11.3 15.6-6.5c.9-.4 1.9.4 1.7 1.3l-2.8 12.9c-.2 1-1.4 1.4-2.2.8l-4.3-3.2-3.3 3.1c-.8.8-2.1.3-2.2-.9l-.5-4.7-2.1-.7c-1.1-.4-1.1-1.9.1-2.4Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="m9.4 14.1 8.8-7.1"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function FacebookIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
            <path
                d="M14.5 8.4H16V5.5h-1.7c-2.4 0-3.9 1.5-3.9 4.1v1.9H8.1v3h2.3V19h3v-4.5h2.4l.5-3h-2.9v-1.5c0-.9.4-1.6 1.1-1.6Z"
                fill="currentColor"
            />
        </svg>
    );
}

function LinkedInIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
            <path
                d="M6.4 10.1V19H3.6v-8.9h2.8ZM6.6 6.7c0 .9-.7 1.6-1.6 1.6S3.4 7.6 3.4 6.7s.7-1.6 1.6-1.6 1.6.7 1.6 1.6Z"
                fill="currentColor"
            />
            <path
                d="M10.1 19v-5c0-1.1.2-2.1 1.6-2.1 1.4 0 1.4 1.3 1.4 2.2v4.9H16v-5.4c0-2.6-.6-4.6-3.6-4.6-1.4 0-2.3.8-2.7 1.5h0V10h-2.8v9h3.2Z"
                fill="currentColor"
            />
        </svg>
    );
}

function GithubIcon({ className }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
            <path
                fill="currentColor"
                d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.3 2.8 8 6.7 9.3.5.1.7-.2.7-.5v-1.8c-2.7.6-3.3-1.2-3.3-1.2-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.3 1.9.9 2.4.7.1-.6.3-.9.6-1.1-2.1-.2-4.3-1.1-4.3-4.7 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.6 1a9 9 0 0 1 4.7 0c1.8-1.3 2.6-1 2.6-1 .5 1.2.2 2.2.1 2.4.6.7 1 1.6 1 2.6 0 3.6-2.2 4.5-4.3 4.7.3.2.6.8.6 1.6v2.4c0 .3.2.6.7.5 3.9-1.3 6.7-5 6.7-9.3 0-5.4-4.4-9.8-9.8-9.8Z"
            />
        </svg>
    );
}

export default function TeamCard({ member }: { member: TeamMember }) {
    const socialLinks = useMemo(() => {
        const labelToIcon: Record<string, React.ComponentType<IconProps>> = {
            Telegram: TelegramIcon,
            Email: MailIcon,
            Facebook: FacebookIcon,
            LinkedIn: LinkedInIcon,
            GitHub: GithubIcon,
        };

        return (member.socials ?? []).map(({ label, href }) => {
            const Icon = labelToIcon[label];
            return {
                label,
                href,
                Icon: Icon ?? TelegramIcon,
            };
        });
    }, [member]);

    return (
        <div className="teamDetail">
            <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="detail-image"
            />
            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <p>{member.bio}</p>

            <div className="member-socials" aria-label="Member social links">
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
    );
}

