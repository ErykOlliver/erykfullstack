import Image from "next/image";
import { Heading } from "./components/text";

export default function Home() {
  return (
    <main className="bg-black w-screen h-screen items-center flex flex-col gap-2 justify-center">
      <Heading level={1} className="text-white-pure  underline">Eryk Olliver</Heading>
    </main>
  );
}
