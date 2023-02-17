import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  //http://localhost:3000/posts/123?abc=456
  const { date } = router.query;
  
  return <div>
            Post: {date}
         </div>;
};

export default Post;