import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion"

export default function Index() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="flex flex-col p-12 lg:px-56 lg:py-44">

        <div className="pb-8">
          <p className="text-emerald-500 font-mono lg:text-lg">
            Hi, my name is
          </p>
        </div>
        <div>
          <p className="font-sans text-3xl text-name-color font-bold pb-8 lg:text-6xl">
            Mehdi Benfredj.
          </p>
          <p className="font-sans text-2xl lg:text-5xl text-name-color/75 font-bold">
            I am a full-stack software engineer
          </p>
        </div>
        <div className="py-8">
          <p className="pb-2 font-mono">
            I am a software engineer specializing in building robust back-end
            systems.
          </p>
          <p className="pb-2 font-mono">
            With a strong background in finance. Currently building counterparty
            risk calculation engine for a financial corporation in Paris.
          </p>
        </div>
      </div>
  );
}
