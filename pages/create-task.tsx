import Image from "next/image";
import { v4 as uuid } from "uuid";
import PlusIcon from "@/public/Plus.svg";
import { Button } from "@/components/lib";
import { Urbanist } from "next/font/google";
import AddOutline from "@/public/addoutline.svg";
import { useTasks } from "@/context/TasksContext";
import EditOutline from "@/public/editoutline.svg";
import { Header } from "@/components/secondary";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
const urbanist = Urbanist({ subsets: ["latin"] });

export default function CreateTaskPage() {
  const router = useRouter()
  const  {createTask} = useTasks() 
  const titleRef = useRef({} as HTMLInputElement)
  const [progress, setProgress] = useState<0|1>(0)
  const contentRef = useRef({} as HTMLInputElement)
  const [contentFocused, setContentFocused] = useState(false)

  const handleBTNPressed = (e: KeyboardEvent) => {
    if(document.activeElement === contentRef.current) setContentFocused(true)
    if(progress==1&& e.key === 'Enter' && titleRef.current.value && contentRef.current.value){
      const id = uuid()
      createTask({
        id,
        userId: "1",
        completed: false,
        title: titleRef.current.value,
        content: contentRef.current.value,
      })
      titleRef.current.value = ""
      contentRef.current.value = ""
      setProgress(0)
      router.push("/")
    }
	}
  useEffect(()=>{
    document.addEventListener('keydown', handleBTNPressed)
    return () => document.removeEventListener("keydown", handleBTNPressed)
  })

 
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
          <span className="text-lg text-brand-slateBlue">Create tasks to achieve more.</span>
        </div>
      </section>

      <section className="mt-10">
      <div>
        <div className={`space-x-4 ${progress ===1 ? "flex" :"hidden"}`}>
          <AddOutline color={progress === 1 ? "#007FFF" : "#C6CFDC"}/>
           <input 
            ref={titleRef} 
            placeholder='Add title...'
            className={`border-0 outline-none ${progress === 1? "inline-block" : "hidden"}`}
            />
            
        </div>
        {
        <div className={`space-x-4 ${progress ===1 ? "flex" :"hidden"} mt-4`}>
          <EditOutline color={contentFocused ? "#007FFF" : "#C6CFDC"}/>
           <input 
            ref={contentRef} 
            placeholder='Add note...'
            className={`w-full border-0 outline-none ${progress === 1 ? "inline-block" : "hidden"} text-wrap`}
            />
        </div>
        }
      
    </div>
    {progress === 0 && (<div className="w-full h-[50vh] flex flex-col items-center justify-center">
          <div className="w-[148px] h-[144px] relative ">
            <Image
              fill
              alt="no task"
              src="/taskimage.png"
            />
          </div>
          <span className="text-[16px] text-brand-slateBlue mt-4">You have no tasks listed.</span>
          
          <Button className="mt-4" onClick={()=> setProgress(1)}>
            <div className="space-x-3 flex items-center">
            <PlusIcon/>
            <span>Create task</span>
            </div>
           
          </Button>
       
        </div>
          )
        }
      </section>
    </main>
  );
}
