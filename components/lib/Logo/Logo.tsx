import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative size-[56px]">
      <Image
        fill 
        src="/logo.svg"
        alt="Taski logo"        
      />
      </div>
      <h3 className="text-[#3F3D56]  text-4xl">Taski</h3>
    </div>
  )
}

export default Logo