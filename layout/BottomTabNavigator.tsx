import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";
import TodoTabIcon from "@/public/todo-tab-icon.svg";
import DoneTabIcon from "@/public/done-tab-icon.svg";
import CreateTabIcon from "@/public/create-tab-icon.svg";
import SearchTabIcon from "@/public/search-tab-icon.svg";

const BottomTabNavigator = () => {
  const router = useRouter()
  return (
    <footer className="flex fixed lg:hidden border-t-2 border-t-[#F5F7F9] bg-white h-[100px] bottom-0 w-full items-center px-20 justify-between">
      <TabItem route="/" title="Todo" icon={<TodoTabIcon color={router.pathname === "/" ? "#007FFF" : "#C6CFDC"}/>}/>
      <TabItem route="/create-task" title="Create" icon={<CreateTabIcon color={router.pathname === "/create-task" ? "#007FFF" : "#C6CFDC"}/>}/>
      <TabItem route="/search" title="Search" icon={<SearchTabIcon color={router.pathname === "/search" ? "#007FFF" : "#C6CFDC"}/>}/>
      <TabItem route="/done" title="Done" icon={<DoneTabIcon color={router.pathname === "/done" ? "#007FFF" : "#C6CFDC"}/>}/>
    </footer>
  )
}

type TabItemPropsType = {
  route: string,
  title: string,
  icon: ReactNode,
}

const TabItem:FC<TabItemPropsType> = ({route, title, icon}) => {
  const router = useRouter()
  const active = router.pathname == route
  return(
    <Link href={route} className="space-y-2 flex flex-col items-center">
      {icon}
      <span className={`inline-block ${active ? "text-[#007FFF]" : "text-[#C6CFDC]"}`}>{title}</span>
    </Link>
  )
}


const tabData:TabItemPropsType[] = [
  {
    route: "/",
    title: "Todo",
    icon: <TodoTabIcon/>
  },{
    title: "Create",
    route: "/create-task",
    icon: <CreateTabIcon/>
  },{
    title: "Search",
    route: "/search",
    icon: <SearchTabIcon/>
  },{
    title: "Done",
    route: "/done",
    icon: <DoneTabIcon/>
  }
]

export default BottomTabNavigator