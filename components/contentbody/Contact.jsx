import React from "react";
import { Blinker } from "next/font/google";
const blinker = Blinker({ weight: ["400"], subsets: ["latin"] });
import { Widget } from "@typeform/embed-react";

function Contact({ active, setActiveSection }) {
  return (
    <section
      id="fourth"
      className={`opacity-100 slide-in ${active === "contact" && "active"} ${
        active !== "contact" && "hidden md:block"
      }`}
    >
      <div className="sec-header" onClick={() => setActiveSection("contact")}>
        <span className="absolute top-9 left-0 right-0 text-center text-white text-2xl font-satoshi font-medium">
          04
        </span>
        <span className="absolute bottom-9 text-white text-2xl font-satoshi font-medium text-header-menu">
          Contact
        </span>
      </div>

      <div className="sec-body md:border-l  text-white md:grid grid-cols-2 w-full md:mt-0 mt-6">
        <div
          className={`md:flex  hidden text-2xl justify-center align-middle items-center h-full  md:border-r ${blinker.className}`}
        >
          <a href="mailto:contact@partyactionpeople.com">
            <h4>EMAIL</h4>
          </a>
          <h4>/X/</h4>
          <a href="https://t.me/partyactionpeople" target="_blank">
            <h4>TELEGRAM</h4>
          </a>
          <a href="https://wa.me/6588759135" target="_blank">
            <h4>WHATSAPP</h4>
          </a>
        </div>
        <div className="md:block hidden">
          <Widget
            id="https://partyactionpeople.typeform.com/papintro"
            style={{ width: "100%", height: "100%" }}
            className="my-form"
          />
        </div>
        <div className="md:hidden block mt-10 h-[80vh] mb-10">
          <Widget
            id="https://partyactionpeople.typeform.com/papintro"
            style={{ width: "100%", height: "100%" }}
            className="my-form"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
