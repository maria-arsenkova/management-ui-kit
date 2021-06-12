import React, { useState } from 'react';
import './style.css';
import { TasksList, TasksListType } from '../TasksList';
import userOne from '../TasksList/img/userOne.png';
import userTwo from '../TasksList/img/userTwo.png';
import userTh from '../TasksList/img/userTh.png';
import userFo from '../TasksList/img/userFo.png';
import userFr from '../TasksList/img/userFr.png';
import { Task } from '../Task';
import { TaskType } from '../Task/types';
import user from '../TaskInfoBlock/img/user.png';
import userO from '../TaskInfoBlock/img/userO.png';
import userY from '../TaskInfoBlock/img/userY.png';
import userS from '../TaskInfoBlock/img/userS.png';
import headerIcon from '../TaskFiles/img/headerIcon.svg';
import pdfIcon from '../TaskFiles/img/pdfIcon.svg';
import zipIcon from '../TaskFiles/img/zipIcon.svg';
import articleImage from '../TaskFiles/img/articleImage.svg';
import headerPhoto from '../TaskFiles/img/headerPhoto.svg';
import desingSource from '../TaskFiles/img/desingSource.svg';
import improvements from '../TaskFiles/img/improvements.svg';
import scrumIcon from '../TaskFiles/img/scrumIcon.svg';
import wood from '../TaskFiles/img/wood.svg';
import backgroundIcon from '../TaskFiles/img/backgroundIcon.svg';
import dawn from '../TaskFiles/img/dawn.jpg';
import city from '../TaskFiles/img/city.jpg';
import icons from '../TaskFiles/img/icons.svg';
import userT from '../TaskDiscussion/img/userT.png';
import userU from '../TaskDiscussion/img/userU.png';

