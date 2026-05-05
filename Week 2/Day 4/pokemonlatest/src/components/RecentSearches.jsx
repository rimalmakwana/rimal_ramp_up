function RecentSearches({ history, onSearch }) {
  return (
    <div>
      <h3>Recent Searches</h3>
      <div className="chips">
        {history.map((item, index) => (
          <button
            key={index}
            className="chip"
            onClick={() => onSearch(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;