import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';

let TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

let storeTasks = (taskMap) => {
  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify(taskMap)
  );
}

let readStoredTasks = () => {
  let tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
  return tasksMap? tasksMap: {tasks: [], completedTasks: []};
}

function Tasks(){
    let storedTasks = readStoredTasks();
    let [taskText, setTaskText] = useState('');
    let [tasks, setTasks] = useState(storedTasks.tasks);
    let [completedTasks, setCompletedTasks] = useState(storedTasks.completedTasks);

    useEffect(() => {
      storeTasks({tasks, completedTasks})
    });

    let updateTaskText = event => {
      setTaskText(event.target.value);
    }

    let addTask = () => {
      setTasks([ ...tasks, { taskText, id: uuid() } ]);
      setTaskText('');
    }

    let completeTask = completedTask => {
      let newTasks = [];

      setCompletedTasks([...completedTasks, completedTask]);

      tasks.forEach(task => {
        if(task.id !== completedTask.id){
          newTasks.push(task);
        }
      });

      setTasks(newTasks);
    }

    let deleteTask = t  => {
      let newCompletedTasks = [];

      completedTasks.forEach(cTask => {
        if(t.id !== cTask.id){
          newCompletedTasks.push(t);
        }
      });

      setCompletedTasks(newCompletedTasks);
    }

    return(
      <div>
        <h3>Tasks</h3>
        <div className='form'>
          <input value={taskText} onChange={updateTaskText} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='task-list'>
          {
            tasks.map(task => {
              const { id, taskText } = task;

              return <div key={id} id={id} onClick={() => completeTask(task)}>{taskText}</div>
            })
          }
        </div>
        <div className='completed-list'>
          {
            completedTasks.map(completeTask => {
              let { id, taskText } = completeTask;

              return(
                <div key={id}>{taskText}{' '} <span onClick={() => deleteTask(completeTask)} className='delete-task'>x</span></div>
              );
            })
          }
        </div>
      </div>
    );
}

export default Tasks;
