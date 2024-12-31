"use client"

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
// import { useState } from 'react';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// untuk mendisable navbar di halaman tertentu
const disableNavbar = ['/login', '/register'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  // const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       {/* <h1>
                Layout {state}
            </h1>
            <button onClick={()=>setState(state +1)}>Klik</button> */}
        {!disableNavbar.includes(pathname) && <Navbar></Navbar>}
        
        {children}
      </body>
    </html>
  );
}
