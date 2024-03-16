import Image from "next/image"
import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <Link href="/" className="relative w-[83px] h-[28px] lg:w-[166px] lg:h-[56px]">
      <Image
        fill 
        src="/logo.svg"
        alt="Taski logo"        
      />
    </Link>
  )
}

export default Logo