import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/HomePage/Navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
TracingBeam

export const metadata: Metadata = {
  title: "Portfolio of S Gyanesh Rao- Software Developer",
  description:
    "This is the portfolio of S Gyanesh Rao. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white bg-[#0d1224]">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
