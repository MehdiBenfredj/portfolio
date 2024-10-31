import React, { useState } from "react";
import Job from "../components/Job";
import Employer from "../components/Employer";
import { experiences } from "../service/experience.js";

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col w-full items-center">


      <div className="max-w-3xl">
      <p className=" text-emerald-500 font-mono">Where I've worked</p>
        <div className="grid grid-cols-3 py-8">
          <div className="flex flex-col min-w-max ">
            {experiences.map((experience, index) => (
              <button key={index} onClick={() => setActive(index)}>
                <Employer
                  name={experience.company}
                  isActive={active === index}
                ></Employer>
              </button>
            ))}
          </div>
          <div className="col-span-2 ">
            <Job experience={experiences[active]}></Job>
          </div>
        </div>
      </div>
    </div>
  );
}
