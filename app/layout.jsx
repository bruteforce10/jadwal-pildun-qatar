import "./globals.css";
import { Inter } from "next/font/google";
import "moment/locale/id";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jadwal Pildun Qatar 2022",
  description: "Info Jadwal Piala Dunia Qatar 2022",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto min-h-screen">{children}</main>
        <footer className="p-[40px] bg-zinc-100 mt-[10px]">
          Madde By Firdi Audi Putra
        </footer>
      </body>
    </html>
  );
}
