import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";


export default function Socials() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const iconsSize = isTabletOrMobile ? '20' : '24';

  return (
	<div className="fixed bottom-0 left-0 text-white flex flex-col items-center  md:pl-10">
        <a href="https://www.linkedin.com/in/mehdi-benfredj/">
          <FiLinkedin size={iconsSize} className="m-2 hover:fill-white transition ease-in-out hover:rotate-45" />
        </a>
        <a href="https://x.com/BenfredjMehdi">
          <FaXTwitter size={iconsSize} className="m-2 hover:fill-white transition ease-in-out hover:rotate-45" />
        </a>
        <a href="https://www.instagram.com/mehdi.bnfrdj/">
          <FiInstagram size={iconsSize} className="m-2 hover:fill-white transition ease-in-out hover:rotate-45" />
        </a>
        <a href="https://github.com/MehdiBenfredj">
          <FiGithub size={iconsSize} className="m-2 hover:fill-white transition ease-in-out hover:rotate-45" />
        </a>
        <hr className="w-1 h-24 bg-white border-none"></hr>
      </div>
  )
}
