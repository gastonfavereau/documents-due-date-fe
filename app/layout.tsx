//import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children,}) 
{
  return (
    <html lang="en">
      <body>

        <header className="header">Este es el header del sitio</header>
          
          <div className="ly-home-div-main">
            <div className="ly-home">
               <Link href="">Este es sidebar del sitio</Link>
              </div>

            {children}

          </div>

        <footer className="footer">Este es el footer del sitio</footer>
        
        </body>

    </html>
  );
}
