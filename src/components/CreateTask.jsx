import React, { useState } from "react";
import useStore from "../store/useStore";


const CreateTask = () => {
  const [job, setJob] = useState("");
  const {addTasks,updateTasks,checkTasks} = useStore()
  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  

  const handleAddTaskBtn = () => {
    const newTask = {
      id: Date.now(),
      task: job,
      isDone: false,
    };
    addTasks(newTask);
    setJob("");
  };

  return (
    <div className=" flex mb-5">
      <input
        type="text"
        className=" flex-grow  border-2 border-slate-300  rounded-l-lg p-2"
        value={job}
        onChange={handleOnChange}
        placeholder="Write your new task"
      />
      <button
        onClick={handleAddTaskBtn}
        className=" bg-slate-300 border-2 border-slate-300  rounded-r-lg py-2 px-4"
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
