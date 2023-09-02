import { useState } from "react";
import Header from "../components/Header";
import Mainbody from "../components/Mainbody";
import { Widget } from "@typeform/embed-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [toogle, setToogle] = useState(false);
  return (
    <div className="md:flex h-auto md:h-screen w-full bg-black ">
      <Header
        active={activeSection}
        setActiveSection={setActiveSection}
        toogle={toogle}
        setToogle={setToogle}
      />
      <Mainbody
        active={activeSection}
        setActiveSection={setActiveSection}
        toogle={toogle}
      />
    </div>
  );
}
