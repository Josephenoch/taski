import { Urbanist } from "next/font/google";
import { SearchInput } from "@/components/lib";
import { CreateTask, Header, Task } from "@/components/secondary";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/router";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Done() {
  const router = useRouter()
  const { completedTasks, deleteAllCompletedTasks} = useTasks()
  return (
    <main
      className={`px-8 lg:px-20 pt-10 ${urbanist.className}`}
    >
      <Header/>
      <section className="mt-8">
        <h3 className="text-xl lg:text-[28px] lg:leading-[33.6px] font-bold flex justify-between lg:justify-start">
          <span className="hidden lg:block">Welcome, <span className="text-brand">John</span>. </span>
          <span className="lg:hidden">Completed tasks</span>
          <span onClick={deleteAllCompletedTasks} aria-label="button" className="lg:hidden text-base cursor-pointer text-brand-fireRed inline-block underline">Delete all</span>
        </h3>
        <div className=" justify-between mt-2 items-center hidden lg:flex">
          <span className="text-lg text-brand-slateBlue">You’ve completed {completedTasks.length} tasks.</span>
          <SearchInput onFocus={()=> router.push("/search")}/>
        </div>
      </section>

      <section className="mt-10">
        <div className="mt-10 space-y-4">

        {
          completedTasks.map(item=>(
            <Task {...item} key={item.id} />

          ))
        }
        </div>
      </section>
    </main>
  );
}
