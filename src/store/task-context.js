import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';


const TasksContext = React.createContext({

})
 
export function TasksContextProvider(props){
    const [tasks, setTasks] = useState([])
    const [taskToAdd,setTaskToAdd]=useState("")
    
    useEffect(()=>{
        async function fetchData() {
            const response = await fetch("http://127.0.0.1:8000/tasks")
            const data = await response.json()
            setTasks(data)
          }
          fetchData()
    },[])

    const onTaskAddHandler=async()=>{

        const newTask= {
            id:String(uuidv4()),
            task:taskToAdd,
            checked:false
        }

        const newTasks = [...tasks]
        newTasks.push(newTask)
        
        setTasks(newTasks)
        setTaskToAdd("")

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(newTask);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        const response = await fetch("http://127.0.0.1:8000/tasks/add", requestOptions)
        const data = await response.json()
    }

    const onTaskInputHandler=(input)=>{
        setTaskToAdd(input)
    }

    const onTaskStatusChangeHandler = async(completeTask,status) =>{
        const updatedTasks = [...tasks]
        const taskChanged= updatedTasks.at(completeTask)
        taskChanged.status=status
        updatedTasks[completeTask]=taskChanged
        setTasks(updatedTasks)


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(taskChanged);

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        const response = await fetch("http://127.0.0.1:8000/tasks/update/"+String(taskChanged.id), requestOptions)
        const data = await response.json()


    }

    const onTaskDeleteHandler = async () =>{
        setTasks([])

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
            };
        for (let task of tasks){
            let response = await fetch("http://127.0.0.1:8000/tasks/delete/"+String(task.id), requestOptions)
        }
    } 

    return(
        <TasksContext.Provider value={{
            tasks:tasks,
            taskToAdd:taskToAdd,
            onTaskAdd:onTaskAddHandler,
            onTaskInput:onTaskInputHandler,
            onTaskStatusChange:onTaskStatusChangeHandler,
            onTaskDelete:onTaskDeleteHandler
        }}>
            {props.children}
        </TasksContext.Provider>
        
    )
}

export default TasksContext