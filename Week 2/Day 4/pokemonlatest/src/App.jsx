import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import SkeletonCard from "./components/SkeletonCard";
import ErrorCard from "./components/ErrorCard";
import RecentSearches from "./components/RecentSearches";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [typeFilter, setTypeFilter] = useState("all");

  const fetchPokemon = async (term) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`
      );

      if (!res.ok) throw new Error("Pokemon not found");

      const data = await res.json();
      setPokemon(data);

      // store name + types
      setHistory((prev) => {
        const updated = [
          { name: term, types: data.types.map((t) => t.type.name) },
          ...prev,
        ];

        // remove duplicates
        const unique = updated.filter(
          (item, index, self) =>
            index === self.findIndex((i) => i.name === item.name)
        );

        return unique.slice(0, 5);
      });

    } catch (err) {
      setError(err.message);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchTerm) return;
    fetchPokemon(searchTerm);
  }, [searchTerm]);

  const filteredHistory =
    typeFilter === "all"
      ? history
      : history.filter((h) => h.types.includes(typeFilter));

  return (
    <div className="app">
      <h1>Pokemon Search</h1>

      <SearchBar onSearch={setSearchTerm} />

      {/* FILTER */}
      <select onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="all">All Types</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
      </select>

      <RecentSearches
        history={filteredHistory}
        onSearch={setSearchTerm}
      />

      {loading && <SkeletonCard />}
      {error && <ErrorCard message={error} onRetry={() => fetchPokemon(searchTerm)} />}
      {pokemon && !loading && <PokemonCard data={pokemon} />}
    </div>
  );
}

export default App;