import React from "react";
import { Blinker } from "next/font/google";
const blinker = Blinker({ weight: ["400"], subsets: ["latin"] });
import Image from "next/image";

function Header({ active, setActiveSection, toogle, setToogle }) {
  return (
    <div>
      <header className="md:block hidden main-header items-center justify-between border-r border-white h-full w-[81px] relative z-[1] pt-6">
        <div className="logo h-9 w-9 m-auto">
          <Image
            src={"/assets/images/logo.svg"}
            height={0}
            width={0}
            alt="logo"
            style={{ width: "100%" }}
          />
        </div>
        <button
          className="home-Promt absolute top-0 left-0 w-20 h-full cursor-pointer"
          onClick={() => setActiveSection("home")}
        ></button>
      </header>
      <div className="  md:hidden flex justify-between py-6 px-6 bg-black border-b">
        <div
          className=" h-9 w-9 "
          onClick={() => {
            setActiveSection("home");
            setToogle(false);
          }}
        >
          <Image
            src={"/assets/images/logo.svg"}
            height={0}
            width={0}
            alt="logo"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="flex justify-between items-center "
          onClick={() => {
            setToogle(!toogle);
          }}
        >
          <h4 className="text-white mr-5">Menu</h4>
          <div className="  w-5 ">
            <Image
              src={"/assets/images/menu.svg"}
              height={0}
              width={0}
              alt="logo"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          toogle ? "block" : "hidden"
        } bg-black text-white h-[100vh] font-satoshi`}
      >
        <div
          className="flex flex-row text-[5vw] py-6 px-6 border-b"
          onClick={() => {
            setActiveSection("home");
            setToogle(false);
          }}
        >
          <h1 className="mr-12">001</h1>
          <h1>Home</h1>
        </div>
        <div
          className="flex flex-row text-[5vw] py-6 px-6 border-b"
          onClick={() => {
            setActiveSection("work");
            setToogle(false);
          }}
        >
          <h1 className="mr-12">002</h1>
          <h1>Work</h1>
        </div>
        <div
          className="flex flex-row text-[5vw] py-6 px-6 border-b"
          onClick={() => {
            setActiveSection("about");
            setToogle(false);
          }}
        >
          <h1 className="mr-12">003</h1>
          <h1>About</h1>
        </div>
        <div
          className="flex flex-row text-[5vw] py-6 px-6 border-b"
          onClick={() => {
            setActiveSection("schedule");
            setToogle(false);
          }}
        >
          <h1 className="mr-12">004</h1> <h1>Schedule</h1>
        </div>
        <div
          className="flex flex-row text-[5vw] py-6 px-6 border-b"
          onClick={() => {
            setActiveSection("contact");
            setToogle(false);
          }}
        >
          <h1 className="mr-12">005</h1>
          <h1>Contact</h1>
        </div>
        <div
          className={`flex text-xl justify-center align-middle items-center  text-white mt-20 ${blinker.className}`}
        >
          <a href="mailto:contact@partyactionpeople.com">
            <h4>EMAIL</h4>
          </a>
          <h4>/X/</h4>
          <a href="https://t.me/partyactionpeople" target="_blank">
            <h4>TELEGRAM/</h4>
          </a>
          <a href="https://wa.me/6588759135" target="_blank">
            <h4>WHATSAPP</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
