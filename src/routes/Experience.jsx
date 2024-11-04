import React, { useState } from "react";
import Job from "../components/Job";
import Employer from "../components/Employer";
import { experiences } from "../service/experience.js";

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <div className=" flex flex-col md:items-center w-full p-12 xl:px-56 lg:py-44">
      <div>
        <p className=" text-emerald-500 font-mono ">Where I've worked</p>

        <div className="flex py-8 overflow-x-scroll md:flex-col">
          {experiences.map((experience, index) => (
            <button key={index} onClick={() => setActive(index)}>
              <Employer
                name={experience.company}
                isActive={active === index}
              ></Employer>
            </button>
          ))}
        </div>

        <div>
          <Job experience={experiences[active]}></Job>
        </div>
      </div>
    </div>
  );
}
