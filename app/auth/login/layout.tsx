import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JITSU - Login",
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
          <main className="mb-auto flex w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
