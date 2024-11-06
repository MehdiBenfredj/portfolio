import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export default function Index() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="flex flex-col p-12 lg:px-56 lg:py-44">
      <div className="pb-8">
        <motion.p
          className="text-emerald-500 font-mono lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, my name is
        </motion.p>
      </div>
      <div>
        <motion.p
          className="font-sans text-3xl text-name-color font-bold pb-8 lg:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Mehdi Benfredj.
        </motion.p>
        <motion.p
          className="font-sans text-2xl lg:text-5xl text-name-color/75 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          I am a full-stack software engineer
        </motion.p>
      </div>
      <motion.div
        className="py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="pb-2 font-mono">
          I am a software engineer specializing in building robust back-end
          systems.
        </p>
        <p className="pb-2 font-mono">
          With a strong background in finance. Currently building counterparty
          risk calculation engine for a financial corporation in Paris.
        </p>
      </motion.div>
    </div>
  );
}
