import { TaskType } from "../Task/types";

export type TaskHeaderType = {
    name: string;
    creator: string;
    data: string;
    isDone: boolean;
    task: TaskType;
    onTaskUpdate: (task: TaskType) => void;
  }