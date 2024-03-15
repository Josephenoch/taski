import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import AddOutline from "@/public/addoutline.svg"
import EditOutline from "@/public/editoutline.svg"
import { useRouter } from 'next/router'
import { useTasks } from '@/context/TasksContext'

type PropsType = {
  initialState: 1 | 2 
}
const CreateTask:FC<PropsType> = ({
  initialState
}) => {
  const {} = useTasks()
  const [progress, setProgress] = useState<1 | 2>(initialState)
  const titleRef = useRef({} as HTMLInputElement)
  const contentRef = useRef({} as HTMLInputElement)

  const handleBTNPressed = (e: KeyboardEvent) => {
		if (e.key === 'Enter' && progress !== 2) {
			setProgress(2)
		}else if(e.key === 'Enter' && titleRef.current.value && contentRef.current.value){

    }
    if(progress===2 && (document.activeElement !== contentRef.current)){
      titleRef.current?.focus()
    }
	}

  useEffect(()=>{
    document.addEventListener('keydown', handleBTNPressed)
    return () => document.removeEventListener("keydown", handleBTNPressed)
  })


  const isContentFocused = useMemo(()=>{
    if(typeof document === 'undefined') return false
    if(document?.activeElement !== contentRef?.current ) return true
    return false
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[typeof document])

  return (
    <div>
      
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
          <EditOutline color={isContentFocused ? "#007FFF" : "#C6CFDC"}/>
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