import React, { FC } from 'react'

type PropsType= {
  textWidth?: string
}

const TaskSkeletonLoader:FC<PropsType> = ({
  textWidth="w-[40%]"
}) => {
  return (
    <div 
    className="w-full animate-pulse cursor-pointer min-h-[72px] bg-brand-paleWhite rounded-[20px] flex flex-row p-5 lg:p-10 space-x-6 items-center"
    >
      <div 
      className={`size-6 animate-pulse border-brand-mutedAzure bg-brand-mutedAzure rounded-[7px] cursor-pointer`}>
    </div>
      <div className={`h-4 bg-black/20 ${textWidth} rounded-sm`}></div>
    </div>
  )
}

export default TaskSkeletonLoader