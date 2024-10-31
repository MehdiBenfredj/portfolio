import React from "react";
import logo from "./../assets/M.svg";
import NavElement from "./NavElement";
import { Link } from "react-router-dom";

export default function Navbar() {
  const url = '/mehdi_benfredj_resume.pdf';
  const filename = 'mehdi_benfredj_resume';
  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full p-4">
      <div className="flex justify-between ">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex-shrink-0 transition ease-in-out hover:rotate-90"
        >
          <img className="h-16 w-auto" src={logo} alt="Company Logo" />{" "}
        </Link>
        {/* Routes */}
        <div className="flex items-center">
          <NavElement id="01" title="About" path="/about"></NavElement>
          <NavElement
            id="02"
            title="Experience"
            path="/experience"
          ></NavElement>
          <NavElement id="03" title="Contact" path="contact"></NavElement>
          <div>
            <button onClick={handleDownload} className="px-4 py-2 border-2 border-emerald-500 rounded-lg text-emerald-500 text-lg leading-relaxed font-mono hover:text-white transition-all">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
