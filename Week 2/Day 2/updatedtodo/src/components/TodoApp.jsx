import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import FilterBar from "./FilterBar";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // ADD
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // TOGGLE
  const toggleTodo = (id) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
  };

  // DELETE
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // CLEAR COMPLETED
  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  // FILTER 
  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "done") return t.completed;
    return true;
  });

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="container">
      <h2>Todo App</h2>

      <TodoInput onAdd={addTodo} />

      <FilterBar filter={filter} setFilter={setFilter} />

      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      <div className="footer">
        <p>{remaining} tasks left</p>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoApp;