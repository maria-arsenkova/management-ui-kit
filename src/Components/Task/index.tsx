import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import { useOnClickOutside } from "../../Hooks/useClickOutside";
import { TaskHeader } from "../TaskHeader";
import { TaskInfoBlock } from "../TaskInfoBlock";
import { Slider } from "../Slider";
import { Modal } from "../Modal";

import { TaskDescription } from "../TaskDescription";
import { TaskDiscussion } from "../TaskDiscussion";
import { TaskFiles } from "../TaskFiles";
import { TaskFilesForClient, SIZE_SIGN } from "../TaskFiles/types";

import { user } from "../Sidebar";
import { TaskType } from "./types";
import { CommentProps } from "../Comment/types";
import firebase from "../../services/firebase";
import pdf from "./img/pdf.svg";
import zip from "./img/zip.svg";
import upload from "./img/upload.svg";

export interface TaskProps {
  task: TaskType;
  onTaskChanged: (task: TaskType) => void;
  removeTask: (id: string | number) => void;
}

function Task({ task, onTaskChanged, removeTask }: TaskProps) {
  const [newDescription, setDescription] = useState("");
  const [isShowSlider, setShowSlider] = useState<boolean>(false);

  const handleComments = (newComments: CommentProps[]) => {
    const newTask: TaskType = { ...task, discussions: newComments };
    onTaskChanged(newTask);
  };

  useEffect(() => {
    setDescription(task.description);
  }, [task]);

  const removeFile = async (task: TaskType, fileId: string): Promise<void> => {
    const newTask: TaskType = {
      ...task,
      files: task.files.filter((file) => file.id !== fileId),
    };

    const db = firebase.firestore();

    await db.collection("tasks").doc(task.id.toString()).set(newTask);

    onTaskChanged(newTask);

    //Удаление из Storage firebase
    const nameFile = task.files.filter((file) => file.id == fileId)[0].name;
    const storageRef = firebase.storage().ref();
    var desertRef = storageRef.child(nameFile);
    desertRef
      .delete()
      .then(() => {
        console.log("File deleted successfully");
      })
      .catch((error) => {
        console.log("Uh-oh, an error occurred");
      });
  };

  const updateDescription = async (
    task: TaskType,
    newDescription: string
  ): Promise<void> => {
    const newTask: TaskType = {
      ...task,
      description: newDescription,
    };

    const db = firebase.firestore();

    await db.collection("tasks").doc(task.id.toString()).set(newTask);

    onTaskChanged(newTask);
  };

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
    setShowSlider(false);
  };

  const createFile = (event: any): void => {
    var file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child(file.name).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setShowSlider(true);
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            setShowSlider(false);
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");

            break;
        }
      },
      (error) => {
        console.error(error);
        setShowSlider(false);
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
          // filesDownload(file.name);
        });
      }
    );
  };

  // const filesDownload = (name: string) => {
  //   const storageRef = firebase.storage().ref();

  //   storageRef
  //     .child(name)
  //     .getDownloadURL()
  //     .then((url) => {
  //       var xhr = new XMLHttpRequest();
  //       xhr.responseType = "blob";
  //       xhr.onload = (event) => {
  //         var blob = xhr.response;
  //       };
  //       xhr.open("GET", url);
  //       xhr.send();

  //       console.log("моя ссылка на скачивание", url);
  //     })
  //     .catch((error) => {
  //       // Handle any errors
  //     });
  // };

  const formatSize = (size: number): SIZE_SIGN => {
    const bytes = size;
    const kiloBytes = Math.pow(1024, 1);
    const megaBytes = Math.pow(1024, 2);
    const gigaBytes = Math.pow(1024, 3);
    const tbBytes = Math.pow(1024, 4);
    const ptbBytes = Math.pow(1024, 5);

    switch (true) {
      case bytes < kiloBytes:
        return SIZE_SIGN.BYTES;

      case bytes < megaBytes || bytes == kiloBytes:
        return SIZE_SIGN.KB;

      case bytes < gigaBytes || bytes == megaBytes:
        return SIZE_SIGN.MB;

      case bytes < tbBytes || bytes == gigaBytes:
        return SIZE_SIGN.GB;

      case bytes < ptbBytes || bytes == tbBytes:
        return SIZE_SIGN.TB;

      default:
        return SIZE_SIGN.BYTES;
    }
  };

  const wrapperTaskRef = useRef<HTMLDivElement>(null);

  let modal;

  useOnClickOutside(wrapperTaskRef, () => {
    if (task.description !== newDescription) {
      // alert('У вас не сохранено описание задачи')
      // console.log("У вас не сохранено описание задачи");
     modal = (
        <Modal title="Удалить изменения?" onClose={() => {}}>
          <div> Внесенные изменения не будут сохранены.</div>
        </Modal>
      );
    } else {
      console.log("У вас все сохранено", newDescription);
    }
  });

  useEffect(() => {
    if (task.description) {
      setDescription(task.description);
    }
  }, [task.description]);

  return (
    <div className="Task" ref={wrapperTaskRef}>
      <TaskHeader
        isDone={task.isDone}
        data={task.createdAt}
        creator={task.assigner}
        name={task.title}
        onTaskUpdate={onTaskChanged}
        task={task}
      />
      <button onClick={() => removeTask(task.id)}>DELITE</button>
      <div className="Task__info-blocks">
        <TaskInfoBlock title={"Asign To"} executor={task.asignTo} />
        <TaskInfoBlock title={"Due On"} date={task.dueOn} />
        <TaskInfoBlock title={"Tag"} department={task.department} />
        <TaskInfoBlock title={"Followers"} users={task.followers} />
      </div>
      <TaskDescription
        taskDescription={task.description}
        onSave={(newDescription) => updateDescription(task, newDescription)}
        onChange={(newDescription) => {
          setDescription(newDescription);
        }}
      />
      <div className="Task__file-upload-group">
        <label htmlFor={"file-upload"} className="Task__file-upload">
          <img src={upload} className="Task__file-upload-icon" /> File Upload
        </label>
        <input
          type="file"
          onChange={createFile}
          className="Task__file-upload-hidden"
          id={"file-upload"}
        />
        {isShowSlider && <Slider />}
      </div>
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
      {modal}

    </div>
  );
}

export { Task };
