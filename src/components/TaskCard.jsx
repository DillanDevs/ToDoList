import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, handleSetComplete } = useContext(TaskContext);

  const {id, title, completed, descripcion} = task

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      {completed ? (
        <span onClick={() => handleSetComplete(id)} className="bg-green-500 border border-gray-500 border-solid p-3 rounded-full float-right cursor-pointer"></span>
      ) : (
        <span onClick={() => handleSetComplete(id)} className="border border-gray-500 border-solid p-3 rounded-full float-right cursor-pointer"></span>
      )}
      <h1 className={"text-xl font-bold capitalize " + (completed && "line-through")}>{title}</h1>
      <p className={"text-gray-500 text-sm " + (completed && "line-through")}>{descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
