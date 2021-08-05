import React from "react";
import "./style.scss";
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

  const createFile = (event: any): void => {
    const file = event.target.files[0];
    let preview = "";

    let newFile: TaskFilesType = {
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
      newFile.preview = event.target.result;
    };
    reader.readAsDataURL(file);
    updateFiles(newFile, task.files);
  };

  //считает общий вес
  const formatBytes = (event: any, decimals: number) => {
    const bytes = event.target.files[0].size;
    var k = 1024; //Or 1 kilo = 1000
    var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    console.log(
      parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
    );
  };

  //считает и отображает в КБ
  const formatBytesKB = (event: any) => {
    const bytes = event.target.files[0].size;
    var k = 1024;
    var i = Math.floor(bytes / k);
    console.log(i + "KB");
  };

  const test = async (event: any): Promise<void> => {
    const storage = firebase.storage();
    var file = event.target.files[0];
    // Get a reference to the location where we'll store our photos
    var storageRef = storage.ref().child("chat_photos");
    // Get a reference to store file at photos/<FILENAME>.jpg
    var photoRef = storageRef.child(file.name);
     // Upload file to Firebase Storage
    var uploadTask = photoRef.put(file);
    uploadTask.on('state_changed', null, null, function() {
      // When the image has successfully uploaded, we get its download URL
      var downloadUrl = uploadTask.snapshot.downloadURL;
      
      console.log(downloadUrl);
    });
  };

  return (
    <div className="Task">
      {/* <button onClick={test}>TEST</button> */}
      {/* <input type="file" onChange={test} /> */}
      <TaskHeader
        isDone={task.isDone}
        data={task.createdAt}
        creator={task.assigner}
        name={task.title}
        onTaskUpdate={onTaskChanged}
        task={task}
      />
      <div className="Task__info-blocks">
        <TaskInfoBlock title={"Asign To"} executor={task.asignTo} />
        <TaskInfoBlock title={"Due On"} date={task.dueOn} />
        <TaskInfoBlock title={"Tag"} department={task.department} />
        <TaskInfoBlock title={"Followers"} users={task.followers} />
      </div>
      <TaskDescription text={task.description} />
      <input type="file" onChange={createFile} />
      {/* <input
        type="file"
        onChange={(event) => {
          formatBytes(event, 2);
        }}
      /> */}

      {task.files && (
        <div className="Task__files">
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
      <div className="Task__divider" />
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
