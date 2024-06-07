import { twMerge } from 'tailwind-merge'
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react'
interface PropsType extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

const Button:FC<PropsType> = ({
  className,
  children,
  ...props
}) => {
  const style = twMerge("rounded-xl text-[#007FFF] bg-[#007FFF1A] w-[151px] h-[50px] flex items-center justify-center", className)
  return (
    <button {...props} className={style}>
      {children}
    </button>
  )
}

export default Button