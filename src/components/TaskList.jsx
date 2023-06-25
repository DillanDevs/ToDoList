import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks, filter } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'Active') {
      return !task.completed;
    } else if (filter === 'Completed') {
      return task.completed;
    }
    return false;
  });

  if (filteredTasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
