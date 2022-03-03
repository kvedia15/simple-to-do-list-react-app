import styles from "../../styles/Input.module.css"
import { useContext } from 'react';
import TasksContext from '../../store/task-context';

export default function TaskInput(){
    const ctx=useContext(TasksContext)
    
    const changeTaskToAddState = (e) =>{
        ctx["onTaskInput"](e.target.value);
    }

    const addTaskOnEnter = (e)=>{
        if (e.charCode === 13) {
            ctx["onTaskAdd"]();
          }
    }

    return(<input id="task-input" className={styles["input"]} type="text" placeholder="What we have to do?" onChange={changeTaskToAddState} value={ctx["taskToAdd"]} onKeyPress={addTaskOnEnter} />)
    
}