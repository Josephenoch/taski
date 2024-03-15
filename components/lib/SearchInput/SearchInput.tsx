import { twMerge } from "tailwind-merge"
import SearchIcon from "@/public/magnifyingglass.svg"
import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"

interface PropsType extends  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}
const SearchInput:FC<PropsType> = ({
  className,
  ...props
}) => {
  const style = twMerge("bg-[#F5F7F9] w-full h-full rounded-xl pl-10 active:outline-brand placeholder:text-[#C6CFDC] text-[#777]", className)
  return (
    <div className="relative flex w-[260px] h-[38px] rounded-xl">
    <SearchIcon className="absolute -translate-y-1/2 top-1/2 left-3"/>
    <input
      {...props}
      className={style}
      placeholder="Search..."
    />
    </div>
  )
}

export default SearchInput