import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from "./App.module.scss"
import Chronometer from '../components/Chronometer';
import ITask from '../types/task';

function App() {
  const [tasks, setTasks] = useState<Array<ITask> | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(olderTasks => olderTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id? true : false
    })));
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(olderTasks => olderTasks.map(task => {
        if (task.id) {
          return {
            ...task,
            selected:false,
            completed:true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks}
        selectTask={selectTask} 
      />
      <Chronometer 
        selected={selected} 
        finishTask={finishTask}/>
    </div>
  );
}

export default App;