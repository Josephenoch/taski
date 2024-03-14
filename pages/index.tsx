import Image from "next/image";
import { Inter } from "next/font/google";
import { Logo } from "@/components/lib";
import { Header } from "@/components/secondary";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="px-20 pt-10"
    >
      <Header/>
    </main>
  );
}
