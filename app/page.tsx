import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import NavBar from "./_components/ui-kit/navbar";
import Home from "./_components/showcase/home/page";
import Projects from "./_components/showcase/projects/page";
import DigitalSolutions from "./_components/showcase/digital-solutions/page";

export default function App() {
  return (
    <>
      <button className="fixed bottom-8 animate-pulse shadow-md shadow-black/30 right-4 bg-success text-white p-3.5 rounded-full z-1000"><FaWhatsapp className="size-8" /></button>
      <NavBar />
      <Home />
      <Projects />
      <DigitalSolutions />
    </>
  );
}
