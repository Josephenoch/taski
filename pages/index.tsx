import { Urbanist } from "next/font/google";
import { SearchInput } from "@/components/lib";
import { CreateTask, Header, Task } from "@/components/secondary";
import { useEffect, useState } from "react";
import { TaskType } from "@/types/Task";
import { getTasksApi } from "@/services/task";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const getTodos =async () => {
    try{
      const resp = await getTasksApi()
      console.log(resp.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getTodos()
  },[])
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
        <CreateTask initialState={1}/>
        <div className="mt-10">

        <Task title="Hi" id="Holla" completed userId="1"/>
        </div>
      </section>
    </main>
  );
}
