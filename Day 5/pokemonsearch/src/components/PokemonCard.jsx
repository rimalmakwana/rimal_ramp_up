function PokemonCard({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>

      <img src={data.sprites.front_default} alt={data.name} />

      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>

      <p>
        Types: {data.types.map((t) => t.type.name).join(", ")}
      </p>
    </div>
  );
}

export default PokemonCard;