import { v4 as uuid } from "uuid"
import React, { FC, useRef } from "react"
import EditIcon from "@/public/edit.svg"
import { useTasks } from "@/context/TasksContext"
import { useRouter } from "next/router"

type PropsType = {
  active: boolean,
  handleActive: () => void
}

const CreateTaskModal:FC<PropsType> = ({
  active,
  handleActive
}) => {
  const router = useRouter()
  const  {createTask} = useTasks()
  const titleRef = useRef({} as HTMLInputElement)
  const contentRef = useRef({} as HTMLInputElement)

  const handleSubmit = () => {
    if(titleRef.current.value && contentRef.current.value){
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
      router.push("/")
      handleActive()
    }
  }
  return (
    <div className={`h-[423px] flex flex-col absolute left-0 ${active? "bottom-0" : "-bottom-[423px]"} transition-all duration-500 z-20 w-full rounded-t-[24px] bg-white shadow-lg shadow-black px-12 pt-10`}>
      <div className="flex space-x-4">
        <div className="size-6 border-brand-mutedAzure border-2 rounded-[7px]"/>
        <input
          ref={titleRef}
          placeholder="What’s in your mind?"
          className="border-0 outline-none inline-block"
        />
      </div>
      <div className="flex space-x-4 mt-10">
        <EditIcon/>
        <input 
          ref={contentRef}
          placeholder="Add a note"
          className="border-0 outline-none inline-block"
        />
      </div>

      <button onClick={handleSubmit} className="text-[#007FFF] w-fit font-bold self-end mt-10">Create</button>
    </div>
  )
}

export default CreateTaskModal