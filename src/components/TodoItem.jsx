function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <>
      <span className={`priority ${todo.priority.toLowerCase()}`}>
        {todo.priority}
      </span>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.title}</span>

        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    </>
  );
}

export default TodoItem;
