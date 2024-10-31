import React from "react";

export default function Index() {
  return (
    <div className="flex flex-col px-56 py-44">
      <div className="pb-8">
        <p className="text-emerald-500 font-mono">Hi, my name is</p>
      </div>
      <div>
        <p className="font-sans text-6xl text-name-color font-bold pb-8 ">
          Mehdi Benfredj.
        </p>
        <p className="font-sans text-5xl text-name-color/75 font-bold">
          I am a full-stack software engineer
        </p>
      </div>
      <div className="py-8">
        <p className="pb-2 text-base font-mono">
          I am a software engineer specializing in building robust back-end
          systems.
        </p>
        <p className="pb-2 text-base font-mono">
          With a strong background in finance. Currently building counterparty
          risk calculation engine for a financial corporation in Paris.
        </p>
      </div>
    </div>
  );
}
