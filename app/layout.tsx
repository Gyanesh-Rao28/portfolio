'use client'
import "./globals.css";
import React, { useState, useEffect } from "react";
import PreLoader from "@/components/preLoader";
import Navbar from "@/components/Home/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [load, updateLoad] = useState(true);
  const [style, setStyle] = useState({ opacity: 1 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyle({ opacity: 0 });
      setTimeout(() => {
        updateLoad(false);
      }, 500); // This should match the CSS transition time
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PreLoader load={load} style={style} />
        <main className="min-h-screen absolute top-0 left-0 mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white ">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
