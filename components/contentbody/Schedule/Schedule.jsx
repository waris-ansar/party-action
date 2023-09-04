import React from "react";
import data from "./content.json";
import { Blinker } from "next/font/google";
const blinker = Blinker({ weight: ["400"], subsets: ["latin"] });

function Schedule({ active, setActiveSection }) {
  return (
    <section
      id="second"
      className={`opacity-100 slide-in ${
        (active === "schedule" || active === "about" || active === "contact") &&
        "active secdule"
      } ${active !== "schedule" && "hidden md:block"}`}
    >
      <div className="sec-header" onClick={() => setActiveSection("schedule")}>
        <span className="absolute top-9 left-0 right-0 text-center text-white text-2xl font-satoshi font-medium">
          02
        </span>
        <span className="absolute bottom-9 text-white text-2xl font-satoshi font-medium text-header-menu">
          Schedule
        </span>
      </div>

      <div className="sec-body md:border-l md:grid md:grid-cols-2 text-white w-full md:mt-0 mt-20 min-h-[100vh]">
        <div className="flex justify-center items-center text-center align-middle">
          <h1 className="md:text-[40px] sm:text-[3.2rem] text-[2.5rem]  font-satoshi">
            Schedule
          </h1>
        </div>
        <div className="md:border-l flex flex-col justify-center md:mb-0 mb-20 md:px-6 px-4">
          {data?.map((item) => {
            return (
              <div key={item.key} className={`${blinker.className}  text-2xl`}>
                <h4 className="mt-6 ">{item?.title}</h4>
                <ul className="list-disc pl-6 pt-2  text-xl">
                  {item?.list?.map((list, index) => {
                    return <li key={index}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
          <p className="md:text-2xl text-xl mt-10 font-satoshi">
            With even more in pre-production.{" "}
            <span
              onClick={() => {
                setActiveSection("contact");
              }}
              className="cursor-pointer underline"
            >
              Contact Us
            </span>{" "}
            to schedule your own event.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
