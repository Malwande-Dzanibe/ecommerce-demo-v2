import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ContextComponent } from "@/store/ContextComponent";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-commerce demo v2",
  description: "A demo web app by Malwande Dzanibe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextComponent>
          <NavBar />
          <Toaster />
          {children}
        </ContextComponent>
      </body>
    </html>
  );
}
