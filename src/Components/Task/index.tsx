import React from "react";
import "./style.scss";
import { TaskHeader } from "../TaskHeader";
import { TaskInfoBlock } from "../TaskInfoBlock";

import { TaskDescription } from "../TaskDescription";
import { TaskDiscussion } from "../TaskDiscussion";
import { TaskFiles } from "../TaskFiles";
import {
  TaskFilesType,
  TaskFilesForClient,
  SIZE_SIGN,
} from "../TaskFiles/types";

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
    newFile: TaskFilesForClient,
    allFiles: TaskFilesForClient[]
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
      (error) => {
        console.error(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          let preview = "";
          if (file.name.includes(".pdf")) {
            preview = pdf;
          } else if (file.name.includes(".zip")) {
            preview = zip;
          } else {
            preview = downloadURL;
          }

          let newFile: TaskFilesForClient = {
            id: Date.now().toString(),
            preview: preview,
            name: file.name,
            size: file.size,
            sizeSign: formatSize(file.size),
            uploadedBy: "",
            date: new Date().toLocaleDateString("en-GB", {
              weekday: "short",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }),
          };
          updateFiles(newFile, task.files);
          testDownload(file.name);
        });
      }
    );
  };

  const testDownload = (name: string) => {
    const storageRef = firebase.storage().ref();

    storageRef
      .child(name)
      .getDownloadURL()
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          var blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  //считает общий вес
  // const formatSize = (size: number, decimals: number): SIZE_SIGN => {
  //   const bytes = size;
  //   var k = 1024; //Or 1 kilo = 1000
  //   var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  // // находит степень
  //   var i = Math.floor(Math.log(bytes) / Math.log(k));
  //   let format = parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  //   console.log(i);
  //   console.log(
  //     parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))
  //   );
  // };

  const formatSize = (size: number): SIZE_SIGN => {
    const bytes = size;
    var kiloBytes = Math.pow(1024, 1);
    var megaBytes = Math.pow(1024, 2);
    var gigaBytes = Math.pow(1024, 3);
    var tbBytes = Math.pow(1024, 4);

    if (bytes < kiloBytes) {
      console.log(SIZE_SIGN.BYTES);
    } else if (bytes < megaBytes || bytes == kiloBytes ) {
      // console.log((bytes / kiloBytes).toFixed(decimals) + " " + SIZE_SIGN.KB);
      console.log(SIZE_SIGN.KB);
    } else if (bytes < gigaBytes || bytes == megaBytes) {
      console.log(SIZE_SIGN.MB);
    } else if (bytes < tbBytes || bytes == gigaBytes) {
      console.log(SIZE_SIGN.GB);
    } else console.log(SIZE_SIGN.KB);
    return SIZE_SIGN.BYTES;
  };

  return (
    <div className="Task">
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
      {task.files && (
        <div className="Task__files">
          {task.files.map((item) => {
            return (
              <TaskFiles
                file={item}
                onRemoveFile={() => removeFile(task, item.id)}
                key={item.id}
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
