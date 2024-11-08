import { memo, useState } from "react";
import { IPost } from "../../types/IPost";
import { useUpdatePostMutation } from "../../store/api/posts.api";

const Post = memo(({ id, title, content }: IPost) => {
  const [post, setPost] = useState({
    title: title,
    content: content,
  });

  const [updatePost] = useUpdatePostMutation();

  const handleSavePost = async () => {
    try {
      await updatePost({
        id,
        title: post.title,
        content: post.content,
      }).unwrap();
    } catch (err) {
      console.error("Failed to update post: ", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        defaultValue={title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
      />
      <input
        type="text"
        defaultValue={content}
        onChange={(e) => {
          setPost({ ...post, content: e.target.value });
        }}
      />
      <button onClick={handleSavePost}>Изменить</button>
    </div>
  );
});

export default Post;
