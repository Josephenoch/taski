import React, { FC } from "react"
import { TaskType } from "@/types/Task"
import { CustomCheckBox } from "../lib"
import CloseIcon from "@/public/cross.svg"
import EditIcon from "@/public/editicon.svg"
import LeadingIcon from "@/public/leadingicon.svg"


const Task:FC<TaskType> = ({
  title,
  completed
}) => {
  return (
    <section className="group w-full cursor-pointer min-h-[72px] bg-brand-paleWhite rounded-[20px] flex flex-row p-10 space-x-6">
      <CustomCheckBox onClick={()=>{}} selected={completed}/>
      <div className="w-[90%]">
        <p className={`text-lg font-semibold ${completed ?"line-through": ""}`}>{title}</p>
        <p className={`h-0 opacity-0 mt-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300 text-brand-slateBlue ${completed ?"line-through": ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia vel excepturi odit, ratione, enim asperiores cum numquam, accusamus quam id. Ipsa, tenetur minus! Necessitatibus sint corporis maiores rem alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia vel excepturi odit, ratione, enim asperiores cum numquam, accusamus quam id. Ipsa, tenetur minus! Necessitatibus sint corporis maiores rem alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia vel excepturi odit, ratione, enim asperiores cum numquam, accusamus quam id. Ipsa, tenetur minus! Necessitatibus sint corporis maiores rem alias.
        </p>
      </div>
    <div className="flex space-x-4 w-0 opacity-0 group-hover:w-auto group-hover:opacity-100">
      <LeadingIcon/>
      <EditIcon/>
      <CloseIcon/>
    </div>
    </section>
  )
}

export default Task