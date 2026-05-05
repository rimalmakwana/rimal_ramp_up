function PokemonCard({ data }) {
  return (
    <div className="card">
      <h2>{data.name}</h2>

      <img src={data.sprites.front_default} alt={data.name} />

      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>

      <div className="types">
        {data.types.map((t) => (
          <span key={t.type.name} className={`badge ${t.type.name}`}>
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;