export const INITIAL_TASKS: TaskType[] = [
  {
    id: 1,
    title: 'E-mail after registration so that I can confirm my address',
    createdAt: 'today at 13:00 pm',
    assigner: 'Penelope F.',
    asignTo: {
      avatar: user,
      name: 'ivan ivanov',
    },
    dueOn: 'Tue, Apr 18',
    department: 'Developement',
    followers: [{ avatar: userO, name: 'userO' }],
    discussions: [],
    files: [
      {
        id: '0',
        preview: headerPhoto,
        name: 'Header Photo.jpg',
        size: 5.8,
        sizeSign: 'MB',
        uploadedBy: 'Chinmay Sarasvati',
        date: '01 Jan 2019',
      },
      {
        id: '1',
        preview: improvements,
        name: 'Improvements. jpg',
        size: 290,
        sizeSign: 'KB',
        uploadedBy: 'Jacqueline Asong',
        date: '17 Dec 2019',
      },
      {
        id: '2',
        preview: zipIcon,
        name: 'All Use.zip',
        size: 250,
        sizeSign: 'KB',
        uploadedBy: 'Emily Asong',
        date: '17 Dec 2019',
      },
      {
        id: '3',
        preview: pdfIcon,
        name: 'Photo Use.pdf',
        size: 360,
        sizeSign: 'KB',
        uploadedBy: 'Emily Asong',
        date: '17 Dec 2019',
      },
    ],
    isDone: false,
    category: 'todo',
  },
  {
    id: 2,
    category: 'todo',
    title: 'Find top 5 customer requests',
    createdAt: 'yesterday at 12:41pm',
    assigner: 'Kristin A.',
    isDone: false,
    asignTo: {
      avatar: userOne,
      name: 'Linzell Bowman',
    },
    dueOn: 'Tue, Dec 25',
    department: 'Marketing',
    followers: [
      { avatar: userO, name: 'userO' },
      { avatar: userY, name: 'userY' },
      { avatar: userS, name: 'userS' },
    ],
    description:
      'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    files: [
      {
        id: '0',
        preview: pdfIcon,
        name: 'Redesign Brief 2019.pdf',
        size: 159,
        sizeSign: 'KB',
        uploadedBy: 'Mattie Blooman',
        date: '08 Jan 2019',
      },
      {
        id: '1',
        preview: headerIcon,
        name: 'Header.png',
        size: 129,
        sizeSign: 'KB',
        uploadedBy: 'Mattie Blooman',
        date: '08 Jan 2019',
      },
      {
        id: '2',
        preview: articleImage,
        name: 'Article Image.jpg',
        size: 133.9,
        sizeSign: 'MB',
        uploadedBy: 'Homayoun Shakibaii',
        date: '20 Dec 2019',
      },
      {
        id: '3',
        preview: desingSource,
        name: 'Desing Source.png',
        size: 432,
        sizeSign: 'KB',
        uploadedBy: 'Ingo Schimpff',
        date: '19 Dec 2019',
      },
    ],
    discussions: [
      {
        id: Date.now().toString(),
        name: 'Helena Brauer',
        position: 'Designer',
        photo: userU,
        date: 'Yesterday at 12:37pm',
        text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
      },
      {
        id: Date.now().toString(),
        name: 'Prescott MacCaffery',
        position: 'Developer',
        photo: userT,
        date: 'Yesterday at 12:37pm',
        text: '@Helena Software quality assurance activity in which one or several humans check a program mainly ',
      },
    ],
  },
  {
    id: 3,
    category: 'todo',
    title: 'Two-factor authentication to make my private data more secure',
    createdAt: 'yesterday at 12:00pm',
    assigner: 'Kristin A.',
    isDone: false,
    asignTo: {
      avatar: userTwo,
      name: 'Louis Freeman',
    },
    dueOn: 'Tue, Apr 18',
    department: 'Design',
    followers: [
      { avatar: userO, name: 'userO' },
      { avatar: userY, name: 'userY' },
    ],
    discussions: [],
    files: [
      {
        id: '0',
        preview: zipIcon,
        name: 'All Files.zip',
        size: 17,
        sizeSign: 'KB',
        uploadedBy: 'Alfie Moore',
        date: '02 Jan 2019',
      },
      {
        id: '1',
        preview: scrumIcon,
        name: 'Scrum.jpg',
        size: 57.9,
        sizeSign: 'MB',
        uploadedBy: 'Matilda Evans',
        date: '09 Dec 2019',
      },
      {
        id: '2',
        preview: pdfIcon,
        name: 'Stakeholder.pdf',
        size: 41.8,
        sizeSign: 'MB',
        uploadedBy: 'Sukhnam Chander',
        date: '02 Dec 2019',
      },
    ],
  },
  {
    id: 4,
    category: 'backlog',
    title: 'An option to search in current projects or in all projects',
    createdAt: 'today at 14:00 pm',
    assigner: 'Penelope F.',
    isDone: false,
    asignTo: {
      avatar: userTh,
      name: 'Abramson Abramson',
    },
    dueOn: 'Tue, Apr 18',
    department: 'Design',
    discussions: [],
    files: [
      {
        id: '0',
        preview: city,
        name: 'Сity.jpg',
        size: 6.5,
        sizeSign: 'MB',
        uploadedBy: 'Eva Smith',
        date: '04 Jan 2019',
      },
      {
        id: '1',
        preview: pdfIcon,
        name: 'Сity.pdf',
        size: 760,
        sizeSign: 'KB',
        uploadedBy: 'Ruby Adamson',
        date: '18 Dec 2019',
      },
      {
        id: '2',
        preview: zipIcon,
        name: 'Сity.zip',
        size: 200,
        sizeSign: 'KB',
        uploadedBy: 'Chloe Johnson',
        date: '19 Dec 2019',
      },
    ],
  },
  {
    id: 5,
    category: 'backlog',
    title: 'Account for teams and personal in bottom style',
    createdAt: 'yesterday at 15:41pm',
    assigner: 'Kristin A.',
    isDone: false,
    asignTo: {
      avatar: userFo,
      name: 'Hoggarth Bowman',
    },
    dueOn: 'Tue, Dec 25',
    department: 'Marketing',
    followers: [{ avatar: userO, name: 'userO' }],
    discussions: [],
    files: [
      {
        id: '0',
        preview: pdfIcon,
        name: 'Client Meeting.pdf',
        size: 119,
        sizeSign: 'KB',
        uploadedBy: 'Jeremías Romero',
        date: '12 Dec 2019',
      },
      {
        id: '1',
        preview: icons,
        name: 'Icons.png',
        size: 95,
        sizeSign: 'KB',
        uploadedBy: 'Okazaki Suzuko',
        date: '07 Dec 2019',
      },
      {
        id: '2',
        preview: articleImage,
        name: 'Article Image.jpg',
        size: 133.9,
        sizeSign: 'MB',
        uploadedBy: 'Homayoun Shakibaii',
        date: '20 Dec 2019',
      },
      {
        id: '3',
        preview: backgroundIcon,
        name: 'Background.jpg',
        size: 17.3,
        sizeSign: 'MB',
        uploadedBy: 'Wilhelm Dowall',
        date: '01 Dec 2019',
      },
    ],
  },
  {
    id: 6,
    category: 'backlog',
    title:
      'Listing on Product Hunt so that we can reach as many potential users',
    isDone: false,
    createdAt: 'yesterday at 16:00pm',
    assigner: 'Kristin A.',
    asignTo: {
      avatar: userFr,
      name: 'Louis Kendal',
    },
    dueOn: 'Tue, Apr 18',
    department: 'Design',
    files: [
      {
        id: '0',
        preview: wood,
        name: 'Wood.jpg',
        size: 4,
        sizeSign: 'MB',
        uploadedBy: 'Eva Sarasvati',
        date: '03 Jan 2019',
      },
      {
        id: '1',
        preview: dawn,
        name: 'Dawn.jpg',
        size: 50,
        sizeSign: 'MB',
        uploadedBy: 'Isla Asong',
        date: '17 Dec 2019',
      },
      {
        id: '2',
        preview: zipIcon,
        name: 'Address.zip',
        size: 250,
        sizeSign: 'KB',
        uploadedBy: 'Emily Asong',
        date: '17 Dec 2019',
      },
      {
        id: '3',
        preview: pdfIcon,
        name: 'Photo Use.pdf',
        size: 360,
        sizeSign: 'KB',
        uploadedBy: 'Emily Asong',
        date: '17 Dec 2019',
      },
    ],
    followers: [
      { avatar: userO, name: 'userO' },
      { avatar: userY, name: 'userY' },
    ],
    discussions: [],
  },
];

