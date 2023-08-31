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
      }`}
      // style={{ transform: "translate3d(100%, 0px, 0px)" }}
    >
      <div className="sec-header" onClick={() => setActiveSection("schedule")}>
        <span className="absolute top-9 left-0 right-0 text-center text-white text-2xl font-satoshi font-medium">
          02
        </span>
        <span className="absolute bottom-9 text-white text-2xl font-satoshi font-medium text-header-menu">
          Schedule
        </span>
      </div>

      <div className="sec-body border-l grid grid-cols-2 text-white w-full">
        <div className="flex justify-center items-center text-center align-middle">
          <h1 className="text-[40px] font-satoshi">Schedule</h1>
        </div>
        <div className="border-l flex flex-col justify-center">
          {data?.map((item) => {
            return (
              <div key={item.key} className={`${blinker.className}  text-2xl`}>
                <h4 className="mt-6">{item?.title}</h4>
                <ul className="list-disc pl-6 pt-2 text-2xl">
                  {item?.list?.map((list, index) => {
                    return <li key={index}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
