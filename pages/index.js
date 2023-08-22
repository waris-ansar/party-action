import { useState } from "react";
import Header from "../components/Header";
import Mainbody from "../components/Mainbody";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  return (
    <div className="flex h-screen w-full bg-black">
      <Header active={activeSection} setActiveSection={setActiveSection}/>
      <Mainbody active={activeSection} setActiveSection={setActiveSection}/>
    </div>
  )
}
