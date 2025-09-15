import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "@/components/styles/globals.css";
import Providers from "./providers";
import ToastProvider from "@/components/Context/ToastContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });
const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <ToastProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
