import React from "react";
import "./style.css";
import { TaskHeader } from "../TaskHeader";
import { TaskInfoBlock } from "../TaskInfoBlock";

import { TaskDescription } from "../TaskDescription";
import { TaskDiscussion } from "../TaskDiscussion";
import { TaskFiles } from "../TaskFiles";
import { TaskFilesType } from "../TaskFiles/types";

import { user } from "../Sidebar";
import { TaskType } from "./types";
import { CommentType } from "../Comment/types";
import firebase from "../../services/firebase";
import headerPhoto from "../TaskFiles/img/headerPhoto.svg";

export interface TaskProps {
  task: TaskType;
  onTaskChanged: (task: TaskType) => void;
}

function Task({ task, onTaskChanged }: TaskProps) {
  const handleComments = (newComments: CommentType[]) => {
    const newTask: TaskType = { ...task, discussions: newComments };
    onTaskChanged(newTask);
  };

  const removeFile = async (task: TaskType, fileId: string): Promise<void> => {
    const newTask: TaskType = {
      ...task,
      files: task.files.filter((file) => file.id !== fileId),
    };

    const db = firebase.firestore();

    await db.collection("tasks").doc(task.id.toString()).set(newTask);

    onTaskChanged(newTask);
  };

  //обновили все файлы в Task
  const updateFiles = async (
    newFile: TaskFilesType,
    allFiles: TaskFilesType[]
  ): Promise<void> => {
    const newFiles = [newFile, ...allFiles];
    const newTask: TaskType = {
      ...task,
      files: newFiles,
    };
    const db = firebase.firestore();

    await db.collection("tasks").doc(task.id.toString()).set(newTask);

    onTaskChanged(newTask); 
  };



  const createFile = (event: any):void => {
    const file = event.target.files[0];
    let preview = ''

    const newFile: TaskFilesType = {
      //генерировать в firestore id
      id: Date.now().toString(),
      preview: preview,
      name: file.name,
      size: file.size,
      sizeSign: "KB",
      uploadedBy: "",
      date: Date.now().toString(),
    };

    const reader = new FileReader();
    reader.onload = (event: any) => {
      newFile.preview  = event.target.result;
    };
    reader.readAsDataURL(file); 
    updateFiles(newFile, task.files);
  };

  return (
    <div className="task">
      <TaskHeader
        isDone={task.isDone}
        data={task.createdAt}
        creator={task.assigner}
        name={task.title}
        onTaskUpdate={onTaskChanged}
        task={task}
      />
      <div className="task__info-blocks">
        <TaskInfoBlock title={"Asign To"} executor={task.asignTo} />
        <TaskInfoBlock title={"Due On"} date={task.dueOn} />
        <TaskInfoBlock title={"Tag"} department={task.department} />
        <TaskInfoBlock title={"Followers"} users={task.followers} />
      </div>
      <TaskDescription text={task.description} />
      <input type="file" onChange={createFile} />
      {task.files && (
        <div className="task__files">
          {task.files.map((item) => {
            return (
              <TaskFiles
                id={item.id}
                preview={item.preview}
                name={item.name}
                size={item.size}
                onRemoveFile={() => removeFile(task, item.id)}
                key={item.id}
                sizeSign={item.sizeSign}
              />
            );
          })}
        </div>
      )}
      <div className="task__divider" />
      <TaskDiscussion
        user={user}
        task={task}
        content={task.discussions}
        onCommentCreated={handleComments}
      />
    </div>
  );
}

export { Task };
