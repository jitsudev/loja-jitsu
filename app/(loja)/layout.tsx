import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JITSU - A loja oficial dos Guerreiros",
  description: "Camisetas estampadas com tema de Jiu-jitsu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={inter.className}>
        <div className="flex flex-col h-screen justify-between">
          <Header className="flex flex-row items-center justify-between p-10" />
          <main className="mb-auto flex w-full">
            <Menu />
            <div className="flex flex-row gap-3 flex-wrap w-5/6 p-10">
              {children}
            </div>
          </main>
          <Footer className="flex flex-col" />
        </div>
      </body>
    </html>
  );
}
