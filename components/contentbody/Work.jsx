import React from "react";
import Image from "next/image";

function Work({ active, setActiveSection }) {
  return (
    <section
      id="first"
      className={`opacity-100 slide-in  ${
        active === "work" && "active work-sec"
      }`}
      //   style={{ transform: "translate3d(100%, 0px, 0px)" }}
    >
      <div className="sec-header" onClick={() => setActiveSection("work")}>
        <span className="absolute top-9 left-0 right-0 text-center text-white text-2xl font-satoshi font-medium">
          01
        </span>
        <span className="absolute bottom-9 text-white text-2xl font-satoshi font-medium text-header-menu">
          Work
        </span>
      </div>

      <div className="sec-body">
        <h1 className="text-white text-2xl text-center">This is work</h1>
      </div>
    </section>
  );
}

export default Work;
