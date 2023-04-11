import React from "react";

function CenterButton() {
  return (
    <div className="flex justify-center m-[50vh]">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/gourav-goutam/reactjs-tailwindcss-light-dark-theme"
      >
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
          Code Repository
          <i className="fa-solid fa-arrow-up-right-from-square link-icon pl-2"></i>
        </button>
      </a>
    </div>
  );
}

export default CenterButton;
