import Eraser from "../../Vector.png"
import { useContext } from "react"
import TasksContext from "../../store/task-context"
import styles from "../../styles/ToDoListHeader.module.css"
export default function ToDoListHeader(){

    const ctx=useContext(TasksContext)


    const deleteAllItems = () =>{
        ctx["onTaskDelete"]()
      } 
    
    const getUncheckedData = (tasks) =>{
    let count=0
    for (let task of tasks){
        if (task.checked === false){
        count=count+1
        }
    }
    return(count)
    }
    
    return(
        <header>
        <div className={styles["to-do-list-header-div"]}>
          <h3 className={styles["to-do-header"]}>TODAY</h3>
          <img onClick={deleteAllItems} style={{marginRight:"10px", cursor:"pointer"}} src={Eraser} alt="Button to delete all items" width="19" height="16.63"/>
        </div>

      </header>


    )
}