export interface TasksProps {
  onTasksUpdate: (task: TaskType[]) => void;
}

function Tasks({ onTasksUpdate }: TasksProps) {
  const [allTasks, setAllTasks] = useState<TaskType[]>(INITIAL_TASKS);

  const openTask = (updatedTask: TaskType) => {
    const newTasks: TaskType[] = allTasks.map((task) => {
      return {
        ...task,
        openedTask: updatedTask.id === task.id,
      };
    });

    setAllTasks(newTasks);
  };

  const backlogTasks = allTasks.filter((task) => task.category === 'backlog');

  const backlog: TasksListType[] = [
    {
      name: 'Backlog',
      items: backlogTasks,
    },
  ];

  const openedTask: TaskType | undefined =
    allTasks.find((task) => task.openedTask) || backlogTasks[0];

  const toDo: TasksListType[] = [
    {
      name: 'To Do',
      items: allTasks.filter((task) => task.category === 'todo'),
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
    onTasksUpdate(newTasks);
  };

  return (
    <div className='tasks'>
      <div className='tasks__scrollBar'>
        <div className='tasks__group'>
          <TasksList
            content={backlog}
            onTaskClick={openTask}
            onTaskUpdate={onTaskUpdate}
          />
          <TasksList
            content={toDo}
            onTaskClick={openTask}
            onTaskUpdate={onTaskUpdate}
          />
        </div>
      </div>
      {openedTask && <Task task={openedTask} onTaskChanged={onTaskUpdate} />}
    </div>
  );
}

export { Tasks };
