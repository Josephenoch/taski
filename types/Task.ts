export type TaskType = {
  id: string,
  title: string,
  userId: string,
  completed: boolean
}

export interface ExtendedTaskType extends TaskType  {
  content: string
}