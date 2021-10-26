import React, { useEffect, useState } from "react";
import firebase from "../../services/firebase";
import { getTasks } from "../../services/tasks";
import { Button, BUTTON_SIZE, BUTTON_VARIABLE } from "../Button";
import { SIZE_SIGN } from "../TaskFiles/types";
import { DEPARTMENT } from "../Department";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { Task } from "../Task";
import { TaskType } from "../Task/types";
import userT from "../TaskDiscussion/img/userT.png";
import userU from "../TaskDiscussion/img/userU.png";
import articleImage from "../TaskFiles/img/articleImage.svg";
import desingSource from "../TaskFiles/img/desingSource.svg";
import headerIcon from "../TaskFiles/img/headerIcon.svg";
import headerPhoto from "../TaskFiles/img/headerPhoto.svg";
import icons from "../TaskFiles/img/icons.svg";
import improvements from "../TaskFiles/img/improvements.svg";
import pdfIcon from "../TaskFiles/img/pdfIcon.svg";
import zipIcon from "../TaskFiles/img/zipIcon.svg";
import user from "../TaskInfoBlock/img/user.png";
import userO from "../TaskInfoBlock/img/userO.png";
import userS from "../TaskInfoBlock/img/userS.png";
import userY from "../TaskInfoBlock/img/userY.png";
import { TasksList, TasksListType } from "../TasksList";
import userFo from "../TasksList/img/userFo.png";
import userFr from "../TasksList/img/userFr.png";
import userOne from "../TasksList/img/userOne.png";
import userTh from "../TasksList/img/userTh.png";
import userTwo from "../TasksList/img/userTwo.png";
import { Textarea, TEXTAREA_VARIABLE } from "../Textarea";
import "./style.scss";

