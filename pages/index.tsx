import { Urbanist } from "next/font/google";
import { Button, SearchInput } from "@/components/lib";
import { CreateTask, Header, Task, TaskSkeletonLoader } from "@/components/secondary";
import {  useState } from "react";
import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/router";
import LeadingIcon from "@/public/leadingicon.svg"
import Link from "next/link";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  const [itemsToShow, setItemsToShow] = useState(7)
  const [showCompleted, setShowCompleted] = useState(true)
  const { unCompletedTasks, completedTasks, loading, deleteAllCompletedTasks} = useTasks()
  return (
    <main
      className={`px-8 lg:px-20 pt-10 ${urbanist.className}`}
    >
      <Header/>
      <section className="mt-8">
        <h3 className="text-xl lg:text-[28px] lg:leading-[33.6px] font-bold">
          Welcome, <span className="text-brand">John</span>. 
        </h3>
        <div className="flex justify-between mt-2 items-center">
          <span className="lg:text-lg text-brand-slateBlue">You’ve got {unCompletedTasks.length} tasks to do.</span>
          <SearchInput containerClassName="hidden lg:block" onFocus={()=> router.push("/search")}/>
        </div>
      </section>

      <section className="mt-10">
        <CreateTask initialState={1}/>
        <div className="mt-10 space-y-4">
          {
            loading &&(
              <>
                <TaskSkeletonLoader textWidth="w-[30%]"/>
                <TaskSkeletonLoader textWidth="w-[40%]"/>
                <TaskSkeletonLoader textWidth="w-[20%]"/>
                <TaskSkeletonLoader textWidth="w-[35%]"/>
              </>
            )
          }
         
        {
          unCompletedTasks.slice(0,itemsToShow).map(item=>(
            <Task {...item} key={item.id} />

          ))
        }
        </div>
        {(unCompletedTasks?.length > 0 && itemsToShow < unCompletedTasks?.length)  &&(<div className="w-full flex justify-center my-10">
          <Button data-testid="see-more-uncompleted" onClick={()=> setItemsToShow(prevState=> prevState+7)}>
            <span>See More</span>
          </Button>
        </div>)}
      </section>
      {
        completedTasks.length > 0 && (
        <section className="mt-10">
        <div className="flex justify-between">

         <div aria-label="button" onClick={()=>setShowCompleted(prevState=>!prevState)} className="cursor-pointer flex items-center space-x-4">
          <span className="text-brand-slateBlue text-lg">Completed</span>
          <LeadingIcon className={`${showCompleted ? "rotate-90" : "rotate-[-90deg]"} transition-all duration-300`}/>
         </div>
         {showCompleted && (
          <span onClick={deleteAllCompletedTasks} aria-label="button" className="cursor-pointer text-brand-fireRed inline-block underline">
            Delete all
          </span>
         )}
        </div>

        <div className="mt-10 space-y-4">
        {
          showCompleted && completedTasks.slice(0,7).map(item=>(
            <Task {...item} key={item.id} />

          ))
        }
        
        </div>
        {showCompleted &&(
        <div className="w-full flex justify-center my-10">
          <Button >
            <Link className="w-full h-full flex items-center justify-center" href="/done">See More</Link>
          </Button>
        </div>
        )}
      </section>
        )
      }


    </main>
  );
}
