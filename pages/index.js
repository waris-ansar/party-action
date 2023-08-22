import Header from "../components/Header";
import Mainbody from "../components/Mainbody";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-black">
      <Header />
      <Mainbody />
    </div>
  )
}
