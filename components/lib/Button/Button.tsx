import { twMerge } from 'tailwind-merge'
import React, { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react'
interface PropsType extends  DetailedHTMLProps<InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

const Button:FC<PropsType> = ({
  className,
  children,
}) => {
  const style = twMerge("rounded-xl text-[#007FFF] bg-[#007FFF1A] w-[151px] h-[50px] flex items-center justify-center", className)
  return (
    <button className={style}>
      {children}
    </button>
  )
}

export default Button