import React from 'react'
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";

export default function Socials() {
  return (
	<div className="fixed bottom-0 left-0 text-white flex flex-col items-center  pl-10">
        <a href="https://www.linkedin.com/in/mehdi-benfredj/">
          <Linkedin className="m-2 hover:fill-white transition ease-in-out hover:rotate-45" />
        </a>
        <a href="https://x.com/BenfredjMehdi">
          <Twitter className="m-2 hover:fill-white transition ease-in-out hover:rotate-45" />
        </a>
        <a href="https://www.instagram.com/mehdi.bnfrdj/">
          <Instagram className="m-2 hover:fill-white transition ease-in-out hover:rotate-45" />
        </a>
        <a href="https://github.com/MehdiBenfredj">
          <Github className="m-2 hover:fill-white transition ease-in-out hover:rotate-45" />
        </a>
        <hr className="w-1 h-24 bg-white border-none"></hr>
      </div>
  )
}
