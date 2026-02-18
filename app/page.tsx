import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black w-screen h-screen items-center flex flex-col gap-2 justify-center">
      <h1 className="text-3xl uppercase border-b py-1 w-1/3 font-bold text-center border-gray-600">Eryk Olliver</h1>
      <h1 className="text-xl text-gray-600 uppercase">Full-Stack Developer</h1>
    </main>
  );
}
