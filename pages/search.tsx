import { Urbanist } from "next/font/google";
import { SearchInput } from "@/components/lib";
import { useTasks } from "@/context/TasksContext";
import { CreateTask, Header, Task } from "@/components/secondary";
import { FC, useMemo, useState } from "react";
import { ExtendedTaskType } from "@/types/Task";
import Image from "next/image";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Search() {
  const { unCompletedTasks, completedTasks} = useTasks()
  const [searchInput, setSearchInput] = useState("")
  const tasksToShow = useMemo(()=>{
    return [
      ...unCompletedTasks?.filter((item) => {
      if (item.content.toLowerCase().includes(searchInput.toLowerCase()))
        return true;
      if (item.title?.toLowerCase().includes(searchInput.toLowerCase()))
        return true;
     
    }), ...completedTasks?.filter((item) => {
      if (item.content.toLowerCase().includes(searchInput.toLowerCase()))
        return true;
      if (item.title?.toLowerCase().includes(searchInput.toLowerCase()))
        return true;
     
    }), 
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchInput])
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
          <SearchInput value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}/>
        </div>
      </section>

      <section className="mt-10">
        <div className="mt-10 space-y-4">

        {
          tasksToShow.length > 0 ?
           tasksToShow.slice(0,7).map(item=>(
            <Task {...item} key={item.id} />
          )) : (
           <EmptyState/>
          )
        }
        </div>
      </section>
    </main>
  );
}


const EmptyState:FC = () => (
  <div className="w-full h-[50vh] flex flex-col items-center justify-center">
    <div className="w-[148px] h-[144px] relative ">
      <Image
        fill
        alt="no task"
        src="/taskimage.png"
      />
    </div>
    <span className="text-[16px] text-brand-slateBlue mt-4">No result found</span>
  </div>
)