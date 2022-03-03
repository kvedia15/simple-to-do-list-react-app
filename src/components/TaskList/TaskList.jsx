import { useContext } from 'react';
import TasksContext from '../../store/task-context';
import Task from "../TaskList/Task"
import styles from "../../styles/TaskList.module.css" 

export default function TaskList(props){
    const ctx=useContext(TasksContext)
    const tasks=ctx["tasks"]
    return(
        <ul className={styles["task-list"]} id="task-list">

                {
                    tasks.map((value,index)=>{
                        return(
                            <Task key={index} task={value.task} status={value.status} taskIndex={index}/>
                        )
                    })
                }
        </ul>
    )
}