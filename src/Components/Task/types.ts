import { CommentProps } from "../Comment/types";
import { TaskFilesType } from "../TaskFiles/types";
import { UserType } from "../UserInfo/types";

export type TaskType = {
  id: number|string;
  title: string;
  createdAt: string;
  assigner: string;
  asignTo: UserType;
  dueOn: string;
  department: string;
  followers?: UserType[];
  description?: string;
  files: TaskFilesType[];
  discussions: CommentProps[];
  isDone: boolean;
  category: "todo" | "backlog";
  openedTask?: boolean;
};
