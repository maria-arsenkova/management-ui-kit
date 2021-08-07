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
import { CommentProps } from "../Comment/types";
import firebase from "../../services/firebase";
import pdf from "./img/pdf.svg";
import zip from "./img/zip.svg";

export interface TaskProps {
  task: TaskType;
  onTaskChanged: (task: TaskType) => void;
}

function Task({ task, onTaskChanged }: TaskProps) {
  const handleComments = (newComments: CommentProps[]) => {
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
    var file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child(file.name).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          let preview =""
          if (file.name.includes('.pdf') ) {
            preview = pdf;
          }  else if (file.name.includes('.zip')) {
            preview = zip;
          }
          else {
            preview = downloadURL
          }
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
          updateFiles(newFile, task.files);
        });
      }
    );
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
