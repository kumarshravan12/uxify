import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const appFont = DM_Sans({
  subsets: ["latin"],
  
});

export const metadata: Metadata = {
  title: "UIUX generator App",
  description: "generator High Quality Free UIUX Designs for mobile and web apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={appFont.className}
      >
        {children}
      </body>
    </html>
  );
}
