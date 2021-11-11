import {TaskType} from "../Components/Task/types";
import firebase from "./firebase";

const updateDescriptionTask = async (
    task: TaskType,
    newDescription: string
): Promise<TaskType> => {
    const newTask: TaskType = {
        ...task,
        description: newDescription,
    };
    const db = firebase.firestore();
    await db.collection("tasks").doc(task.id.toString()).set(newTask);
    return newTask;
};

export {updateDescriptionTask}