export const INITIAL_TASKS: TaskType[] = [
  {
    id: 1,
    title: "E-mail after registration so that I can confirm my address",
    createdAt: "today at 13:00 pm",
    assigner: "Penelope F.",
    asignTo: {
      avatar: user,
      initials: "ivan ivanov",
      position: "",
    },
    dueOn: "Tue, Apr 18",
    department: DEPARTMENT.DEVELOPEMENT,
    followers: [
      {
        avatar: userO,
        initials: "ivan ivanov",
        position: "",
      },
    ],
    discussions: [],
    description: "",
    files: [
      {
        id: Date.now().toString(),
        preview: headerPhoto,
        name: "Header Photo.jpg",
        size: 5.8,
        sizeSign: SIZE_SIGN.KB,
        uploadedBy: "Chinmay Sarasvati",
        date: "01 Jan 2019",
      },
    ],
    isDone: false,
    category: "todo",
  },
  {
    id: 2,
    category: "todo",
    title: "Find top 5 customer requests",
    createdAt: "yesterday at 12:41pm",
    assigner: "Kristin A.",
    isDone: false,
    asignTo: {
      avatar: userOne,
      initials: "Linzell Bowman",
      position: "",
    },
    dueOn: "Tue, Dec 25",
    department: DEPARTMENT.MARKETING,
    followers: [
      {
        avatar: userO,
        initials: "Bowman",
        position: "",
      },
      {
        avatar: userY,
        initials: "userY",
        position: "",
      },
      { avatar: userS, initials: "userS", position: "" },
    ],
    description:
      "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
    files: [
      {
        id: Date.now().toString(),
        preview: pdfIcon,
        name: "Redesign Brief 2019.pdf",
        size: 159,
        sizeSign: SIZE_SIGN.KB,
        uploadedBy: "Mattie Blooman",
        date: "08 Jan 2019",
      },
      {
        id: Date.now().toString(),
        preview: headerIcon,
        name: "Header.png",
        size: 129,
        sizeSign: SIZE_SIGN.KB,
        uploadedBy: "Mattie Blooman",
        date: "08 Jan 2019",
      },
      {
        id: Date.now().toString(),
        preview: articleImage,
        name: "Article Image 2.jpg",
        size: 133.9,
        sizeSign: SIZE_SIGN.KB,
        uploadedBy: "Homayoun Shakibaii",
        date: "20 Dec 2019",
      },
      {
        id: Date.now().toString(),
        preview: desingSource,
        name: "Desing Source.png",
        size: 432,
        sizeSign: SIZE_SIGN.KB,
        uploadedBy: "Ingo Schimpff",
        date: "19 Dec 2019",
      },
    ],
    discussions: [
      {
        id: Date.now().toString(),
        author: {
          avatar: userU,
          initials: "Helena Brauer",
          position: "Designer",
        },
        date: "Yesterday at 12:37pm",
        text: "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
      },
      {
        id: Date.now().toString(),
        author: {
          avatar: userT,
          initials: "Prescott MacCaffery",
          position: "Developer",
        },
        date: "Yesterday at 12:37pm",
        text: "@Helena Software quality assurance activity in which one or several humans check a program mainly ",
      },
    ],
  },
  {
    id: 3,
    category: "todo",
    title: "Two-factor authentication to make my private data more secure",
    createdAt: "yesterday at 12:00pm",
    assigner: "Kristin A.",
    isDone: false,
    asignTo: {
      avatar: userTwo,
      initials: "Louis Freeman",

      position: "",
    },
    dueOn: "Tue, Apr 18",
    department: DEPARTMENT.DESIGN,
    followers: [
      { avatar: userO, initials: "userO", position: "" },
      { avatar: userY, initials: "userY", position: "" },
    ],
    discussions: [],
    description: "",
    files: [
      {
        id: Date.now().toString(),
        preview: zipIcon,
        name: "All Files.zip",
        size: 17,
        sizeSign: SIZE_SIGN.KB,
        uploadedBy: "Alfie Wood",
        date: "02 Jan 2019",
      },
    ],
  },
  {
    id: 4,
    category: "backlog",
    title: "An option to search in current projects or in all projects",
    createdAt: "today at 14:00 pm",
    assigner: "Penelope F.",
    isDone: false,
    asignTo: {
      avatar: userTh,
      initials: "Abramson Abramson",

      position: "",
    },
    dueOn: "Tue, Apr 18",
    department: DEPARTMENT.DESIGN,
    discussions: [],
    description: "",
    files: [],
  },
  {
    id: 5,
    category: "backlog",
    title: "Account for teams and personal in bottom style",
    createdAt: "yesterday at 15:41pm",
    assigner: "Kristin A.",
    isDone: false,
    asignTo: {
      avatar: userFo,
      initials: "Hoggarth Bowman",
      position: "",
    },
    dueOn: "Tue, Dec 25",
    department: DEPARTMENT.MARKETING,
    followers: [{ avatar: userO, initials: "userO", position: "" }],
    discussions: [],
    description: "",
    files: [
      {
        id: Date.now().toString(),
        preview: pdfIcon,
        name: "Client Meeting.pdf",
        size: 119,
        sizeSign: SIZE_SIGN.KB,
        uploadedBy: "Jeremías Romero",
        date: "12 Dec 2019",
      },
      {
        id: Date.now().toString(),
        preview: icons,
        name: "Icons.png",
        size: 95,
        sizeSign: SIZE_SIGN.KB,
        uploadedBy: "Okazaki Suzuko",
        date: "07 Dec 2019",
      },
      {
        id: Date.now().toString(),
        preview: articleImage,
        name: "Article Image.jpg",
        size: 133.9,
        sizeSign: SIZE_SIGN.KB,
        uploadedBy: "Homayoun Shakibaii",
        date: "20 Dec 2019",
      },
    ],
  },
  {
    id: 6,
    category: "backlog",
    title:
      "Listing on Product Hunt so that we can reach as many potential users",
    isDone: false,
    createdAt: "yesterday at 16:00pm",
    assigner: "Kristin A.",
    asignTo: {
      avatar: userFr,
      initials: "Louis Kendal",
      position: "",
    },
    dueOn: "Tue, Apr 18",
    department: DEPARTMENT.DESIGN,
    followers: [
      { avatar: userO, initials: "userO", position: "" },
      { avatar: userY, initials: "userY", position: "" },
    ],
    discussions: [],
    description: "",
    files: [],
  },
];

