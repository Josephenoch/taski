import { Urbanist } from "next/font/google";
import { SearchInput } from "@/components/lib";
import { CreateTask, Header, Task } from "@/components/secondary";
import { useEffect, useState } from "react";
import { TaskType } from "@/types/Task";
import { getTasksApi } from "@/services/task";
import { useTasks } from "@/context/TasksContext";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  const {completedTasks, unCompletedTasks} = useTasks()
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
          <span className="text-lg text-brand-slateBlue">You’ve got {unCompletedTasks.length} tasks to do.</span>
          <SearchInput/>
        </div>
      </section>

      <section className="mt-10">
        <CreateTask initialState={1}/>
        <div className="mt-10 space-y-4">

        {
          unCompletedTasks.slice(0,7).map(item=>(
            <Task {...item} key={item.id} />

          ))
        }
        </div>
      </section>
    </main>
  );
}
