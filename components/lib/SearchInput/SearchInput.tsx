import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import SearchIcon from "@/public/magnifyingglass.svg"


interface PropsType extends  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}
const SearchInput:FC<PropsType> = ({
  ...props
}) => {
  return (
    <div className="relative flex w-[260px] h-[38px] rounded-xl">
    <SearchIcon className="absolute -translate-y-1/2 top-1/2 left-3"/>
    <input
      {...props}
      className="bg-[#F5F7F9] w-full h-full rounded-xl pl-10 active:outline-brandBlue placeholder:text-[#C6CFDC] text-[#777]"
      placeholder="Search..."
    />
    </div>
  )
}

export default SearchInput