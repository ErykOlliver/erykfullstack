import Image from "next/image";
import { Heading } from "./components/ui-kit/text";
import Home from "./components/showcase/home/home";
import NavBar from "./components/ui-kit/navbar";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  return (
    <>
      <button className="fixed bottom-8 animate-pulse shadow-md shadow-black/30 right-4 bg-success text-white p-3.5 rounded-full z-100"><FaWhatsapp className="size-8" /></button>
      <NavBar />
      <Home />
      <Home />
    </>
  );
}
