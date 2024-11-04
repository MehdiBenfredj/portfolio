import React from "react";
import photo from "../assets/photoBNP.jpeg";

export default function About() {
  return (
    <div className=" flex flex-col items-center w-screen px-12 xl:px-56 lg:py-44">
      <div>
        <p className="pb-8 text-emerald-500 font-mono">About Me</p>

        <div class="flex gap-4 flex-col items-center md:items-start md:flex-row ">
          <div>
            <p className="text-sm md:text-base">
              Hello! My name is Mehdi BENFREDJ and I'm passionate about crafting
              robust software solutions. My journey into software engineering
              began in 2019 when I first dove into algorithms and data
              structures — what started as curiosity about solving complex
              problems turned into a deep fascination with computer science
              fundamentals! Fast-forward to today, and I've had the privilege of
              working at a huge corporation and a major financial company.
              Currently, I'm working as a Java developer at Natixis CIB, where I
              focus on developing high-performance, scalable applications for
              the finance sector. Here are a few technologies I've been working
              with recently:
            </p>
            <ul class="py-8 grid grid-cols-2">
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">Java</p>
              </li>
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">C++</p>
              </li>
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">Python</p>
              </li>
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">JavaScript</p>
              </li>
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">React</p>
              </li>
            </ul>
            <p>And many more...</p>
          </div>

          <div class="relative w-56 min-w-56">
            <img src={photo} alt="Me" class="w-full block" />
            <div class="absolute inset-0 max-l-full bg-vscode-blue/50 hover:bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
