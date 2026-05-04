import useFetch from "../hooks/useFetch";

function PostDetail({ postId }) {
  const { data: post, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (isLoading) return <p className="status">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

   if (!post) return null;
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;