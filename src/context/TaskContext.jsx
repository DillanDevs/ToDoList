import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  
  function createTask(task) {

    setTasks([
      ...tasks,
      {
        title: task.title,
        id: Date.now(),
        descripcion: task.descripcion,
        completed: false
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleSetComplete (id) {
    const uptadedList = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTasks(uptadedList)
  }


  function delete_completed() {
    setTasks(tasks.filter((task) => task.completed == false));
  }

  function filterTasks(filter) {
    if (filter === "All") {
      return tasks;
    } else if (filter === "Active") {
      return tasks.filter((task) => !task.completed);
    } else if (filter === "Completed") {
      return tasks.filter((task) => task.completed);
    }
  
    return [];
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        setFilter,
        filterTasks,
        delete_completed,
        deleteTask,
        createTask,
        handleSetComplete,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
