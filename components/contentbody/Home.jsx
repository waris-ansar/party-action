import React from "react";
import Image from "next/image";

function Home({active, setActiveSection}) {
  return (
    <section className={`home translate-x-0 translate-y-0 ${active === "home" && "active"}`}>
      <div className="container justify-between flex-col">
        <div className="top flex flex-col justify-center flex-1 min-h-[350px] px-6">
          <h3 className="font-satoshi text-6xl text-white font-medium">
            Technical conferences at the heart of DeFi
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
            <p className="font-satoshi text-base text-white font-normal text-right pt-1">Party Action People Pte. Ltd.</p>
            <p className="font-satoshi text-base text-white font-normal text-right pt-1">Seletar, Singapore</p>
            <p className="font-satoshi text-base text-white font-normal text-right pt-1">t.me/partyactionpeople</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
