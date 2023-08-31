import React from "react";
import Home from "./contentbody/Home";
import Work from "./contentbody/Work/Work";
import Schedule from "./contentbody/Schedule/Schedule";
import About from "./contentbody/About/About";
import Contact from "./contentbody/Contact";

function Mainbody({ active, setActiveSection }) {
  return (
    <div className="absolute top-0 left-20 bottom-0 right-0 h-[100vh]  overflow-hidden">
      <Home active={active} />
      <Work active={active} setActiveSection={setActiveSection} />
      <Schedule active={active} setActiveSection={setActiveSection} />
      <About active={active} setActiveSection={setActiveSection} />
      <Contact active={active} setActiveSection={setActiveSection} />
    </div>
  );
}

export default Mainbody;
