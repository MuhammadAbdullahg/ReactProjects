import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    // add task to array
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    // remove task from array
    const filterItems = todos.filter((_, i) => i !== index);
    setTodos(filterItems);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: "5px" }}>
            {todo}
            <button onClick={() => deleteTask(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
