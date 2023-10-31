const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return todos.length === 0 ? (
    <p>No todos to display ! Add new todo.</p>
  ) : (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <div className="todo-option">
            <span
              className="done-btn"
              onClick={() => toggleTodo(todo.id)}
              style={{
                backgroundColor: todo.completed ? "#f1356d" : "",
                color: todo.completed ? "#fff" : "",
              }}
            >
              <i className="fa-solid fa-check"></i>
            </span>

            <span className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              <i className="fa-sharp fa-solid fa-close"></i>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
