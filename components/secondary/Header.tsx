import React from 'react'
import { Logo } from '../lib'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex w-full  justify-between">
      <Logo/>

      <div className="flex space-x-4 items-center">
        <span>John</span>
        <div className="relative size-[42px] rounded-full">
        <Image
          fill 
          src="/avatar.png"
          alt="User profile"        
        />
        </div>
      </div>
    </div>
  )
}

export default Header