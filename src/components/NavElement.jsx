import React from "react";
import { Link } from "react-router-dom";

export default function NavElement({ id, title, path, handleCloseMenu }) {
  return (
    <Link
      to={path}
      className="px-3 flex items-center pt-4 lg:pt-0 group"
      onClick={() => handleCloseMenu && handleCloseMenu(false)}
    >
      <span className="text-emerald-500 font-mono text-sm">{id}.&nbsp;</span>
      <span className="text-gray-400 group-hover:text-gray-100 font-mono text-sm transition-colors duration-200">
        {title}
      </span>
    </Link>
  );
}
