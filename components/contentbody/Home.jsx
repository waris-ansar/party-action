import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "./Footer";

function Home({ active, setActiveSection }) {
  const words = ["DeFi.", "blockchain", "oracles", "stablecoins"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className={`home translate-x-0 translate-y-0 ${
        active === "home" ? "active" : "hidden md:block"
      }`}
    >
      <div
        className={`w-full flex  justify-between flex-col ${
          active === "home" && "active"
        }`}
      >
        <div className="top flex flex-col justify-center flex-1 md:min-h-[350px] min-h-screen px-6">
          <h3 className="font-satoshi sm:text-[3.2rem] extrasm:text-[2.2rem] text-[2rem] md:leading-normal leading-tight  text-white font-medium w-fit mb-6 extrasm:mb-0">
            Technical conferences at the heart of
            <br className="block extrasm:hidden" />
            <span className="animation-container extrasm:ml-3">
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

          <div className="flex flex-row  mt-11 items-center">
            <div className="w-36 ">
              <Image
                src={"/assets/images/stable.svg"}
                width={0}
                height={0}
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="w-36  ml-6">
              <Image
                src={"/assets/images/unstable.svg"}
                width={0}
                height={0}
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
            <div className="w-36  ml-6">
              <Image
                src={"/assets/images/boss.svg"}
                width={0}
                height={0}
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
