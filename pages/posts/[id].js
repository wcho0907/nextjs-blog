import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  //http://localhost:3000/posts/123?abc=456
  const { id,abc } = router.query;

  return <p>Post: {id} {abc}</p>;
};

export default Post;