import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }

    onAdd(text);
    setText("");
    setError("");
  };

  return (
    <>
      <div className="input-box">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {error && <p className="error">{error}</p>}
    </>
  );
}

export default TodoInput;