import "./App.css";
import { useContext } from 'react';
import TasksContext from './store/task-context';

import TaskInput from "./components/Inputs/TaskInput";
import ToDoCard from "./components/Cards/Card";
import Button from "./components/Buttons/Button";
import GrayDiv from "./components/Divs/GrayDiv";
import TaskList from "./components/TaskList/TaskList";

import ToDoListHeader from "./components/Headers/ToDoListHeader";
import TasksTracker from "./components/Headers/TasksTracker";
function App() {

  const ctx=useContext(TasksContext)



  return (
    <div className="App">
      <ToDoCard>

        <section id='main-section'>
          <ToDoListHeader/>
          <TasksTracker/>
          <TaskList />
        </section>

        <GrayDiv>
          <TaskInput/>
          <Button />
        </GrayDiv>

      </ToDoCard>
    </div>
  );
}

export default App;
