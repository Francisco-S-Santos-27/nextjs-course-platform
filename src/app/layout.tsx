import type { Metadata } from "next";
import {  Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Nextjs Course Platform",
  description: "plataforma de cursos de programação",
};


interface IRootLayout extends Readonly<{children: React.ReactNode;}>{}

export default function RootLayout({ children,}: IRootLayout) {
  return (
    <html lang="pt-BR">

      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
