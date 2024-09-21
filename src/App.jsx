import React, { useEffect } from "react";
import { useState } from "react";
import Task from "./Components/Task";

function App() {
  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState([
    // {
    //   id: 1,
    //   description: "I am in love",
    // },
    // {
    //   id: 2,
    //   description: "Kya muze pyar hain",
    // },
    // {
    //   id: 3,
    //   description: "Tune Jo na Kaha",
    // },
  ]);

  const [taskID, setTaskID] = useState(0);
  useEffect(() => {
    const task = JSON.parse(localStorage.getItem("taskList"));
    setTaskList(task);
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  // console.log(taskList);

  return (
    <div className="min-h-screen bg-[#001F3F] text-white flex flex-col items-center justify-center py-5">
      <h1 className="uppercase text-3xl font-bold tracking-widest py-6">
        todo app
      </h1>
      <div className="bg-[#3A6D8C] w-1/2 px-5 py-5 flex flex-col gap-5 rounded">
        <div className="flex w-full">
          <input
            className="bg-inherit border-[#6A9AB0] border-[2px] border-r-0 rounded-l outline-none text-white px-5 w-3/4"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Todo ..."
            type="text"
            value={input}
            name=""
            id=""
          />
          <button
            className="w-1/4 text-white font-semibold bg-orange-500 px-3 py-2 rounded-r uppercase"
            onClick={() => {
              if (input !== "") {
                setTaskList((prevTasklist) => [
                  ...prevTasklist,
                  {
                    id: taskID,
                    description: input,
                  },
                ]);
                setTaskID(taskID + 1);
                setInput("");
              }
            }}
          >
            Add Todo
          </button>
        </div>
        <div className="todos">
          {taskList.map((task) => (
            <Task
              key={task.id}
              data={task}
              taskList={taskList}
              setTaskList={setTaskList}
              input={input}
              setInput={setInput}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
