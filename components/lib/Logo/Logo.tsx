import Image from "next/image"
import React from "react"

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-[83px] h-[28px] lg:w-[166px] lg:h-[56px]">
      <Image
        fill 
        src="/logo.svg"
        alt="Taski logo"        
      />
      </div>
    </div>
  )
}

export default Logo