import Image from "next/image";
import { Urbanist } from "next/font/google";
import { Logo, SearchInput } from "@/components/lib";
import { Header, Task } from "@/components/secondary";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`px-20 pt-10 ${urbanist.className}`}
    >
      <Header/>
      <section className="mt-8">
        <h3 className="text-[28px] leading-[33.6px] font-bold">
          Welcome, <span className="text-brand">John</span>. 
        </h3>
        <div className="flex justify-between mt-2 items-center">
          <span className="text-lg text-brand-slateBlue">You’ve got 7 tasks to do.</span>
          <SearchInput/>
        </div>
      </section>

<section className="mt-10">

      <Task title="Hi" id="Holla" completed userId="1"/>
</section>
    </main>
  );
}
