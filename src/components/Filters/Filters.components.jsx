import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

function Filters() {
  const { tasks, setFilter, filter, delete_completed } = useContext(TaskContext);

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handleDeleteCompleted = () => {
    delete_completed();
  };

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

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
      <p className="text-gray-400 text-sm">{filteredTasks.length} Items left</p>
      <div className="flex items-center space-x-2">
        <button
          className="text-white hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => handleFilter('All')}
        >
          All
        </button>
        <button
          className="text-white hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => handleFilter('Active')}
        >
          Active
        </button>
        <button
          className="text-white hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => handleFilter('Completed')}
        >
          Completed
        </button>
      </div>
      <button
        className="text-white hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => handleDeleteCompleted()}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default Filters;
