import Image from "next/image";
import { Urbanist } from "next/font/google";
import { Logo } from "@/components/lib";
import { Header } from "@/components/secondary";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`px-20 pt-10 ${urbanist.className}`}
    >
      <Header/>
      <section className="mt-8">
        <div>
        <h3 className="text-[28px] leading-[33.6px] font-bold">
          Welcome, <span className="text-[#007FFF]">John</span>. 
        </h3>
        </div>
      </section>
    </main>
  );
}
