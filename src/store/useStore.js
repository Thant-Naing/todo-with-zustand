import { create } from "zustand"

  const useStore = create((set) => ({
  tasks:[
      { id: 1, task: "Complete JavaScript assignment", isDone: false },
      { id: 2, task: "Prepare for meeting with client", isDone: false },
      { id: 3, task: "Update project documentation", isDone: true },
      { id: 4, task: "Review code for new feature", isDone: false },
      { id: 5, task: "Plan team-building activity", isDone: true },
     ] ,
  addTasks: (data) => set((state) => ({ tasks:[ ...state.tasks,data] })),
  deleTasks: (id) => set((state) => ({ tasks: state.tasks.filter((ts) => ts.id !== id ) })),
  updateTasks: (id,data) => set((state) =>  ({ tasks: state.tasks.map((ts) => ts.id == id ? {...ts,task:data} : ts ) }) ),
  checkTasks :(id) => set((state) =>  ({ tasks: state.tasks.map((ts) => ts.id == id ? {...ts,isDone:!ts.isDone} : ts ) }) ),
}))

export default useStore;