import React from "react";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <li>
        <div>
          <input
            onChange={() => toggleComplete(todo)}
            type="checkbox"
            checked={todo.completed}
          />
          <p onClick={() => toggleComplete(todo)}>{todo.text}</p>
        </div>
        <button onClick={() => deleteTodo(todo.id)}>delete</button>
      </li>
    </div>
  );
};

export default Todo;
