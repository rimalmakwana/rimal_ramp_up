function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>

      <div>
        <button onClick={() => onToggle(todo.id)}>Done</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;