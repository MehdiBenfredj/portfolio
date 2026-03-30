import React, { useRef } from "react";
import { sendEmail } from "../service/emailSender";

const inputClass =
  "w-full bg-white/5 border border-gray-700 text-name-color text-sm rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 p-3 placeholder-gray-600 transition-colors duration-200 font-mono";

const labelClass = "block mb-2 text-xs font-mono text-gray-500 uppercase tracking-wider";

export default function Contact() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const message = messageInputRef.current.value;

    sendEmail(name, email, message);

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
  };

  return (
    <div className="w-screen flex justify-center px-12 lg:py-44">
      <div className="w-full max-w-lg">
        <p className="text-emerald-500 font-mono text-sm pb-4">Get in touch</p>
        <p className="text-2xl lg:text-3xl text-name-color font-bold leading-snug">
          Got ideas? Let's build something together.
        </p>
        <p className="text-name-color/60 py-4 font-mono text-sm">
          Tell me more about yourself and what you have in mind.
        </p>
        <form className="flex flex-col gap-5 pt-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              type="text"
              id="name"
              className={inputClass}
              placeholder="Your name"
              ref={nameInputRef}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={inputClass}
              placeholder="your@email.com"
              ref={emailInputRef}
              required
            />
          </div>
          <div>
            <label htmlFor="project" className={labelClass}>
              Message
            </label>
            <textarea
              id="project"
              className={`${inputClass} h-36 resize-none`}
              placeholder="Tell me about your project..."
              ref={messageInputRef}
              required
            />
          </div>
          <div className="flex justify-center pt-2">
            <button
              className="px-8 py-2.5 border border-emerald-500 rounded text-emerald-500 font-mono text-sm hover:bg-emerald-500 hover:text-vscode-blue transition-all duration-200"
              type="submit"
            >
              commit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
