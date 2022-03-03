import { useContext } from 'react';
import TasksContext from '../../store/task-context';

export default function Checkbox(props){
    const ctx = useContext(TasksContext)
    const onTaskComplete = (e) => {
        ctx["onTaskStatusChange"](e.target.id.slice(-1),e.target.checked)
    }
    return(
        <div>
            <input data-testid={"checkbox-"+props.id+"-"+props.index} onChange={onTaskComplete} id={"checkbox-"+props.id+"-"+props.index} type="checkbox" checked={props.status || ""}></input> 
        </div>
    )
}