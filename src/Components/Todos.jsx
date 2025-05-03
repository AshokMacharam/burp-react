import { useState } from "react";
import Child from "./Child";

function Todos() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function taskUpdate(e) {
    setTask(e.target.value);

    // setTask(e.target.value);
  }
  console.log(task);
  function addTask() {
    setTasks([...tasks, task]);
    setTask("");
  }
  function getChildData(data) {
    console.log("data from child: ", data);
  }

  function deleteTask(singleTask) {
    setTasks((initialData) => {
      return initialData.filter((task) => {
        return task !== singleTask;
      });
    });
  }
  return (
    <div>
      <h1>Todos</h1>
      <input
        onChange={taskUpdate}
        value={task}
        type="text"
        className="m-2"
      ></input>
      <button onClick={addTask} className="btn btn-info">
        Add todo
      </button>

      <div>
        {tasks.map((singleTask) => {
          return (
            <div key={singleTask}>
              <span>{singleTask}</span>
              <button
                className="btn btn-danger m-2"
                onClick={() => {
                  deleteTask(singleTask);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <Child getData={getChildData} />
    </div>
  );
}

export default Todos;
