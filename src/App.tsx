import Posts from "./components/posts/Posts";
import useActions from "./hooks/useActions";
import usePosts from "./hooks/usePosts";

const App = () => {
  const { getPosts } = useActions();
  const { posts } = usePosts();

  return (
    <div>
      <button onClick={() => getPosts()}>Get Posts</button>
      <Posts posts={posts.posts} loading={posts.loading} />
    </div>
  );
};

export default App;
