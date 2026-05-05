function ErrorCard({ message, onRetry }) {
  return (
    <div className="card error">
      <p>{message}</p>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
}

export default ErrorCard;