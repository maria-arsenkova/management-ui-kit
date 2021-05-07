import { CommentType } from '../Comment/types';
import {
    TaskInfoBlockExecutorType,
    TaskInfoBlockUsersType,
  } from '../TaskInfoBlock/types';
import { TaskFilesType } from '../TaskFiles/types';

export type TaskType = {
    title: string;
    createdAt: string;
    assigner: string;
    asignTo: TaskInfoBlockExecutorType;
    dueOn: string;
    department: string;
    followers?: TaskInfoBlockUsersType[];
    description?: string;
    files?: TaskFilesType[];
    discussions: CommentType[];
  }