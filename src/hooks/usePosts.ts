import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const usePosts = () => {
  const { posts } = useSelector((state: RootState) => state);
  return { posts };
};

export default usePosts;
