import { CommentProps } from "../Comment/types";
import { DEPARTMENT } from "../Department";
import { TaskFilesForClient } from "../TaskFiles/types";
import { UserType } from "../UserInfo/types";

export type TaskType = {
  id: number|string;
  title: string;
  createdAt: string;
  assigner: string;
  asignTo: UserType;
  dueOn: string;
  department: DEPARTMENT;
  followers?: UserType[];
  description?: string;
  files: TaskFilesForClient[];
  discussions: CommentProps[];
  isDone: boolean;
  category: "todo" | "backlog";
  openedTask?: boolean;
};
