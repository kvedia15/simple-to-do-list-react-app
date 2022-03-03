import { useContext } from 'react';
import TasksContext from '../../store/task-context';
import styles from "../../styles/Button.module.css"
export default function Button(){
    const ctx=useContext(TasksContext)
    
    const addTaskToTaskList=()=>{
        ctx["onTaskAdd"]()
    }


    return(
        <button className={styles["add-button"]} onClick={addTaskToTaskList}>Add</button>
    )
}