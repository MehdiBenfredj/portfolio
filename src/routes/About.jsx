import React from "react";
import photo from "../assets/photoBNP.jpeg";

const CheckIcon = () => (
  <svg
    className="h-4 w-4 text-emerald-500 mr-2 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
      fill="currentColor"
    />
  </svg>
);

const techs = ["Java", "C++", "Python", "JavaScript", "React", "Spring Boot"];

export default function About() {
  return (
    <div className="flex flex-col items-center w-screen px-12 xl:px-56 lg:py-44">
      <div className="w-full">
        <p className="pb-8 text-emerald-500 font-mono text-sm">About Me</p>

        <div className="flex gap-12 flex-col items-center md:items-start md:flex-row">
          <div className="max-w-lg">
            <p className="text-sm md:text-base leading-loose">
              Hello! My name is Mehdi Benfredj and I'm passionate about crafting
              robust software solutions. My journey into software engineering
              began in 2019 when I first dove into algorithms and data
              structures — what started as curiosity about solving complex
              problems turned into a deep fascination with computer science
              fundamentals. Fast-forward to today, and I've had the privilege of
              working at a major corporation and a top-tier financial firm.
              Currently, I'm working as a Java developer at Natixis CIB, where I
              focus on developing high-performance, scalable applications for the
              finance sector. Here are a few technologies I've been working with
              recently:
            </p>
            <ul className="py-6 grid grid-cols-2 gap-1">
              {techs.map((tech) => (
                <li key={tech} className="flex items-center">
                  <CheckIcon />
                  <span className="font-mono text-sm text-gray-400">{tech}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 font-mono">and more...</p>
          </div>

          {/* Photo with offset border effect */}
          <div className="relative w-52 min-w-52 shrink-0 mr-3 mb-3 mt-4 md:mt-0">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-emerald-500 rounded pointer-events-none" />
            <div className="relative group z-10">
              <img
                src={photo}
                alt="Mehdi"
                className="w-full block rounded grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded bg-emerald-900/30 group-hover:bg-transparent transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
