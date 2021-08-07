import { CommentProps } from "../Comment/types";
import {
  TaskInfoBlockExecutorType,
  TaskInfoBlockUsersType,
} from "../TaskInfoBlock/types";
import { TaskFilesType } from "../TaskFiles/types";

export type TaskType = {
  id: number|string;
  title: string;
  createdAt: string;
  assigner: string;
  asignTo: TaskInfoBlockExecutorType;
  dueOn: string;
  department: string;
  followers?: TaskInfoBlockUsersType[];
  description?: string;
  files: TaskFilesType[];
  discussions: CommentProps[];
  isDone: boolean;
  category: "todo" | "backlog";
  openedTask?: boolean;
};
