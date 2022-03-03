import { useContext } from "react";
import TasksContext from "../../store/task-context";
import styles from "../../styles/ToDoListHeader.module.css"

export default function TasksTracker(props) {
  const ctx = useContext(TasksContext);
  const tasks = ctx["tasks"];
  return (
    <h6 data-testid={"tasks-tracker"} className={styles["tasks-tracker"]}>
      {String(tasks.length) + " Tasks"}
    </h6>
  );
}
