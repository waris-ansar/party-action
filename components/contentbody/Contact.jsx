import React from 'react'
import Image from 'next/image'

function Contact({active, setActiveSection}) {
  return (
    <section
      id="fourth"
      className="opacity-100"
      style={{ transform: "translate3d(100%, 0px, 0px)" }}
    >
      <div className="sec-header" onClick={() => setActiveSection('contact')}>
        <span className="absolute top-9 left-0 right-0 text-center text-white text-2xl font-satoshi font-medium">04</span>
        <span className="absolute bottom-9 text-white text-2xl font-satoshi font-medium text-header-menu">Contact</span>
      </div>

      
      <div className="sec-body">
        <div className={`container justify-between flex-col ${active === "contact" && "active"}`}>
          <div className="top flex flex-col items-stretch flex-1 min-h-[350px] px-6">
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
              conferences / parties / side-events /<br></br> business
              development / marketing / pr
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
      </div>
    </section>
  )
}

export default Contact