function Tasks() {
  const [allTasks, setAllTasks] = useState<TaskType[]>([]);
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [category, setCategory] = useState<"backlog" | "todo">("todo");

  useEffect(() => {
    updateTasks();
  }, []);

  const handleModalClick = (): void => {
    setShowModal(!isShowModal);
  };

  const openTask = (updatedTask: TaskType) => {
    const newTasks: TaskType[] = allTasks.map((task) => {
      return {
        ...task,
        openedTask: updatedTask.id === task.id,
      };
    });

    setAllTasks(newTasks);
  };

  const backlogTasks = allTasks.filter((task) => task.category === "backlog");

  const backlog: TasksListType[] = [
    {
      name: "Backlog",
      items: backlogTasks,
    },
  ];

  const openedTask: TaskType | undefined =
    allTasks.find((task) => task.openedTask) || backlogTasks[0];

  const toDo: TasksListType[] = [
    {
      name: "To Do",
      items: allTasks.filter((task) => task.category === "todo"),
    },
  ];

  const onTaskUpdate = (updatedTask: TaskType) => {
    const newTasks: TaskType[] = allTasks.map((task) => {
      if (updatedTask.id === task.id) {
        return updatedTask;
      }
      return task;
    });

    setAllTasks(newTasks);
  };

  const [taskTitle, setTitle] = useState<string>("");
  const [taskDescription, setDescription] = useState<string>("");

  const handleTitle = (newTitle: string): void => {
    setTitle(newTitle);
  };

  const handleDescription = (newDescription: string): void => {
    setDescription(newDescription);
  };

  const newTask: TaskType = {
    ...INITIAL_TASKS[0],
    title: taskTitle,
    description: taskDescription,
    category: category,
  };

  const createTask = async (): Promise<void> => {
    const firestore = firebase.firestore();
    const document = await firestore.collection("tasks").add(newTask);
    updateTasks();
    handleModalClick();
    setTitle("");
    setDescription("");
  };

  const removeTask = async (id: any): Promise<void> => {
    const firestore = firebase.firestore();
    const res = await firestore.collection("tasks").doc(id).delete();
    updateTasks();
  };

  const updateTasks = async (): Promise<void> => {
    const allTasks = await getTasks();
    setAllTasks(allTasks);
  };

  return (
    <div className="Tasks">
      <div className="Tasks__list">
        <TasksList
          content={backlog}
          onTaskClick={openTask}
          onTaskUpdate={onTaskUpdate}
          onCreateTaskClick={handleModalClick}
          category={(category) => {
            setCategory(category);
          }}
        />
        <TasksList
          content={toDo}
          onTaskClick={openTask}
          onTaskUpdate={onTaskUpdate}
          onCreateTaskClick={handleModalClick}
          category={(category) => {
            setCategory(category);
          }}
        />
      </div>
      {openedTask && (
        <Task
          task={openedTask}
          onTaskChanged={onTaskUpdate}
          removeTask={removeTask}
        />
      )}
      {isShowModal && (
        <Modal title="Add a New Task" onClose={handleModalClick}>
          <div className="Modal__title">
            <Input label={"Name"} value={taskTitle} onChange={handleTitle} />
          </div>
          <div className="Modal__description">
            <Textarea
              variable={TEXTAREA_VARIABLE.DEFAULT}
              label={"Description"}
              handleDescription={handleDescription}
            />
          </div>
          <Button
            size={BUTTON_SIZE.LARGE}
            fillWidth
            variable={BUTTON_VARIABLE.SUCCESS}
            onClick={createTask}
          >
            Create Task
          </Button>
        </Modal>
      )}
    </div>
  );
}

export { Tasks };
