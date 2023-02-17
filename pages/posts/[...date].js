import Link from "next/link";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { date } = router.query;
  
  return <div>
            Post: {date}
         </div>;
};

export default Post;