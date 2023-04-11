import React from "react";
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";

function NavBar(props) {
  return (
    <div>
      <div className="flex justify-center h-20 absolute inset-x-0 top-10 p-6 rounded-full border-2 border-cyan-300">
        <h4 className="pr-20 font-bold text-xl">Gourav Goutam</h4>
        <img
          onClick={props.toggleDarkMode}
          className="pl-20"
          src={props.darkMode ? sun : moon}
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;
