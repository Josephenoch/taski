import React, { FC, useState } from "react"
import { ExtendedTaskType, TaskType } from "@/types/Task"
import { CustomCheckBox } from "../lib"
import CloseIcon from "@/public/cross.svg"
import EditIcon from "@/public/editicon.svg"
import LeadingIcon from "@/public/leadingicon.svg"
import { useTasks } from "@/context/TasksContext"


const Task:FC<ExtendedTaskType> = ({
  id,
  title,
  content,
  completed
}) => {
  const [active, setActive] = useState(false)
  const {changeState} = useTasks()
  const handleComplete = () => {
   ()=>changeState(id, !completed)
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
    <div className={`hidden lg:flex space-x-4 ${active? "w-auto opacity-100": "w-0 opacity-0-0"}`}>
      <LeadingIcon/>
      <EditIcon/>
      <CloseIcon/>
    </div>
    </section>
  )
}

export default Task