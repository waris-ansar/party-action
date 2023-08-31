import React from "react";
import { Blinker } from "next/font/google";
const blinker = Blinker({ weight: ["400"], subsets: ["latin"] });

function Contact({ active, setActiveSection }) {
  return (
    <section
      id="fourth"
      className={`opacity-100 slide-in ${active === "contact" && "active"}`}
      // style={{ transform: "translate3d(100%, 0px, 0px)" }}
    >
      <div className="sec-header" onClick={() => setActiveSection("contact")}>
        <span className="absolute top-9 left-0 right-0 text-center text-white text-2xl font-satoshi font-medium">
          04
        </span>
        <span className="absolute bottom-9 text-white text-2xl font-satoshi font-medium text-header-menu">
          Contact
        </span>
      </div>

      <div className="sec-body border-l  text-white grid grid-cols-2 w-full">
        <div className={` ${active === "contact" && "active"}`}>
          <div
            className={`flex text-2xl justify-center align-middle items-center h-full border-r ${blinker.className}`}
          >
            <a href="mailto:info@partyactionpeople.com">
              <h4>EMAIL</h4>
            </a>
            <h4>/X/</h4>
            <a href="https://t.me/partyactionpeople" target="_blank">
              <h4>TELEGRAM</h4>
            </a>
            <h4>/X/</h4>
            <a href="https://wa.me/6588759135" target="_blank">
              <h4>WHATSAPP</h4>
            </a>
            <h4>/X/</h4>
            <a href="https://twitter.com/partyactionppl" target="_blank">
              <h4>TWITTER</h4>
            </a>
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
