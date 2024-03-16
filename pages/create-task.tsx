import { Urbanist } from "next/font/google";
import { SearchInput } from "@/components/lib";
import { CreateTask, Header, Task } from "@/components/secondary";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/router";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function CreateTaskPage() {
  const router = useRouter()
  const { completedTasks} = useTasks()
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
          <span className="text-lg text-brand-slateBlue">You’ve completed {completedTasks.length} tasks.</span>
          <SearchInput onFocus={()=> router.push("/search")}/>
        </div>
      </section>

      <section className="mt-10">
        <CreateTask initialState={1}/>
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
