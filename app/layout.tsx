"use client";
import "../assets/css/globals.css";
import { ReactNode } from "react";

import { Roboto_Flex as Roboto } from "next/font/google";

import Provider from "../hooks/useProvider";
import Header from "../components/header";
import Footer from "../components/footer";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-Br" className="h-full antialiased" suppressHydrationWarning>
      <body className={`${roboto.variable} bg-black font-sans`}>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <Provider>
          <Header />
          <main className="relative flex justify-center items-center z-50">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
