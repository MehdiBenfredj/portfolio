import React from "react";

export default function Job({ experience }) {
  return (
    <div className="flex flex-col pl-4 md:pl-8 pt-6 md:pt-0">
      <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
        <p className="font-bold text-name-color">{experience.title}</p>
        <a
          href={experience.link}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-500 hover:underline font-mono"
        >
          @ {experience.company}
        </a>
      </div>
      <p className="text-xs text-gray-600 font-mono mt-1.5 mb-5 tracking-wide">
        {experience.date}
      </p>
      <p className="font-mono text-sm leading-loose">{experience.description}</p>
    </div>
  );
}
