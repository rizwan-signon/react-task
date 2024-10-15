import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, clearEdit } from "../context/slices/todoSlice.ts";
import { RootState } from "../context/store";
import "../styles/todoform.style.scss";

const TodoForm: React.FC = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();
  const currentTodo = useSelector((state: RootState) => state.todo.currentTodo);

  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
    } else {
      setText("");
    }
  }, [currentTodo]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (currentTodo) {
      // Update existing todo
      dispatch(updateTodo({ id: currentTodo.id, text }));
    } else {
      // Add a new todo
      dispatch(addTodo(text));
    }

    setText("");
  };

  const handleCancelEdit = () => {
    dispatch(clearEdit());
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        {currentTodo ? "Update Todo" : "Add Todo"}
      </button>
      {currentTodo && (
        <button
          type="button"
          className="cancel-button"
          onClick={handleCancelEdit}
        >
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default TodoForm;
