import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (!input.trim()) return;
    onSearch(input);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter pokemon name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;