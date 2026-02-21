import { JetBrains_Mono, Poppins } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Eryk Olliver | Full-Stack Developer",
  description: "Sistemas e Apps que transformam visitantes em clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`h-screen w-screen relative ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
