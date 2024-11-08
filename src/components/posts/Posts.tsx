import { memo } from "react";
import { IPost } from "../../types/IPost";
import Post from "../post/Post";
import styles from "./posts.module.scss";
import { PostsProps } from "../../types/IPostsProps";

const Posts = memo(({ posts, loading }: PostsProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.postsList}>
      {posts?.map((item: IPost, index: number) => {
        return (
          <Post
            key={index}
            id={item.id}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
});

export default Posts;
