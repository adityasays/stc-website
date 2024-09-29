import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "SMVDU Tech Community",
  description:
    "Good things take time - please wait till we develop this website. Thank you for your patience.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-black text-white pt-16">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
