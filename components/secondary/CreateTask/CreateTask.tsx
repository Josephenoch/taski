import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import AddOutline from "@/public/addoutline.svg"
import EditOutline from "@/public/editoutline.svg"
import { useTasks } from '@/context/TasksContext'
import { v4 as uuid } from "uuid"

type PropsType = {
  initialState:  1 | 2,

}

const CreateTask:FC<PropsType> = ({
  initialState
}) => {
  const {createTask} = useTasks()
  const titleRef = useRef({} as HTMLInputElement)
  const contentRef = useRef({} as HTMLInputElement)
  const [progress, setProgress] = useState<1 | 2>(initialState)
  const [contentFocused, setContentFocused] = useState(false)

  const handleBTNPressed = (e: KeyboardEvent) => {
    if(document.activeElement === contentRef.current) setContentFocused(true)
		if (e.key === 'Enter' && (progress !== 2)) {
			setProgress(2)
		}else if(e.key === 'Enter' && titleRef.current.value && contentRef.current.value){
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
      setProgress(1)
    }
    if(progress===2 && (document.activeElement !== contentRef.current)){
      titleRef.current?.focus()
    }
	}

  

  useEffect(()=>{
    document.addEventListener('keydown', handleBTNPressed)
    return () => document.removeEventListener("keydown", handleBTNPressed)
  })


  return (
    <div className="lg:block hidden">
        <div className="space-x-4 flex">
          <AddOutline color={progress === 2 ? "#007FFF" : "#C6CFDC"}/>
          { progress === 1 &&<span className="text-brand-slateBlue">Tap “Enter” to create task</span>}
           <input 
            ref={titleRef} 
            placeholder='Add title...'
            className={`border-0 outline-none ${progress === 2 ? "inline-block" : "hidden"}`}
            />
            
        </div>
        {
        <div className={`space-x-4 ${progress ===2 ? "flex" :"hidden"} mt-4`}>
          <EditOutline color={contentFocused ? "#007FFF" : "#C6CFDC"}/>
          { progress === 1 &&<span className="text-brand-slateBlue">Tap “Enter” to create task</span>}
           <input 
            ref={contentRef} 
            placeholder='Add note...'
            className={`w-full border-0 outline-none ${progress === 2 ? "inline-block" : "hidden"} text-wrap`}
            />
        </div>
        }
      
    </div>
  )
}

export default CreateTask