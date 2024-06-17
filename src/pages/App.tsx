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
    setSelected(selectedTask)
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks}
        selectTask={selectTask} 
      />
      <Chronometer/>
    </div>
  );
}

export default App;