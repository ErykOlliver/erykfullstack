import type { Metadata } from "next";
import "./globals.css";

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
      <body className="h-screen w-screen relative">
        {children}
      </body>
    </html>
  );
}
