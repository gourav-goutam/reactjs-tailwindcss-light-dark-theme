import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CenterButton from "./components/CenterButton";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    console.log("dark mode : " + darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.style.colorScheme = "light";
      console.log("removed darkMode");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      console.log("added darkMode");
    }
  }
  return (
    <div>
      <div className="flex flex-col">
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <CenterButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;
