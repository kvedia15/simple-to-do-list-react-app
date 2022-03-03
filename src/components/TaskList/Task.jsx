import Checkbox from "../Inputs/Checkbox";
import styles from "../../styles/Task.module.css" 
export default function Task(props) {
  const id=String(props.task).replace(/\s+/g, '-').toLowerCase();
  return (
    <li className={styles["task-container"]}>
      <Checkbox id={id} value={props.task} index={props.taskIndex} status={props.status}/>
      <div id={id} style={{marginLeft:"2px"}}>
        <p className={(props.status ? styles["complete"] : styles["incomplete"])+" "+styles["text-styling"]}>{props.task}</p>
      </div>
    </li>
  );
}
