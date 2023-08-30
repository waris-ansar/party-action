import React, { useState } from "react";
import Image from "next/image";
import { Blinker } from "next/font/google";
import data from "./content.json";
const blinker = Blinker({ weight: ["400"], subsets: ["latin"] });

function Work({ active, setActiveSection }) {
  const [openItem, setOpenItem] = useState(false);
  const toggleContent = () => {
    setOpenItem(!openItem);
  };
  let Icon = openItem ? "/assets/images/close.svg" : "/assets/images/open.svg";
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

      <div className="sec-body border-l  text-white grid grid-cols-2 ">
        <div>
          <h2>
            Our events don’t just feature leaders in DeFi, they’re built for
            them.
          </h2>
          <p>
            We create spaces for founders, CTOs, developers, students and
            enthusiasts to collaborate and innovate in niche aspects of the
            future of finance. 
          </p>
        </div>
        <div>
          {data.map((item) => {
            return (
              <div className="border-l" key={item.key}>
                <div
                  className="border-t px-10 flex justify-between"
                  onClick={toggleContent}
                >
                  <h3 className="text-4xl font-satoshi">{item.title}</h3>
                  <Image src={Icon} width={24} height={24} alt="open-close" />
                </div>
                <div className={blinker.className}>
                  <div
                    className={`${
                      openItem ? "block" : "hidden"
                    } border-t px-10 pt-8`}
                  >
                    {item.desc !== "" && (
                      <p className="text-xl ">{item.desc}</p>
                    )}
                    <ul className="list-disc pl-6 pt-2 text-xl">
                      {item?.list.map((list, index) => {
                        return list.length > 2 ? (
                          <li key={index}>{list}</li>
                        ) : (
                          <div key={list.key}>
                            <a href={list.titleLink}>
                              <p className="text-xl ">{list.title}</p>
                            </a>
                            {list.items.map((listItems) => {
                              return <li key={index}>{listItems}</li>;
                            })}
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
