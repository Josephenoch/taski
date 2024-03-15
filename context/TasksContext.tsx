import { getTasksApi } from '@/services/task'
import { TaskType } from '@/types/Task'
import React, { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react'

// Created a enum to achieve single source of truth
enum CategoryType {
  COMPLETED= "completed",
  UNCOMPLETED = "unCompleted"
}
type TasksContextType = {
  completedTasks: TaskType[]
  unCompletedTasks: TaskType[]
  deleteAllUnCompletedTasks: () => void,
  changeState: (id:string, completed: boolean) => void,
  deleteTask: (id: string, category: CategoryType) => void,
  editTask: (data: TaskType, category: CategoryType) => void,
}

const TasksContext = createContext({} as TasksContextType)

type PropsType = {
  children: ReactNode
}

export const  useTasks = () => useContext(TasksContext)
const TasksProvider:FC<PropsType> = ({
  children
}) => {
  const [loading, setLoading] = useState(false)
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([])
  const [unCompletedTasks, setUnCompletedTasks] = useState<TaskType[]>([])
  

  const fetchTodos = async () => {
    try{
      setLoading(true)
      const {data} = await getTasksApi()
      // this is an expensive operation, but is required because the of a single enpoint
      const unComplete:TaskType[] = []
      const complete:TaskType[] = []
      data.forEach(item=>{
        if(item.completed) complete.push(item)
        else unComplete.push(item)
      })
      setCompletedTasks(()=> [...complete])
      setUnCompletedTasks(()=> [...unComplete])
    }catch(err){

    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchTodos()
  },[])

  const deleteTask: TasksContextType["deleteTask"] = (id, category) => {
    // to ease the process of deleting, we get the id and the category it falls under and run some mutations
    if(category === CategoryType.COMPLETED){
      setCompletedTasks(prevState=>{
        const newResp = prevState.filter(item=> item.id !== id)
        return newResp
      })
    }else{
      setUnCompletedTasks(prevState=>{
        const newResp = prevState.filter(item=> item.id !== id)
        return newResp
      })
    }
  }

  const editTask: TasksContextType["editTask"] = (data, category) => {
    // to ease the process of editting, we get the id and the category it falls under and run some mutations
    if(category === CategoryType.COMPLETED){
      setCompletedTasks(prevState=>{
        const newData = [...prevState]
        const itemID = newData.findIndex(item=> item.id !== data.id)
        newData[itemID] = data
        return newData
      })
    }else{
      setUnCompletedTasks(prevState=>{
        const newData = [...prevState]
        const itemID = newData.findIndex(item=> item.id !== data.id)
        newData[itemID] = data
        return newData
      })
    }
  }

  const changeState:TasksContextType["changeState"] = (id, completed) => {
    // if the new state is completed, it means it was in the uncompleted category; vice-versa
    try{

      if(completed){
        const itemIdx = unCompletedTasks.findIndex(item=> item.id === id)
        if(itemIdx< 0) throw new Error("Error, please reload page")
        const item = unCompletedTasks[itemIdx]
        setUnCompletedTasks(prevState=>{
          const newData = [...prevState]
          newData.slice(itemIdx, 1)
          return newData
        })
        setCompletedTasks(prevState=>[{...item, completed}, ...prevState])
      }else{
        const itemIdx = completedTasks.findIndex(item=> item.id === id)
        if(itemIdx< 0) throw new Error("Error, please reload page")
        const item = completedTasks[itemIdx]
        setCompletedTasks(prevState=>{
          const newData = [...prevState]
          newData.slice(itemIdx, 1)
          return newData
        })
        setUnCompletedTasks(prevState=>[{...item, completed}, ...prevState])
      }
    }catch(err){
      // handle and display error messages to user
    }

  }

  const deleteAllUnCompletedTasks = () => {
    setUnCompletedTasks(()=>[])
  }
  return (
    <TasksContext.Provider value={{
      completedTasks,
      unCompletedTasks,
      editTask,
      deleteTask,
      changeState,
      deleteAllUnCompletedTasks
    }}>
      {children}
    </TasksContext.Provider>
  )
}


export default TasksProvider