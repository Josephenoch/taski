import { TaskType } from "@/types/Task";
import { AxiosPromise } from "axios";
import { http } from "./axios";

export const getTasksApi = () : AxiosPromise<TaskType[]> => {
  return http.get("/todos")
}

// endpoint doesn't exist
// export const createTask = (data: Exclude<TaskType, "id">): AxiosPromise<TaskType> => {
//   return http.post("/todos", data)
// }