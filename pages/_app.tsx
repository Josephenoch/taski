import TasksProvider from "@/context/TasksContext";
import BottomTabNavigator from "@/layout/BottomTabNavigator";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
<link rel="icon" type="image/png" href="/favicon.png"/>

      <meta name="description" content="Taski: Your ultimate task scheduling app for efficient planning and accomplishment. Organize, prioritize, and conquer tasks seamlessly" />
      <meta
        name="keywords"
        content="Taski, task management, todo, tasks, effectivity" />
      <meta property="og:url" content="https://taski.josephenoch.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Taski" />
      <meta
        property="og:description"
        content="Taski: Your ultimate task scheduling app for efficient planning and accomplishment. Organize, prioritize, and conquer tasks seamlessly"
      />
      <meta property="og:image" content="/social-preview.png" />
      

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="Taski" />
      <meta name="twitter:title" content="Taski" />
      <meta
        name="twitter:description"
        content="Taski - Manage tasks effectively"
      />
      <meta name="twitter:creator" content="@techbrojoe" />
      <meta name="twitter:image" content="/social-preview.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />


    </Head>
    <TasksProvider>
      <Component {...pageProps} />
      <BottomTabNavigator/>

    </TasksProvider>
    </>
  )
}
