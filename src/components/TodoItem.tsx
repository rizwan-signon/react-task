import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  setEditTodo,
} from "../context/slices/todoSlice";
import "../styles/todoItems.style.scss";
interface TodoProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span>{todo.text}</span>
      <div className="todo-actions">
        <button onClick={() => dispatch(setEditTodo(todo.id))}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
