import React from "react";

export default function Employer({ name, isActive, setActive }) {
  const handleClick = () => {
    setActive(index);
  };

  const className = `flex leading-relaxed font-mono p-2 pl-4 border-l-2 hover:text-emerald-500 hover:border-emerald-500 hover:bg-slate-700/50 ${
    isActive
      ? "border-l-emerald-500 text-emerald-500"
      : "border-l-gray-400 text-gray-400 "
  }`;
  return <div className={className}>{name}</div>;
}
