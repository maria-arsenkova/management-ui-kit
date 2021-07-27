import firebase from "./firebase";
import { TaskType } from '../Components/Task/types';

const getTasks = async (): Promise<TaskType[]> => {
    const allTasks: TaskType[] = [];
    const firestore = firebase.firestore();
    const document = firestore.collection('tasks');
    const snapshot = await document.get();
    snapshot.forEach((doc) => {
      const task: TaskType = {
        title: doc.get('title'),
        id: doc.id,
        createdAt: doc.get('createdAt'),
        assigner: doc.get('assigner'),
        asignTo: doc.get('asignTo'),
        dueOn: doc.get('dueOn'),
        department: doc.get('department'),
        followers: doc.get('followers'),
        discussions: doc.get('discussions'),
        files: doc.get('files'),
        isDone: doc.get('isDone'),
        category: doc.get('category'),
      };
      allTasks.push(task);
    });
    return allTasks;
  };

  export {getTasks}