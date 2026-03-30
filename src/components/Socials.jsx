import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

export default function Socials() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const size = isTabletOrMobile ? "18" : "20";

  const links = [
    { href: "https://www.linkedin.com/in/mehdi-benfredj/", Icon: FiLinkedin },
    { href: "https://x.com/BenfredjMehdi", Icon: FaXTwitter },
    { href: "https://www.instagram.com/mehdi.bnfrdj/", Icon: FiInstagram },
    { href: "https://github.com/MehdiBenfredj", Icon: FiGithub },
  ];

  return (
    <div className="fixed bottom-0 left-0 flex flex-col items-center md:pl-10">
      {links.map(({ href, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="m-2 text-gray-500 hover:text-emerald-500 hover:-translate-y-1 transition-all duration-200"
        >
          <Icon size={size} />
        </a>
      ))}
      <div className="w-px h-20 bg-gray-700 mt-2" />
    </div>
  );
}
