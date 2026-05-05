export default function RecentCities({ cities, onSelect }) {
  return (
    <div className="recent">
      {cities.map((c, i) => (
        <button key={i} onClick={() => onSelect(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}