import React, { useState } from "react";
import logo from "./../assets/M.svg";
import NavElement from "./NavElement";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const url = "/mehdi_benfredj_resume.pdf";
  const filename = "mehdi_benfredj_resume";
  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full px-4 py-3 bg-vscode-blue/90 backdrop-blur-md border-b border-white/5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:rotate-90"
        >
          <img className="h-14 w-auto" src={logo} alt="Logo" />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <NavElement id="01" title="About" path="/about" />
          <NavElement id="02" title="Experience" path="/experience" />
          <NavElement id="03" title="Contact" path="contact" />
          <button
            onClick={handleDownload}
            className="ml-2 px-4 py-2 border border-emerald-500 rounded text-emerald-500 text-sm font-mono hover:bg-emerald-500 hover:text-vscode-blue transition-all duration-200"
          >
            Resume
          </button>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-gray-100 hover:bg-white/5 transition-colors duration-200"
          >
            {isOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="flex flex-col lg:hidden">
        {isOpen && (
          <div className="pt-2 pb-4 border-t border-white/5 mt-3">
            <NavElement id="01" title="About" path="/about" handleCloseMenu={setIsOpen} />
            <NavElement id="02" title="Experience" path="/experience" handleCloseMenu={setIsOpen} />
            <NavElement id="03" title="Contact" path="contact" handleCloseMenu={setIsOpen} />
            <button
              onClick={handleDownload}
              className="px-3 pt-4 text-emerald-500 text-sm font-mono hover:text-white transition-colors duration-200"
            >
              Download resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
