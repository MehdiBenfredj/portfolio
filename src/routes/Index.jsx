import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col p-12 lg:px-56 lg:py-44 min-h-[calc(100vh-72px)]">
      <motion.p
        className="text-emerald-500 font-mono text-sm lg:text-base pb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="font-sans text-4xl lg:text-7xl text-name-color font-bold leading-tight pb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Mehdi Benfredj.
      </motion.h1>

      <motion.h2
        className="font-sans text-2xl lg:text-5xl text-name-color/60 font-bold leading-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        I build robust back-end systems.
      </motion.h2>

      <motion.div
        className="py-8 max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="font-mono text-sm leading-loose">
          Software engineer specializing in high-performance back-end systems
          with a strong background in finance. Currently building a counterparty
          risk calculation engine at a financial corporation in Paris.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Link
          to="/experience"
          className="inline-block px-6 py-3 border border-emerald-500 text-emerald-500 font-mono text-sm rounded hover:bg-emerald-500 hover:text-vscode-blue transition-all duration-200"
        >
          View my experience →
        </Link>
      </motion.div>
    </div>
  );
}
