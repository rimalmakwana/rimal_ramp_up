import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
        );

        if (!res.ok) throw new Error("Pokemon not found");

        const data = await res.json();
        setPokemon(data);

        // last 3 searches
        setHistory((prev) => {
          const updated = [searchTerm, ...prev];
          return [...new Set(updated)].slice(0, 3);
        });

      } catch (err) {
        setError(err.message);
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>Pokemon Search</h1>

      <SearchBar onSearch={setSearchTerm} />

      <h3>Last Searches:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {pokemon && <PokemonCard data={pokemon} />}
    </div>
  );
}

export default App;