import React from "react";
import useStore from "../store/useStore";
import 'animate.css';

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {

  const {deleTasks,checkTasks} = useStore()
 
  const handleRemoveTaskBtn = () => {
    if (confirm("Are you sure to delete?")) {
      deleTasks(id);
    }
  };

  const handleOnChange = () => {
    checkTasks(id);
  };
  return (
    <div className=" animate__animated  flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0">
      <div className=" flex items-center gap-3">
        <input
          type="checkbox"
          onChange={handleOnChange}
          checked={isDone}
          className="size-4"
        />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
      <button
        onClick={handleRemoveTaskBtn}
        className="text-sm bg-red-100 border-2 border-red-100  rounded-lg py-2 text-red-700 px-4"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
