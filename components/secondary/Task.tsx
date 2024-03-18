import React, { FC, useState } from "react"
import { ExtendedTaskType} from "@/types/Task"
import { CustomCheckBox } from "../lib"
import { CategoryType, useTasks } from "@/context/TasksContext"
import Image from "next/image"


const Task:FC<ExtendedTaskType> = ({
  id,
  title,
  content,
  completed
}) => {
  const [active, setActive] = useState(false)
  const {changeState, deleteTask} = useTasks()
  const handleComplete = () => {
   changeState(id, !completed)
  }
  return (
    <section onClick={()=> setActive(prevState=> !prevState)} className="w-full cursor-pointer min-h-[72px] bg-brand-paleWhite rounded-[20px] flex flex-row p-5 lg:p-10 space-x-6">
      <CustomCheckBox onClick={handleComplete} selected={completed}/>
      <div className="w-[90%]">
        <p className={` lg:text-lg font-semibold ${completed ?"line-through": ""}`}>{title}</p>
        <p className={`${active? "h-auto opacity-100 mt-4 " : "h-0 opacity-0 mt-0"} transition-all duration-300 text-sm lg:text-base text-brand-slateBlue ${completed ?"line-through": ""}`}>
          {content}
        </p>
      </div>
    {!completed && (
      <div className={`hidden lg:flex space-x-4 ${active? "w-auto opacity-100": "w-0 opacity-0-0"}`}>
        <Image
          src="/leadingicon.svg"
          width={30}
          height={30}
          alt="leading icon"
        />
         <Image
          src="/editicon.svg"
          width={30}
          height={30}
          alt="edit icon"
        />
         <Image
          src="/cross"
          width={30}
          height={30}
          alt="close icon"
          onClick={()=> deleteTask(id,  CategoryType.UNCOMPLETED)}
        />
      
      </div>
    )}
    {completed &&  <Image
          src="/deleteicon"
          width={30}
          height={30}
          alt="delete icon"
          onClick={()=> deleteTask(id,  CategoryType.COMPLETED)}
        />}
    </section>
  )
}

export default Task