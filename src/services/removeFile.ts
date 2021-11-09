import firebase from "./firebase";
import { TaskType } from '../Components/Task/types';

const removeFile = async (task: TaskType, fileId: string): Promise<TaskType> => {
    const newTask: TaskType = {
        ...task,
        files: task.files.filter((file) => file.id !== fileId),
    };
    const db = firebase.firestore();
    await db.collection("tasks").doc(task.id.toString()).set(newTask);
    //Удаление из Storage firebase
    const nameFile: string = task.files.filter((file) => file.id === fileId)[0].name;
    const storageRef = firebase.storage().ref();
    const desertRef = storageRef.child(nameFile);
    desertRef
        .delete()
        .then(() => {
            console.log("File deleted successfully");
        })
        .catch(() => {
            console.log("Uh-oh, an error occurred");
        });

    return newTask;
};

export {removeFile}