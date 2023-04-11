import React from "react";
function Footer() {
  return (
    <div>
      <div className="flex justify-between w-fill h-20 mt-5 p-6 rounded-full border-2 border-cyan-300 absolute inset-x-0 bottom-10">
        <h3 className="font-bold ml-28 text-sm">
          Copyright © {new Date().getFullYear()}. All rights are reserved
        </h3>
        <div className="flex shrink w-20 justify-between mr-20 text-3xl">
          <a
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gourav-goutam/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gourav-goutam"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
