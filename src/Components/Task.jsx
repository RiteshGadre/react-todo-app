import React, { useCallback, useState } from "react";

const Task = ({ data, taskList, setTaskList, input, setInput }) => {
    const [operationID, setOperationID] = useState();

    // console.log(data.description);

    const handleEdit = () => {
        setInput(data.description);
        handleDelete()

    }
    
    const handleDelete = () => {
        const updateTaskList = taskList.filter(task => task.id !== data.id)
        console.log(updateTaskList);
        setTaskList(updateTaskList);
    }

  return (
    <div className="flex justify-between gap-3 py-1">
      <p className="bg-[#6A9AB0] py-2 px-5 rounded-full w-4/5">
        {data.description}
      </p>
      <button className=" py-2 px-6 bg-[#001F3F] rounded-full" onClick={handleEdit}>Edit</button>
      <button className=" py-2 px-6 bg-[#001F3F] rounded-full" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
