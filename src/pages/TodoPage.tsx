import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../context/store";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import "../styles/todopage.style.scss";
const TodoPage: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <div className="todo-page">
      <TodoForm />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
