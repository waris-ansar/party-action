import React, { useState } from "react";
import Image from "next/image";
import { Blinker } from "next/font/google";
import data from "./content.json";
const blinker = Blinker({ weight: ["400"], subsets: ["latin"] });

function Work({ active, setActiveSection }) {
  const [openItem, setOpenItem] = useState(null);
  const toggleContent = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };
  return (
    <section
      id="first"
      className={`opacity-100 slide-in  ${
        (active === "work" ||
          active === "schedule" ||
          active === "about" ||
          active === "contact") &&
        "active"
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

      <div
        className={`sec-body md:border-l  text-white md:grid md:grid-cols-2 md:mt-0 mt-20  ${
          active === "work" && "active"
        }`}
      >
        <div className="flex flex-col justify-center  md:px-4 ">
          <h2 className="md:text-6xl sm:text-[3.2rem] text-[2.5rem] md:leading-normal leading-tight  font-satoshi">
            Our events don’t just feature leaders in DeFi, they’re built for
            them.
          </h2>
          <p className={`${blinker.className} mt-10 text-2xl`}>
            We create spaces for founders, CTOs, developers, students and
            enthusiasts to collaborate and innovate in niche aspects of the
            future of finance. 
          </p>
        </div>
        <div className=" md:border-l overflow-auto md:h-[100vh] ">
          <div className="flex  flex-col relative md:top-[40%] md:mt-0 mt-20">
            {data.map((item, index) => {
              return (
                <div key={item.key} className="cursor-pointer ">
                  <div
                    className={`border-t md:px-10 px-4 flex justify-between md:py-10 py-4 ${
                      index === 2 && "border-b"
                    } `}
                    onClick={() => {
                      toggleContent(index);
                    }}
                  >
                    <h3 className="text-4xl font-satoshi pointer">
                      {item.title}
                    </h3>
                    <Image
                      src={
                        openItem === index
                          ? "/assets/images/close.svg"
                          : "/assets/images/open.svg"
                      }
                      width={24}
                      height={24}
                      alt="open-close"
                    />
                  </div>
                  <div className={blinker.className}>
                    <div
                      className={`${
                        openItem === index ? "block" : "hidden"
                      } border-t px-10 py-8`}
                    >
                      {item.desc !== "" && (
                        <p className="text-2xl ">{item.desc}</p>
                      )}
                      {item?.list.map((list, index) => {
                        return list.length > 2 ? (
                          <ul className="list-disc pl-6 pt-2 text-2xl">
                            <li key={index}>{list}</li>
                          </ul>
                        ) : (
                          <div key={list.key}>
                            <a href={list.titleLink}>
                              <p className={`text-2xl ${index > 0 && "mt-4"}`}>
                                {list.title}
                              </p>
                            </a>
                            {list.items.map((listItems) => {
                              return (
                                <ul
                                  className="list-disc pl-6 pt-2 text-2xl"
                                  key={index}
                                >
                                  <li>{listItems}</li>
                                </ul>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
