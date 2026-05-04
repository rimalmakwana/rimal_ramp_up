import PostDetail from "./components/PostDetail";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Post Viewer</h1>
      <PostDetail postId={1} />
      <PostDetail postId={2} />
      <PostDetail postId={3} />
    </div>
  );
}

export default App;