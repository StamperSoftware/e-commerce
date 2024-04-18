import type { Metadata } from "next";
import "./globals.css";
import { Header } from './header'
import { Footer } from './footer'

export const metadata: Metadata = {
  title: "E-commerce store",
};

export default function RootLayout({
 children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
  );
}
