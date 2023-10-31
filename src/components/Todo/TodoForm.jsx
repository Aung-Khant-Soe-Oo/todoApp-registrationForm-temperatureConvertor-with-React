import React, { useReducer, useState } from "react";
import TodoList from "./TodoList";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: state.length + 1, text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleTextInput = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const toggleTodo = (id) => dispatch({ type: "TOGGLE_TODO", payload: id });
  const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <h2>Todo App</h2>
        <div className="input-group">
          <input
            type="text"
            name="todo"
            id="todoInput"
            value={newTodo}
            className="todo-input"
            onChange={handleTextInput}
          />
          <button type="submit" className="addtodo-btn">
            Add Task
          </button>
        </div>
      </form>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoForm;
