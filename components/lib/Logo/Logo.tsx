import Image from "next/image"
import React from "react"

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-[166px] h-[56px]">
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