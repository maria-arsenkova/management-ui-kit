import React, {useState} from 'react';
import './style.css';
import TasksList, { TasksListType } from '../TasksList';
import user from '../TasksList/img/user.png';
import userOne from '../TasksList/img/userOne.png';
import userTwo from '../TasksList/img/userTwo.png';
import userTh from '../TasksList/img/userTh.png';
import userFo from '../TasksList/img/userFo.png';
import userFr from '../TasksList/img/userFo.png';
import { Task, TaskProps } from '../Task';

const backlog: TasksListType[] = [
  {
    name: 'Backlog',
    items: [
      {
        name: 'E-mail after registration so that I can confirm my address',
        executorName: 'user',
        executorAvatar: user,
        executorPosition: 'Developement',
      },
      {
        name: 'Find top 5 customers and get reviews from them',
        executorName: 'userOne',
        executorAvatar: userOne,
        executorPosition: 'Marketing',
      },
      {
        name: 'Two-factor authentication to make my private data more secure ',
        executorName: 'userTwo',
        executorAvatar: userTwo,
        executorPosition: 'Design',
      },
    ],
  },
];

const toDo: TasksListType[] = [
  {
    name: 'To Do',
    items: [
      {
        name: 'An option to search in current projects or in all projects',
        executorName: 'userTh',
        executorAvatar: userTh,
        executorPosition: 'Design',
      },
      {
        name: 'Account for teams and personal in bottom style',
        executorName: 'userFo',
        executorAvatar: userFo,
        executorPosition: 'Marketing',
      },
      {
        name:
          'Listing on Product Hunt so that we can reach as many potential users',
        executorName: 'userFr',
        executorAvatar: userFr,
        executorPosition: 'Design',
      },
    ],
  },
];

const INITIAL_TASK_DATA: TaskProps = {
  title: "Find top 5 customer requests",
  createdAt: "yesterday at 12:41pm",
  assigner: 'Kristin A.'
}

function Tasks() {
  const [task, setTask] = useState(INITIAL_TASK_DATA)
  
  const handleTaskCardClick = (task: TaskProps) => {
   setTask(task)
  }

  return (
    <div className='tasks'>
      <div className='tasks__scrollBar'>
        <div className='tasks__group'>
          <TasksList content={backlog} onTaskClick={handleTaskCardClick} />
          <TasksList content={toDo} onTaskClick={handleTaskCardClick} />
        </div>
      </div>
      <Task title={task.title} createdAt={task.createdAt} assigner={task.assigner} />
    </div>
  );
}

export default Tasks;
