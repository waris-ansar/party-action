import React from "react";
import { Blinker } from "next/font/google";
const blinker = Blinker({ weight: ["400"], subsets: ["latin"] });
import data from "./content.json";
function About({ active, setActiveSection }) {
  return (
    <section
      id="third"
      className={`opacity-100 slide-in ${
        (active === "about" || active === "contact") && "active"
      } ${active !== "about" && "hidden md:block"}`}
    >
      <div className="sec-header" onClick={() => setActiveSection("about")}>
        <span className="absolute top-9 left-0 right-0 text-center text-white text-2xl font-satoshi font-medium">
          03
        </span>
        <span className="absolute bottom-9 text-white text-2xl font-satoshi font-medium text-header-menu">
          About
        </span>
      </div>

      <div className="sec-body md:border-l text-white md:grid md:grid-cols-2 md:mt-0 mt-20">
        <div className="md:flex justify-center items-center text-center align-middle">
          <h1 className="text-[40px]  font-satoshi">About</h1>
        </div>
        <div className="md:border-l md:h-[100vh] overflow-auto">
          <div className="border-b ms:text-2xl text-xl md:mt-[20%] mt-8 md:pb-16 pb-10">
            <p className={`${blinker.className} md:mx-12 mx-4`}>
              Party Action People is a Singaporean event agency. Since 2021, we
              have focused fully on events in the blockchain/DeFi space.
            </p>
          </div>
          <div className="md:mt-20 mt-10 md:mx-12 mx-4 md:mb-0 mb-20">
            {data?.map((item) => {
              return (
                <div key={item.key}>
                  <h1 className="md:text-[40px] sm:text-[2.5rem] text-[2rem] md:leading-normal leading-tight  font-satoshi mt-12 cursor-pointer">
                    {item?.name}
                  </h1>
                  <p
                    className={`${blinker.className} sm:text-2xl text-xl mt-6`}
                  >
                    {item?.para}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
