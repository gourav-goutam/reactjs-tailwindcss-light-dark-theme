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
      document.body.classList.remove("dark");
      console.log("removed darkMode");
    } else {
      document.body.classList.add("dark");
      console.log("added darkMode");
    }
  }
  return (
    <div className="flex flex-col">
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <CenterButton />
      <Footer />
    </div>
  );
}

export default App;
