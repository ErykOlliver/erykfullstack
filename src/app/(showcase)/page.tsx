import { ShowCasePage } from "@/src/modules/showcase";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
    return (
        <>
            <button className="fixed bottom-8 hover:animate-none avatar-flutuante hover:cursor-pointer transition-transform hover:scale-120 shadow-md shadow-black/30 xl:right-10 right-4 bg-success text-white p-3.5 rounded-full z-1000"><FaWhatsapp className="size-8" /></button>
            <ShowCasePage />
        </>
    )
}