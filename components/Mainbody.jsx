import React from "react";
import Home from "./contentbody/Home";
import Work from "./contentbody/Work/Work";
import Schedule from "./contentbody/Schedule/Schedule";
import About from "./contentbody/About/About";
import Contact from "./contentbody/Contact";

function Mainbody({ active, setActiveSection, toogle }) {
  console.log(active, "this is the active section name ");

  return (
    <div
      className={`md:absolute top-0 left-20 bottom-0 right-0   md:overflow-hidden overflow-auto ${
        toogle && "hidden"
      }`}
    >
      <Home active={active} setActiveSection={setActiveSection} />
      <Work active={active} setActiveSection={setActiveSection} />
      <Schedule active={active} setActiveSection={setActiveSection} />
      <About active={active} setActiveSection={setActiveSection} />
      <Contact active={active} setActiveSection={setActiveSection} />
    </div>
  );
}

export default Mainbody;
