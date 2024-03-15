import { TaskType } from "@/types/Task";
import { AxiosPromise } from "axios";
import { http } from "./axios";

export const getTodosApi = () : AxiosPromise<TaskType[]> => {
  return http.get("/todos")
}