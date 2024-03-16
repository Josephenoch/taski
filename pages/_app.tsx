import TasksProvider from "@/context/TasksContext";
import BottomTabNavigator from "@/layout/BottomTabNavigator";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
      <BottomTabNavigator/>

    </TasksProvider>
  )
}
