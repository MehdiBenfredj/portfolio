import React from "react";
import photo from "../assets/photoBNP.jpeg";
import { ChevronRight } from "lucide-react";

export default function About() {
  return (
    <div className=" flex flex-col items-center w-screen px-56">
      <div>
        <div className="flex ">
          <p className="pb-8 text-emerald-500 font-mono">About Me</p>
        </div>

        <div className="flex">
          <div>
            <p>
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
            <ul className="py-8 grid grid-cols-2">
              <li className="flex items-center pt-2">
                <ChevronRight color="#10b981" />
                <p className="font-mono">Java</p>
              </li>
              <li className="flex items-center pt-2">
                <ChevronRight color="#10b981" />
                <p className="font-mono">C++</p>
              </li>
              <li className="flex items-center pt-2">
                <ChevronRight color="#10b981" />
                <p className="font-mono">Python</p>
              </li>
              <li className="flex items-center pt-2">
                <ChevronRight color="#10b981" />
                <p className="font-mono">JavaScript</p>
              </li>
              <li className="flex items-center pt-2">
                <ChevronRight color="#10b981" />
                <p className="font-mono">React</p>
              </li>
            </ul>
            <p>And many more...</p>
          </div>

          <div className="relative w-full min-w-56 max-h-fit ml-4">
            <img src={photo} alt="Me" className="w-full block" />
            <div className="absolute inset-0 max-l-full bg-vscode-blue/50 hover:bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
