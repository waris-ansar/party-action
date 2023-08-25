import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

function Home({ active, setActiveSection }) {
  const words = ["DeFi", "Blockchain", "oracles", "stablecoins"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Adjust the time (in milliseconds) for each word to stay on screen

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className={`home translate-x-0 translate-y-0 ${
        active === "home" && "active"
      }`}
    >
      <div className="container justify-between flex-col">
        <div className="top flex flex-col justify-center flex-1 min-h-[350px] px-6">
          <h3 className="font-satoshi text-[3.2rem] text-white font-medium w-fit">
            Technical conferences at the heart of
            <span className="animation-container ml-[10px]">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`animated-word text-white  ${
                    index === currentIndex ? "visible" : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </span>
          </h3>

          <div className="flex flex-row mt-11">
            <div className="w-36 h-12">
              <Image
                src={"/assets/images/boss.svg"}
                width={0}
                height={0}
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="w-36 h-12 ml-6">
              <Image
                src={"/assets/images/stable.svg"}
                width={0}
                height={0}
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="details flex items-center border-t border-white h-40 justify-between px-6">
          <p className="font-satoshi text-base text-white font-normal">
            conferences / parties / side-events /<br></br> business development
            / marketing / pr
          </p>
          <div>
            <p className="font-satoshi text-base text-white font-normal text-right pt-1">
              Party Action People Pte. Ltd.
            </p>
            <p className="font-satoshi text-base text-white font-normal text-right pt-1">
              Seletar, Singapore
            </p>
            <p className="font-satoshi text-base text-white font-normal text-right pt-1">
              t.me/partyactionpeople
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
