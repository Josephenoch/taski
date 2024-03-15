import React, { FC, useState } from "react"
import Checked from "@/public/checked.svg"


type PropsType = {
  selected: boolean
  onClick: ()=> void
}

const CustomCheckBox:FC<PropsType> = ({
  selected: chosen,
  onClick
}) => {
  const [selected, setSelected] = useState(chosen)
  const handleClick = () => {
    setSelected(prevState=> !prevState)
    onClick()
  }
  return (
    <div 
    onClick={handleClick}
      className={`size-6 ${selected? "" :"border-brand-mutedAzure border-2 "} rounded-[7px] cursor-pointer`}>
      {
        selected && <Checked/>
      }
    </div>
  )
}

export default CustomCheckBox