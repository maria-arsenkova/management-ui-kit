import React, { useState } from 'react';
import './style.css';
import close from './img/close.svg';
import firebase from '../../services/firebase';
import { TaskType } from '../Task/types';

interface modalProps {
  onCreateTaskClick: () => void;
  tasks: TaskType[];
}

const Modal = ({ onCreateTaskClick, tasks }: modalProps) => {
  const [taskTitle, setTitle] = useState<string>('');
  const [taskDescription, setDescription] = useState<string>('');

  const handleTitle = (newTitle: string): void => {
    setTitle(newTitle);
  };

  const handleDescription = (newDescription: string): void => {
    setDescription(newDescription);
  };

  const newTask: TaskType = {
    id: Date.now().toString(),
    title: taskTitle,
    createdAt: '',
    assigner: '',
    //как сделать его тут
    asignTo: {
      avatar: close,
      name: 'test',
    },
    dueOn: '',
    department: '',
    followers: [],
    description: taskDescription,
    files: [],
    discussions: [],
    isDone: false,
    //как настроить предопределение
    category: 'todo',
  };

  // const createTaskTest = (newTask: TaskType, allTask: TaskType[]): void => {
  //   const newTasks = [newTask, ...allTask];
  //   console.log(newTasks);
  // }

  const createTask = (): void => {
    const firestore = firebase.firestore();
    const docRef = firestore.doc('tasks/task');
    docRef
      .set({
        id: Date.now().toString(),
        title: taskTitle,
        createdAt: '',
        assigner: '',
        //как сделать его тут
        asignTo: {
          avatar: close,
          name: 'test',
        },
        dueOn: '',
        department: '',
        followers: [],
        description: taskDescription,
        files: [],
        discussions: [],
        isDone: false,
        category: 'todo',
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  };

  return (
    <div className='modal'>
      <div className='modal__header'>
        <span>Add a New Task</span>
        <img
          src={close}
          alt='close'
          onClick={onCreateTaskClick}
          className='modal__img-close'
        />
      </div>
      <div className='modal__task-name'>
        <div className='modal__field'>Name</div>
        <div>
          <input
            className='modal__add-name'
            type='text'
            onChange={(event) => {
              handleTitle(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className='modal__task-description'>
        <div className='modal__field'>Description</div>
        <div>
          <textarea
            className='modal__add-description'
            onChange={(event) => {
              handleDescription(event.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <button className='modal__create-task' onClick={createTask}>
        Create Task
      </button>
    </div>
  );
};

export { Modal };
